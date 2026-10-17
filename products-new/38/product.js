const product = {
  id: "38",
  name: "حقيبة AMO #38",
  price: 10,
  size: "وسط",
  dimensions: "25 سم عرض × 17 سم ارتفاع",
  image: "38offwhite.png",
  gallery: [
    "38offwhite.png",
    "38details.jpg",
    "38detaols2.jpg",
    "38side.jpg",
    "38down.jpg",
    "38bac.jpg",
    "size38.jpg"
  ],
  colors: [
    {
      name: "أوفوايت",
      value: "#f5f5ed",
      image: "38offwhite.png"
    },
  ]
};

if (typeof window !== 'undefined') {
  window.AMO_PRODUCTS = window.AMO_PRODUCTS || [];
  window.AMO_PRODUCTS.push(product);
}
