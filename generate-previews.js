const fs = require('fs');
const path = require('path');

const productsNewDir = path.join(__dirname, 'products-new');
console.log('جاري فحص جميع مجلدات المنتجات...');

if (!fs.existsSync(productsNewDir)) {
  console.error('مجلد products-new غير موجود!');
  process.exit(1);
}

const folders = fs.readdirSync(productsNewDir);
let successCount = 0;
let failCount = 0;

folders.forEach(folderName => {
  const productFilePath = path.join(productsNewDir, folderName, 'product.js');
  
  if (fs.existsSync(productFilePath)) {
    try {
      const fileContent = fs.readFileSync(productFilePath, 'utf8');
      let product = null;
      
      // المحاولة الأولى: التشغيل المباشر للـ JS
      try {
        product = new Function(fileContent + `\nreturn (typeof product !== 'undefined' ? product : (typeof product${folderName} !== 'undefined' ? product${folderName} : (window.product || null)));`)();
      } catch (err1) {
        // المحاولة الثانية (الاحتياطية): استخراج البيانات تلقائياً حتى لو وجد خطأ في الكود
        const nameMatch = fileContent.match(/name\s*:\s*["']([^"']+)["']/);
        const priceMatch = fileContent.match(/price\s*:\s*([0-9.]+)/);
        const imageMatch = fileContent.match(/image\s*:\s*["']([^"']+)["']/);
        const sizeMatch = fileContent.match(/size\s*:\s*["']([^"']+)["']/);
        
        if (nameMatch) {
          product = {
            id: folderName,
            name: nameMatch[1],
            price: priceMatch ? priceMatch[1] : 0,
            image: imageMatch ? imageMatch[1] : '',
            size: sizeMatch ? sizeMatch[1] : ''
          };
        }
      }

      if (product) {
        const id = product.id || folderName;
        const title = `${product.name} | AMO`;
        const desc = `شنطة نسائية أنيقة - موديل ${id} - السعر: ${Number(product.price || 0).toFixed(2)} د.أ${product.size ? ' - ' + product.size : ''}`;
        
        let image = product.image || '';
        if (image) {
          if (image.startsWith('http')) {
            // رابط مباشر جاهز
          } else if (image.startsWith('./')) {
            image = `https://amo-bags.github.io/products-new/${folderName}/` + image.replace('./', '');
          } else {
            image = `https://amo-bags.github.io/products-new/${folderName}/` + image.replace(/^\/+/, '');
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
<p>جاري تحويلك إلى تفاصيل المنتج في متجر AMO...</p>
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
        successCount++;
      } else {
        console.log(`⚠️ تعذر استخراج بيانات للمنتج في المجلد: ${folderName}`);
        failCount++;
      }
    } catch (err) {
      console.error(`❌ خطأ في معالجة المجلد ${folderName}:`, err.message);
      failCount++;
    }
  }
});

console.log(`🎉 التقرير النهائي: تم توليد ${successCount} صفحة معاينة بنجاح من أصل ${folders.length} مجلداً.`);
