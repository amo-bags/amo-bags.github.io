const product = {
  id: "64",
  name: "حقيبة نسائية أنيقة - موديل 64",
  price: 5,
  size: "وسط",
  dimensions: "25 سم عرض × 17 سم ارتفاع",
  image: "64black.png",
  gallery: [
    "64black.png",
    "64balck1.png",
    "64black2.png",
    "64balck3.png",
    "63inside.jpg"
  ],
  colors: [
    {
      name: "أسود",
      colorName: "أسود",
      value: "#000000",
      image: "64black.png"
    },
    {
      name: "أسود 1",
      colorName: "أسود 1",
      value: "#1a1a1a",
      image: "64balck1.png"
    },
    {
      name: "أسود 2",
      colorName: "أسود 2",
      value: "#2b2b2b",
      image: "64black2.png"
    },
    {
      name: "أسود 3",
      colorName: "أسود 3",
      value: "#383838",
      image: "64balck3.png"
    }
  ]
};

window.AMO_PRODUCTS = window.AMO_PRODUCTS || [];
window.AMO_PRODUCTS.push(product);
