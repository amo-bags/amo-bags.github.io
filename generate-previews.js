const fs = require('fs');
const path = require('path');

const productsNewDir = path.join(__dirname, 'products-new');

console.log('جاري بدء توليد صفحات المعاينة لجميع المنتجات...');

if (fs.existsSync(productsNewDir)) {
  const folders = fs.readdirSync(productsNewDir);

  folders.forEach(folderName => {
    const productFilePath = path.join(productsNewDir, folderName, 'product.js');
    
    if (fs.existsSync(productFilePath)) {
      try {
        const fileContent = fs.readFileSync(productFilePath, 'utf8');
        
        let product = null;
        try {
          product = new Function(fileContent + `\nreturn (typeof product !== 'undefined' ? product : (typeof product${folderName} !== 'undefined' ? product${folderName} : null));`)();
        } catch (e) {
          console.error(`خطأ في تحليل بيانات المنتج ${folderName}:`, e.message);
        }

        if (product) {
          const id = product.id || folderName;
          const title = `${product.name} | AMO`;
          const desc = `شنطة نسائية أنيقة - موديل ${id} - السعر: ${Number(product.price).toFixed(2)} د.أ${product.size ? ' - ' + product.size : ''}`;
          
          // معالجة ذكية لرابط الصورة لتتحول دائماً إلى رابط مطلق وصحيح 100%
          let image = product.image || '';
          if (image) {
            if (image.startsWith('http')) {
              // جاهزة كما هي
            } else if (image.startsWith('./')) {
              image = `https://amo-bags.github.io/products-new/${id}/` + image.replace('./', '');
            } else {
              // إذا كان اسم الصورة مجرداً (بدون ./ أو http) سيقوم بربطه بالمجلد تلقائياً
              image = `https://amo-bags.github.io/products-new/${id}/` + image.replace(/^\/+/, '');
            }
          } else {
            image = 'https://amo-bags.github.io/logo/logo.jpg';
          }

          const url = `https://amo-bags.github.io/product/${id}/index.html`;

          const htmlContent = `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<title>${title}</title>
<meta property="og:type" content="website">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${desc}">
<meta property="og:image" content="${image}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:url" content="${url}">
<meta http-equiv="refresh" content="0;url=https://amo-bags.github.io/#product=${id}">
</head>
<body>
<p>جاري تحويلك إلى تفاصيل المنتج في متجر AMO... <a href="https://amo-bags.github.io/#product=${id}">اضغط هنا</a></p>
<script>
  window.location.replace("https://amo-bags.github.io/#product=${id}");
</script>
</body>
</html>`;

          const dir = path.join(__dirname, 'product', String(id));
          if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
          }

          fs.writeFileSync(path.join(dir, 'index.html'), htmlContent, 'utf8');
          console.log(`✅ تم بنجاح توليد المعاينة للمنتج: ${id} مع الصورة: ${image}`);
        }
      } catch (err) {
        console.error(`❌ خطأ في معالجة المنتج ${folderName}:`, err.message);
      }
    }
  });
}

console.log('🎉 انتهى توليد جميع صفحات المعاينة بنجاح!');
