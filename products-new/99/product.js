
const product = {
  id: "99",
  name: "حقيبة نسائية أنيقة - موديل 99",
  price: 10,
  size: "وسط",
  dimensions: "30 سم عرض × 21 سم ارتفاع",
  image: "99white.jpg",
  gallery: [
    "99white.jpg",
    "99kaki.jpg",
    "99inside.jpg",
    "99inside2.jpg"
  ],
  colors: [
    {
      name: "ابيض",
      colorName: "ابيض",
      value: "#ffffff",
      image: "99white.jpg"
    },
    {
      name: "كاكي",
      colorName: "كاكي",
      value: "#b89778",
      image: "99kaki.jpg"
    }
  ]
};

window.AMO_PRODUCTS = window.AMO_PRODUCTS || [];
window.AMO_PRODUCTS.push(product);
