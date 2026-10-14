
const product = {
  id: "90",
  name: "حقيبة نسائية أنيقة - موديل 90",
  price: 10,
  size: "وسط",
  dimensions: "31 سم عرض × 21 سم ارتفاع",
  image: "90black.png",
  gallery: [
    "90black.png",
    "90camil.png",
    "90kaki.png",
    "901.png",
    "905.png",
    "90inside.png"
  ],
  colors: [
    {
      name: "أسود",
      colorName: "أسود",
      value: "#000000",
      image: "90black.png"
    },
    {
      name: "عسلي",
      colorName: "عسلي",
      value: "#c5a059",
      image: "90camil.png"
    },
    {
      name: "بيج",
      colorName: "بيج",
      value: "#f5f5dc",
      image: "90kaki.png"
    }
  ]
};

window.AMO_PRODUCTS = window.AMO_PRODUCTS || [];
window.AMO_PRODUCTS.push(product);
