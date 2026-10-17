const product = {
  id: "95",
  name: "حقيبة نسائية أنيقة - موديل 95",
  price: 15,
  size: "وسط",
  dimensions: "31 سم عرض × 17 سم ارتفاع",
  image: "95black.png",
  gallery: [
    "95black.png",
    "95offwhite.png",
    "95side.jpg",
    "95inside.jpg",
    "95size.jpg"
  ],
  colors: [
    {
      name: "اسود",
      colorName: "اسود",
      value: "#000000",
      image: "95black.png"
    },
    {
      name: "اوفوايت",
      colorName: "اوفوايت",
      value: "#fdfbf7",
      image: "95offwhite.png"
    }
  ]
};

window.AMO_PRODUCTS = window.AMO_PRODUCTS || [];
window.AMO_PRODUCTS.push(product);

