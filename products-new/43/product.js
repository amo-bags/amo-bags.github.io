const product = {
  id: "43",
  name: "حقيبة نسائية أنيقة - موديل 43",
  price: 15,
  size: "وسط",
  dimensions: "29 سم عرض × 22 سم ارتفاع",
  image: "43darkred.jpg",
  gallery: [
    "43darkred.jpg",
    "43blue.jpg",
    "43pink.jpg",
    "43inside.png"
  ],
  colors: [
    {
      name: "خمري",
      colorName: "خمري",
      value: "#800020",
      image: "43darkred.jpg"
    },
    {
      name: "ازرق",
      colorName: "ازرق",
      value: "#1b263b",
      image: "43blue.jpg"
    },
    {
      name: "زهر",
      colorName: "زهر",
      value: "#ffc0cb",
      image: "43pink.jpg"
    }
  ]
};

window.AMO_PRODUCTS = window.AMO_PRODUCTS || [];
window.AMO_PRODUCTS.push(product);
