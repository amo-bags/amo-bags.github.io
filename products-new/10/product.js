const product = {
  id: "10",
  name: "حقيبة نسائية أنيقة - موديل 10",
  price: 15,
  size: "كبير",
  dimensions: "41 سم عرض × 21 سم ارتفاع",
  image: "10brown.jpg",
  gallery: [
    "10brown.jpg",
    "10camil.jpg",
    "1776622137804.jpg",
    "1776622157397.jpg"
  ],
  colors: [
    {
      name: "بني",
      colorName: "بني",
      value: "#5c4033",
      image: "10brown.jpg"
    },
    {
      name: "عسلي",
      colorName: "عسلي",
      value: "#c5a059",
      image: "10camil.jpg"
    }
  ]
};

window.AMO_PRODUCTS = window.AMO_PRODUCTS || [];
window.AMO_PRODUCTS.push(product);
