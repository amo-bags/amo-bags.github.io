const fs = require('fs');
const path = require('path');

// تحديد عدد المنتجات أو مصفوفة الأرقام حسب المتوفر لديك
const productIds = Array.from({length: 70}, (_, i) => i + 1);

console.log('جاري بدء توليد صفحات المعاينة للمنتجات...');

productIds.forEach(id => {
  // مسار ملف المنتج داخل مجلد products-new
  const productFilePath = path.join(__dirname, 'products-new', String(id), 'product.js');
  
  if (fs.existsSync(productFilePath)) {
    try {
      const fileContent = fs.readFileSync(productFilePath, 'utf8');
      
      // استخراج بيانات المنتج من ملف الـ JS بطريقة آمنة
      let product = null;
      try {
        product = new Function(fileContent + `\nreturn (typeof product !== 'undefined' ? product : (typeof product${id} !== 'undefined' ? product${id} : null));`)();
      } catch (e) {
        console.error(`خطأ في تحليل بيانات المنتج ${id}:`, e.message);
      }

      if (product) {
        const title = `${product.name} | AMO`;
        const desc = `شنطة نسائية أنيقة - السعر: ${Number(product.price).toFixed(2)} د.أ${product.size ? ' - ' + product.size : ''}`;
        
        // معالجة مسار الصورة لتكون مطلقة بالكامل لضمان ظهورها في واتساب وفيسبوك
        let image = product.image || 'https://amo-bags.github.io/logo/logo.jpg';
        if (image.startsWith('./')) {
          image = 'https://amo-bags.github.io/' + image.replace('./', '');
        } else if (!image.startsWith('http')) {
          image = 'https://amo-bags.github.io/' + image.replace(/^\/+/, '');
        }

        const url = `https://amo-bags.github.io/product/${id}/index.html`;

        // قالب صفحة المعاينة الثابتة لروبوتات السوشيال ميديا مع إعادة توجيه المستخدمين تلقائياً
        const htmlContent = `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<title>${title}</title>
<meta property="og:type" content="website">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${desc}">
<meta property="og:image" content="${image}">
<meta property="og:url" content="${url}">
<meta http-equiv="refresh" content="0;url=https://amo-bags.github.io/#product=${id}">
</head>
<body>
<p>جاري تحويلك إلى تفاصيل المنتج في متجر AMO... <a href="https://amo-bags.github.io/#product=${id}">اضغط هنا إذا لم يتم التحويل تلقائياً</a></p>
<script>
  window.location.replace("https://amo-bags.github.io/#product=${id}");
</script>
</body>
</html>`;

        // إنشاء المجلد الفرعي product/[id] إذا لم يكن موجوداً
        const dir = path.join(__dirname, 'product', String(id));
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir, { recursive: true });
        }

        // حفظ ملف index.html داخل المجلد
        fs.writeFileSync(path.join(dir, 'index.html'), htmlContent, 'utf8');
        console.log(`✅ تم بنجاح توليد صفحة المعاينة للمنتج رقم: ${id}`);
      }
    } catch (err) {
      console.error(`❌ حدث خطأ أثناء معالجة المنتج ${id}:`, err.message);
    }
  }
});

console.log('🎉 انتهى توليد جميع صفحات المعاينة للمنتجات بنجاح!');
