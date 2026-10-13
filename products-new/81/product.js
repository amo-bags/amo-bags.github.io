const product = {
  id: "81",
  name: "حقيبة نسائية أنيقة - موديل 81",
  price: 10,
  size: "بين الوسط والصغير",
  dimensions: "21 سم عرض × 16 سم ارتفاع",
  image: "81black.png",
  gallery: [
    "81black.png",
    "81kaki.png",
    "81brown.png",
    "81offwhite.png",
    "81inside.jpg"
  ],
  colors: [
    {
      name: "أسود",
      colorName: "أسود",
      value: "#000000",
      image: "81black.png"
    },
    {
      name: "كاكي",
      colorName: "كاكي",
      value: "#b89778",
      image: "81kaki.png"
    },
    {
      name: "عسلي محروق",
      colorName: "عسلي محروق",
      value: "#a0522d",
      image: "81brown.png"
    },
    {
      name: "أوف وايت",
      colorName: "أوف وايت",
      value: "#fdfbf7",
      image: "81offwhite.png"
    }
  ]
};

window.AMO_PRODUCTS = window.AMO_PRODUCTS || [];
window.AMO_PRODUCTS.push(product);
