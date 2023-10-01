import Pants2 from "../../assets/images/Men/pants/Men Flap Pocket Drawstring Hem Cargo Pants.jpeg";
import shirt3 from "../../assets/images/Men/shirt/Summer outfit men.jpeg";

const cartProductsData = {
  products: [
    {
      id: 1,
      name: "Cargo Pants",
      des: "Men Flap Pocket Drawstring ",
      color: "Salmon",
      originalPrice: "500", // Add originalPrice field
      discountedPrice: "410", // Add discountedPrice field
      quantity: 1,
      imageSrc: Pants2,
      imageAlt: "Product",
    },

    {
      id: 2,
      name: "Summer Shirt",
      des: "Style Cotton and Linen ",
      color: "green",
      originalPrice: "500", // Add originalPrice field
      discountedPrice: "410", // Add discountedPrice field
      quantity: 1,
      imageSrc: shirt3,
      imageAlt: "Product",
    },
  ],
};

export default cartProductsData;
