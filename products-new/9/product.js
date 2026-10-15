
const product = {
  id: "9",
  name: "حقيبة نسائية أنيقة - موديل 9",
  price: 15,
  size: "وسط",
  dimensions: "28 سم عرض × 20 سم ارتفاع",
  image: "9black.jpg",
  gallery: [
    "9black.jpg",
    "9offwhite.jpg",
    "9brown.jpg",
    "9camil.jpg",
    "9side.jpg",
    "9inside.jpg"
  ],
  colors: [
    {
      name: "اسود",
      colorName: "اسود",
      value: "#000000",
      image: "9black.jpg"
    },
    {
      name: "اوفوايت",
      colorName: "اوفوايت",
      value: "#fdfbf7",
      image: "9offwhite.jpg"
    },
    {
      name: "بني",
      colorName: "بني",
      value: "#5c4033",
      image: "9brown.jpg"
    },
    {
      name: "عسلي",
      colorName: "عسلي",
      value: "#c5a059",
      image: "9camil.jpg"
    }
  ]
};

window.AMO_PRODUCTS = window.AMO_PRODUCTS || [];
window.AMO_PRODUCTS.push(product);
