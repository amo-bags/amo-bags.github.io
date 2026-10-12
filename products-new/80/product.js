const product = {
  id: "80",
  name: "حقيبة نسائية أنيقة - موديل 80",
  price: 10,
  size: "كبير",
  dimensions: "30 سم عرض × 28 سم ارتفاع",
  image: "80camil.png",
  gallery: [
    "80camil.png",
    "80brown.png",
    "80inside.jpg"
  ],
  colors: [
    {
      name: "عسلي",
      colorName: "عسلي",
      value: "#c5a059",
      image: "80camil.png"
    },
    {
      name: "بني",
      colorName: "بني",
      value: "#5c4033",
      image: "80brown.png"
    }
  ]
};

window.AMO_PRODUCTS = window.AMO_PRODUCTS || [];
window.AMO_PRODUCTS.push(product);

