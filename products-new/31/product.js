const product = {
  id: "31",
  name: "شنطة نسائية - موديل 31",
  price: 10,
  size: "وسط (عرض 30 سم × ارتفاع 20 سم)",
  dimensions: "30 سم × 20 سم",
  image: "31camil.png",
  colors: [
    { name: "عسلي", colorName: "عسلي", value: "#c5a059", image: "31camil.png" },
    { name: "أسود", colorName: "أسود", value: "#000000", image: "31black.png" },
    { name: "خمري", colorName: "خمري", value: "#800020", image: "31darkred.png" },
    { name: "بني", colorName: "بني", value: "#5c4033", image: "31brown.png" },
    { name: "بيج / باجي", colorName: "بيج / باجي", value: "#f5f5dc", image: "31bagi.png" },
    { name: "أوف وايت", colorName: "أوف وايت", value: "#fefefa", image: "31offwhite.png" }
  ],
  gallery: [
    "31details.png",
    "31camil.png",
    "31black.png",
    "31darkred.png",
    "31brown.png",
    "31bagi.png",
    "31offwhite.png"
  ]
};

window.AMO_PRODUCTS = window.AMO_PRODUCTS || [];
window.AMO_PRODUCTS.push(product);
