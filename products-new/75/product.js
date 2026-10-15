const product = {
  id: "75",
  name: "حقيبة نسائية أنيقة - موديل 75",
  price: 5,
  size: "كبير",
  dimensions: "30 سم عرض × 28 سم ارتفاع",
  image: "75black.png",
  gallery: [
    "75black.png",
    "75darkred.jpg",
    "75darkblue.png",
    "75camil.png",
    "75kaki.png",
    "75inside.jpg"
  ],
  colors: [
    {
      name: "خمري",
      colorName: "خمري",
      value: "#800020",
      image: "75darkred.jpg"
    },
    {
      name: "اسود",
      colorName: "اسود",
      value: "#000000",
      image: "75black.png"
    },
    {
      name: "كحلي",
      colorName: "كحلي",
      value: "#1b263b",
      image: "75darkblue.png"
    },
    {
      name: "عسلي",
      colorName: "عسلي",
      value: "#c5a059",
      image: "75camil.png"
    },
    {
      name: "كاكي",
      colorName: "كاكي",
      value: "#b89778",
      image: "75kaki.png"
    }
  ]
};

window.AMO_PRODUCTS = window.AMO_PRODUCTS || [];
window.AMO_PRODUCTS.push(product);
