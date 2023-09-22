const data = {
  content: [
    {
      title: "Celebration of individuality and style",
      description:
        "At indiChic, we believe that true fashion comes from within, and it's all about embracing your unique self.",
      getStartedLink: "/home",
      playLink: "/Go",
      stats: [
        { name: "New Customers", value: "300+" },
        { name: "Products Sold", value: "200+" },
      ],
    },
  ],

  products: [
    {
      widgetProductCard: {
        id: 1,
        productName: "Italian Coat",
        productImage: require("../../assets/images/coat.jpg"),
        discountText: "10% OFF",
      },
    },
    {
      widgetProductCard: {
        id: 2,
        productName: "Shorts",
        productImage: require("../../assets/images/shorts.jpg"),
        discountText: "15% OFF",
      },
    },
  ],
};

export default data;
