const product = {
  id: "102",
  name: "حقيبة رسمية أنيقة - موديل 102",
  price: 10,
  size: "صغيرة",
  dimensions: "22 سم عرض × 12 سم ارتفاع",
  image: "102black.png",
  gallery: [
    "102black.png",
    "102golf.png",
    "102silcer.png",
    "1021.png",
    "1022.png",
    "1023.png",
    "102inside.png"
  ],
  colors: [
    {
      name: "اسود",
      colorName: "اسود",
      value: "#000000",
      image: "102black.png"
    },
    {
      name: "ذهبي",
      colorName: "ذهبي",
      value: "#d4af37",
      image: "102golf.png"
    },
    {
      name: "فضي",
      colorName: "فضي",
      value: "#c0c0c0",
      image: "102silcer.png"
    }
  ]
};

window.AMO_PRODUCTS = window.AMO_PRODUCTS || [];
window.AMO_PRODUCTS.push(product);

