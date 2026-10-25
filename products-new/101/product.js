const product = {
  id: "101",
  name: "حقيبة رسمية أنيقة - موديل 101",
  price: 10,
  size: "صغيرة",
  dimensions: "22 سم عرض × 12 سم ارتفاع",
  image: "101black.png",
  gallery: [
    "101black.png",
    "101gold.png",
    "101silver.png",
    "1011.png",
    "1012.png",
    "1013.png",
    "1014.png",
    "101inside.png"
  ],
  colors: [
    {
      name: "اسود",
      colorName: "اسود",
      value: "#000000",
      image: "101black.png"
    },
    {
      name: "ذهبي",
      colorName: "ذهبي",
      value: "#d4af37",
      image: "101gold.png"
    },
    {
      name: "فضي",
      colorName: "فضي",
      value: "#c0c0c0",
      image: "101silver.png"
    }
  ]
};

window.AMO_PRODUCTS = window.AMO_PRODUCTS || [];
window.AMO_PRODUCTS.push(product);

