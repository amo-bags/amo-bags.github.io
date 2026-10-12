const product = {
  id: "75",
  name: "حقيبة نسائية أنيقة - موديل 75",
  price: 5,
  size: "كبير",
  dimensions: "30 سم عرض × 28 سم ارتفاع",
  image: "75darkblue.png",
  gallery: [
    "75darkblue.png",
    "75darkred.jpg",
    "75inside.jpg"
  ],
  colors: [
    {
      name: "كحلي",
      colorName: "كحلي",
      value: "#1b263b",
      image: "75darkblue.png"
    },
    {
      name: "خمري",
      colorName: "خمري",
      value: "#800020",
      image: "75darkred.jpg"
    }
  ]
};

window.AMO_PRODUCTS = window.AMO_PRODUCTS || [];
window.AMO_PRODUCTS.push(product);

