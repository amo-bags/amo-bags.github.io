const product = {
  id: "76",
  name: "حقيبة نسائية أنيقة - موديل 76",
  price: 5,
  size: "بين الوسط والصغير",
  dimensions: "25 سم عرض × 15 سم ارتفاع",
  image: "76black.png",
  gallery: [
    "76black.png",
    "76kaki.png",
    "76white.png",
    "76pink.png",
    "76brown.png",
    "inside.png"
  ],
  colors: [
    {
      name: "كاكي",
      colorName: "كاكي",
      value: "#b89778",
      image: "76kaki.png"
    },
    {
      name: "أسود",
      colorName: "أسود",
      value: "#000000",
      image: "76black.png"
    },
    {
      name: "أبيض",
      colorName: "أبيض",
      value: "#ffffff",
      image: "76white.png"
    },
    {
      name: "زهر",
      colorName: "زهر",
      value: "#ffc0cb",
      image: "76pink.png"
    },
    {
      name: "بني",
      colorName: "بني",
      value: "#5c4033",
      image: "76brown.png"
    }
  ]
};

window.AMO_PRODUCTS = window.AMO_PRODUCTS || [];
window.AMO_PRODUCTS.push(product);

