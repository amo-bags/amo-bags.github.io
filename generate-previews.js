const fs = require('fs');
const path = require('path');

const productsDir = path.join(__dirname, 'products-new');
if (!fs.existsSync(productsDir)) {
    console.log("Products directory not found!");
    process.exit(0);
}

const productFolders = fs.readdirSync(productsDir);

productFolders.forEach(folderId => {
    const productFilePath = path.join(productsDir, folderId, 'product.js');
    if (fs.existsSync(productFilePath)) {
        try {
            const content = fs.readFileSync(productFilePath, 'utf8');
            let productData = null;
            try {
                productData = new Function(content + "\nreturn (typeof product !== 'undefined' ? product : (typeof product" + folderId + " !== 'undefined' ? product" + folderId + " : null));")();
            } catch (e) {}

            if (productData) {
                const name = productData.name || `حقيبة AMO #${folderId}`;
                const price = productData.price ? `${productData.price} د.أ` : '';
                let image = productData.image || '';
                
                if (image && !image.startsWith('http')) {
                    image = `https://amo-bags.github.io/products-new/${folderId}/${image.replace(/^\/+/, '')}`;
                } else if (!image) {
                    image = 'https://amo-bags.github.io/logo/logo.jpg';
                }

                const outDir = path.join(__dirname, 'product', folderId);
                fs.mkdirSync(outDir, { recursive: true });

                const htmlContent = `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <title>${name} | AMO</title>
    <meta property="og:title" content="${name} - ${price}">
    <meta property="og:description" content="تشكيلة مميزة من أحدث الحقائب النسائية - توصيل سريع لجميع المحافظات">
    <meta property="og:image" content="${image}">
    <meta property="og:url" content="https://amo-bags.github.io/product/${folderId}/">
    <meta http-equiv="refresh" content="0;url=https://amo-bags.github.io/#product=${folderId}">
</head>
<body>
    <p>جاري تحويلك إلى تفاصيل المنتج...</p>
</body>
</html>`;

                fs.writeFileSync(path.join(outDir, 'index.html'), htmlContent);
                console.log(`Generated preview page for product ID: ${folderId}`);
            }
        } catch (err) {
            console.error(`Error processing product ${folderId}:`, err);
        }
    }
});
