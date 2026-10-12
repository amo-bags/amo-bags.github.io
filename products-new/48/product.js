const product = {
  id: "48",
  name: "شنطة نسائية - موديل 48",
  price: 10,
  size: "عرض 23 سم × ارتفاع 15 سم",
  dimensions: "23 سم × 15 سم",
  image: "48camil.jpg",
  colors: [
    { name: "عسلي", colorName: "عسلي", value: "#C29B61", image: "48camil.jpg" },
    { name: "أسود", colorName: "أسود", value: "#1a1a1a", image: "48black.jpg" },
    { name: "عسلي 2", colorName: "عسلي 2", value: "#B88A44", image: "48camil2.jpg" }
  ],
  gallery: [
    "48inside.jpg",
    "48camil.jpg",
    "48black.jpg",
    "48camil2.jpg"
  ]
};

window.AMO_PRODUCTS = window.AMO_PRODUCTS || [];
window.AMO_PRODUCTS.push(product);

