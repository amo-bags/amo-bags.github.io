
const product = {
  id: "100",
  name: "حقيبة نسائية أنيقة - موديل 100",
  price: 5,
  size: "صغيرة",
  dimensions: "22 سم عرض × 15 سم ارتفاع",
  image: "100white.jpg",
  gallery: [
    "100white.jpg",
    "100black.jpg",
    "100nude.jpg"
  ],
  colors: [
    {
      name: "ابيض",
      colorName: "ابيض",
      value: "#ffffff",
      image: "100white.jpg"
    },
    {
      name: "اسود",
      colorName: "اسود",
      value: "#000000",
      image: "100black.jpg"
    },
    {
      name: "نود",
      colorName: "نود",
      value: "#d8b29c",
      image: "100nude.jpg"
    }
  ]
};

window.AMO_PRODUCTS = window.AMO_PRODUCTS || [];
window.AMO_PRODUCTS.push(product);
