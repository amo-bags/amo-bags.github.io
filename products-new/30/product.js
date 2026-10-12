const product = {
  id: "30",
  name: "شنطة نسائية - موديل 30",
  price: 10,
  size: "وسط",
  dimensions: "",
  image: "balck30.png",
  colors: [
    { name: "أسود", colorName: "أسود", value: "#000000", image: "balck30.png" },
    { name: "عسلي", colorName: "عسلي", value: "#c5a059", image: "camil30.png" },
    { name: "أوف وايت", colorName: "أوف وايت", value: "#fefefa", image: "offwhite30.png" }
  ],
  gallery: [
    "balck30.png",
    "camil30.png",
    "offwhite30.png",
    "30inside.jpg"
  ]
};

window.AMO_PRODUCTS = window.AMO_PRODUCTS || [];
window.AMO_PRODUCTS.push(product);
