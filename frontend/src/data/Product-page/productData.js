//men
import jacket from "../../assets/images/Men/jacket/_.jpeg";
import Chinese1 from "../../assets/images/Men/pants/Chinese Style Cotton and Linen Pants Striped plus Size Loose Harem Bloomers Men - Black _ XL.jpeg";
import Chinese2 from "../../assets/images/Men/pants/Chinese Style Cotton and Linen Pants Striped 2.jpeg";
import Pants2 from "../../assets/images/Men/pants/Men Flap Pocket Drawstring Hem Cargo Pants.jpeg";
import Pants3 from "../../assets/images/Men/pants/New arrivals for men, women and children.jpeg";
import shirt1 from "../../assets/images/Men/shirt/_Upgrade Your Wardrobe_ Explore Trendy Men's T-Shirts for Every Style_.jpeg";
import shirt2 from "../../assets/images/Men/shirt/Green Tshirt.jpg";
import shirt3 from "../../assets/images/Men/shirt/Summer outfit men.jpeg";
import shirt4 from "../../assets/images/Men/shirt/Summer Tshirt .jpeg";
import shirt5 from "../../assets/images/Men/shirt/OrcaJump - Mens Solid Color Street Button Short Sleeve Tops, Breathable & Comfortable Summer Shirts in Green, Blue & Khaki - Blue _ 3XL.jpeg";
import short1 from "../../assets/images/Men/shorts/Men Flap Pocket Drawstring Waist Shorts.jpeg";
import short2 from "../../assets/images/Men/shorts/Men Flap Pocket Side Shorts.jpeg";

//women
import shirtW1 from "../../assets/images/women/shirt/57 Women's Fall Shirts [all under $20] — The Overwhelmed Mommy Blog (1).jpeg";
import Cardigan1 from "../../assets/images/women/Cardigan/How We're Making The Cardigan Cool.jpeg";
import Cardigan2 from "../../assets/images/women/Cardigan/I Love Mr Mittens Fishermans Cardigan In Taupe _ ModeSens.jpeg";
import Cardigan3 from "../../assets/images/women/Cardigan/Latest Autumn Idea Diy Project's Crochet Color Combinations Jacket For Women Ideas.jpeg";

import pants1 from "../../assets/images/women/pants/Moda Operandi.jpeg";
import pants2 from "../../assets/images/women/pants/New Arrivals - Shop Women's clothing online _ H&M US.jpeg";
import pants3 from "../../assets/images/women/pants/overalls outfit.jpeg";

import shirtW2 from "../../assets/images/women/shirt/The Brands With the Best Clothing-Recycling Programs.jpeg";
import shirtW3 from "../../assets/images/women/shirt/Модные блузы 2020_ 15 роскошных идей для весеннего образа.jpeg";

import sweaters1 from "../../assets/images/women/sweaters/𝗥𝗠.jpeg";
import sweaters2 from "../../assets/images/women/sweaters/Get sweater weather ready _ jayywing.jpeg";
import sweaters3 from "../../assets/images/women/sweaters/Top 10 Timeless Wardrobe Basics _ Essentials - Shopperella.jpeg";
import sweaters4 from "../../assets/images/women/sweaters/Your Guide to the Best Fall Sweaters - Mia Mia Mine.jpeg";
import sweaters5 from "../../assets/images/women/sweaters/Zara Spring Haul - 4 Ways to Style a Pair of Joggers Karina Style Diaries.jpeg";

import sweaters6 from "../../assets/images/women/sweaters/ANRABESS Women's Open Front Knit Cardigan Long Sleeve Lapel Casual Solid Classy Sweater Jacket.jpeg";

const productData = {
  categories: [
    {
      id: "all",
      name: "All",
      collection: [
        {
          id: "shirt",
          productName: "Shirt",
          des: "50 -70 ",
          imageSrc: shirt3,
          products: [
            {
              id: 1,
              name: "Summer Shirt",
              des: "Style Cotton and Linen ",
              color: "Salmon",
              originalPrice: "500", // Add originalPrice field
              discountedPrice: "410", // Add discountedPrice field
              imageSrc: shirt3,
              imageAlt: "Product",
            },
          ],
        },
        {
          id: "tshirt",
          productName: "TShirt",
          des: "40",
          imageSrc: shirt1,
          products: [
            {
              id: 1,
              name: "Explore Trendy ",
              des: " Explore Trendy Men's T-Shirts",
              originalPrice: "500", // Add originalPrice field
              discountedPrice: "410", // Add discountedPrice field
              color: "Salmon",
              imageSrc: shirt1,
              // hoverImages: [shirt1, shirt5],
              imageAlt: "Product",
            },
            {
              id: 2,
              name: " Trendy Tshirt ",
              des: " Explore Trendy Men's T-Shirts",
              originalPrice: "500", // Add originalPrice field
              discountedPrice: "410", // Add discountedPrice field
              href: "#",
              imageSrc: shirt5,
              // hoverImages: [shirt1, shirt5],
              imageAlt: "Product",
            },
            {
              id: 3,
              name: "Green Tshirt",
              des: "Green Tshirt Cotton ",
              originalPrice: "500", // Add originalPrice field
              discountedPrice: "410", // Add discountedPrice field
              href: "#",
              imageSrc: shirt2,
              imageAlt: "Product",
            },
            {
              id: 4,
              name: "Summer Shirt",
              des: "Style Cotton and Linen ",
              originalPrice: "500", // Add originalPrice field
              discountedPrice: "410", // Add discountedPrice field
              href: "#",
              imageSrc: shirt3,
              imageAlt: "Product",
            },
          ],
        },
        {
          id: "pants",
          productName: "Pants",
          des: "60",
          imageSrc: Chinese1,
          products: [
            {
              id: 1,
              name: "Chinese Style Pants",
              des: "Chinese Style Cotton and Linen ",
              originalPrice: "500", // Add originalPrice field
              discountedPrice: "410", // Add discountedPrice field
              href: "#",
              imageSrc: Chinese1,
              hoverImages: [Chinese1, Chinese2],
              imageAlt: "Product",
            },
            {
              id: 2,
              name: "Cargo Pants",
              des: "Men Flap Pocket Drawstring ",
              originalPrice: "500", // Add originalPrice field
              discountedPrice: "410", // Add discountedPrice field
              href: "#",
              imageSrc: Pants2,
              imageAlt: "Product",
            },
            {
              id: 3,
              name: "Style Pants",
              des: "Style Cotton and Linen ",
              originalPrice: "500", // Add originalPrice field
              discountedPrice: "410", // Add discountedPrice field
              href: "#",
              imageSrc: Pants3,
              imageAlt: "Product",
            },
          ],
        },
        {
          id: "jacket",
          productName: "Jacket",
          des: "40 - 80",
          imageSrc: jacket,
          products: [
            {
              id: 1,
              name: "Jacket",
              des: "A leather finished jacket",
              originalPrice: "500", // Add originalPrice field
              discountedPrice: "410", // Add discountedPrice field
              href: "#",
              imageSrc: jacket,
              imageAlt: "product",
            },
          ],
        },
        {
          id: "short",
          productName: "Short",
          des: "80",
          imageSrc: short1,
          products: [
            {
              id: 1,
              name: "Drawstring  Shorts",
              des: "Men Flap Pocket Drawstring  ",
              originalPrice: "500", // Add originalPrice field
              discountedPrice: "410", // Add discountedPrice field
              href: "#",
              imageSrc: short1,
              imageAlt: "Product",
            },
            {
              id: 2,
              name: "Pocket Side Shorts",
              des: "Men Flap Pocket Side Shorts ",
              originalPrice: "500", // Add originalPrice field
              discountedPrice: "410", // Add discountedPrice field
              href: "#",
              imageSrc: short2,
              imageAlt: "Product",
            },
          ],
        },
        {
          id: "cardigan",
          productName: "Cardigan",
          des: "30 - 60",
          imageSrc: Cardigan1,
          products: [
            {
              id: 1,
              name: "Cardigan",
              des: "Latest Autumn  Crochet Color ",
              originalPrice: "500", // Add originalPrice field
              discountedPrice: "410", // Add discountedPrice field
              href: "#",
              imageSrc: Cardigan1,
              hoverImages: [Cardigan1, Cardigan2, Cardigan3],
              imageAlt: "product",
            },
          ],
        },
        {
          id: "shirt",
          productName: "Shirt",
          des: "40",
          imageSrc: shirtW1,
          products: [
            {
              id: 1,
              name: "Fall Shirts ",
              des: "The Overwhelmed Mommy Blog",
              originalPrice: "500", // Add originalPrice field
              discountedPrice: "410", // Add discountedPrice field
              href: "#",
              imageSrc: shirtW1,
              // hoverImages: [Cardigan1, Cardigan2, Cardigan3],
              imageAlt: "product",
            },
            {
              id: 2,
              name: " Straped CropTop",
              des: "The Overwhelmed Mommy Blog",
              originalPrice: "500", // Add originalPrice field
              discountedPrice: "410", // Add discountedPrice field
              href: "#",
              imageSrc: shirtW2,
              // hoverImages: [Cardigan1, Cardigan2, Cardigan3],
              imageAlt: "product",
            },
            {
              id: 3,
              name: " Straped CropTop",
              des: "The Overwhelmed Mommy Blog",
              originalPrice: "500", // Add originalPrice field
              discountedPrice: "410", // Add discountedPrice field
              href: "#",
              imageSrc: shirtW3,
              // hoverImages: [Cardigan1, Cardigan2, Cardigan3],
              imageAlt: "product",
            },
          ],
        },
        {
          id: "pants",
          productName: "Pants",
          des: "60",
          imageSrc: pants1,
          products: [
            {
              id: 1,
              name: "Fall Shirts ",
              des: "The Overwhelmed Mommy Blog",
              originalPrice: "500", // Add originalPrice field
              discountedPrice: "410", // Add discountedPrice field
              href: "#",
              imageSrc: pants1,
              // hoverImages: [Cardigan1, Cardigan2, Cardigan3],
              imageAlt: "product",
            },
            {
              id: 2,
              name: "Fall Shirts ",
              des: "The Overwhelmed Mommy Blog",
              originalPrice: "500", // Add originalPrice field
              discountedPrice: "410", // Add discountedPrice field
              href: "#",
              imageSrc: pants2,
              // hoverImages: [Cardigan1, Cardigan2, Cardigan3],
              imageAlt: "product",
            },
            {
              id: 3,
              name: "JumpSuits",
              des: "The Overwhelmed Mommy Blog",
              originalPrice: "500", // Add originalPrice field
              discountedPrice: "410", // Add discountedPrice field
              href: "#",
              imageSrc: pants3,
              // hoverImages: [Cardigan1, Cardigan2, Cardigan3],
              imageAlt: "product",
            },
          ],
        },
        {
          id: "sweater",
          productName: "Sweater",
          des: "80",
          imageSrc: sweaters1,
          products: [
            {
              id: 1,
              name: "Sweaters",
              des: "The Overwhelmed Mommy Blog",
              originalPrice: "500", // Add originalPrice field
              discountedPrice: "410", // Add discountedPrice field
              href: "#",
              imageSrc: sweaters1,
              hoverImages: [
                sweaters1,
                sweaters2,
                sweaters3,
                sweaters4,
                sweaters5,
              ],
              imageAlt: "product",
            },
            {
              id: 2,
              name: "Long Sweater brown",
              des: "The Overwhelmed Mommy Blog",
              originalPrice: "500", // Add originalPrice field
              discountedPrice: "410", // Add discountedPrice field
              href: "#",
              imageSrc: sweaters6,
              // hoverImages: [Cardigan1, Cardigan2, Cardigan3],
              imageAlt: "product",
            },
          ],
        },
      ],
    },
    {
      id: "men",
      name: "Men",
      collection: [
        {
          id: "shirt",
          productName: "Shirt",
          des: "50 - 70",
          imageSrc: shirt3,
          products: [
            {
              id: 1,
              name: "Summer Shirt",
              des: "Style Cotton and Linen ",
              originalPrice: "500", // Add originalPrice field
              discountedPrice: "300", // Add discountedPrice field
              href: "#",
              imageSrc: shirt3,
              imageAlt: "Product",
            },
          ],
        },
        {
          id: "tshirt",
          productName: "TShirt",
          des: "40",
          imageSrc: shirt1,
          products: [
            {
              id: 1,
              name: "Explore Trendy ",
              des: " Explore Trendy Men's T-Shirts",
              originalPrice: "500", // Add originalPrice field
              discountedPrice: "320", // Add discountedPrice field
              href: "#",
              imageSrc: shirt1,
              // hoverImages: [shirt1, shirt5],
              imageAlt: "Product",
            },
            {
              id: 2,
              name: " Trendy Tshirt ",
              des: " Explore Trendy Men's T-Shirts",
              originalPrice: "500", // Add originalPrice field
              discountedPrice: "320", // Add discountedPrice field
              href: "#",
              imageSrc: shirt5,
              // hoverImages: [shirt1, shirt5],
              imageAlt: "Product",
            },
            {
              id: 3,
              name: "Green Tshirt",
              des: "Green Tshirt Cotton ",
              originalPrice: "410", // Add originalPrice field
              discountedPrice: "300", // Add discountedPrice field
              href: "#",
              imageSrc: shirt2,
              imageAlt: "Product",
            },
            {
              id: 4,
              name: "Summer Shirt",
              des: "Style Cotton and Linen ",
              originalPrice: "410", // Add originalPrice field
              discountedPrice: "300", // Add discountedPrice field
              href: "#",
              imageSrc: shirt3,
              imageAlt: "Product",
            },
          ],
        },
        {
          id: "pants",
          productName: "Pants",
          des: "60",
          imageSrc: Chinese1,
          products: [
            {
              id: 1,
              name: "Chinese Style Pants",
              des: "Chinese Style Cotton and Linen",
              originalPrice: "400", // Add originalPrice field
              discountedPrice: "320", // Add discountedPrice field
              href: "#",
              imageSrc: Chinese1,
              hoverImages: [Chinese1, Chinese2],
              imageAlt: "Product",
            },
            {
              id: 2,
              name: "Cargo Pants",
              des: "Men Flap Pocket Drawstring",
              originalPrice: "500", // Add originalPrice field
              discountedPrice: "410", // Add discountedPrice field
              href: "#",
              imageSrc: Pants2,
              imageAlt: "Product",
            },
            {
              id: 3,
              name: "Style Pants",
              des: "Style Cotton and Linen",
              originalPrice: "350", // Add originalPrice field
              discountedPrice: "300", // Add discountedPrice field
              href: "#",
              imageSrc: Pants3,
              imageAlt: "Product",
            },
          ],
        },

        {
          id: "jacket",
          productName: "Jacket",
          des: "40 - 80",
          imageSrc: jacket,
          products: [
            {
              id: 1,
              name: "Jacket",
              des: "A leather finished jacket",
              originalPrice: "500", // Add originalPrice field
              discountedPrice: "399", // Add discountedPrice field
              href: "#",
              imageSrc: jacket,
              imageAlt: "product",
            },
          ],
        },
        {
          id: "short",
          productName: "Short",
          des: "80",
          imageSrc: short1,
          products: [
            {
              id: 1,
              name: "Drawstring  Shorts",
              des: "Men Flap Pocket Drawstring  ",
              originalPrice: "500", // Add originalPrice field
              discountedPrice: "410", // Add discountedPrice field
              href: "#",
              imageSrc: short1,
              imageAlt: "Product",
            },
            {
              id: 2,
              name: "Pocket Side Shorts",
              des: "Men Flap Pocket Side Shorts ",
              originalPrice: "600", // Add originalPrice field
              discountedPrice: "310", // Add discountedPrice field
              href: "#",
              imageSrc: short2,
              imageAlt: "Product",
            },
          ],
        },
      ],
    },
    {
      id: "women",
      name: "Women",
      collection: [
        {
          id: "cardigan",
          productName: "Cardigan",
          des: "30 - 60",
          imageSrc: Cardigan1,
          products: [
            {
              id: 1,
              name: "Cardigan",
              des: "Latest Autumn  Crochet Color ",
              originalPrice: "600", // Add originalPrice field
              discountedPrice: "210", // Add discountedPrice field
              href: "#",
              imageSrc: Cardigan1,
              hoverImages: [Cardigan1, Cardigan2, Cardigan3],
              imageAlt: "product",
            },
          ],
        },
        {
          id: "shirt",
          productName: "Shirt",
          des: "40",
          imageSrc: shirtW1,
          products: [
            {
              id: 1,
              name: "Fall Shirts ",
              des: "The Overwhelmed Mommy Blog",
              originalPrice: "500", // Add originalPrice field
              discountedPrice: "390", // Add discountedPrice field
              href: "#",
              imageSrc: shirtW1,
              // hoverImages: [Cardigan1, Cardigan2, Cardigan3],
              imageAlt: "product",
            },
            {
              id: 2,
              name: " Straped CropTop",
              des: "The Overwhelmed Mommy Blog",
              originalPrice: "800", // Add originalPrice field
              discountedPrice: "300", // Add discountedPrice field
              href: "#",
              imageSrc: shirtW2,
              // hoverImages: [Cardigan1, Cardigan2, Cardigan3],
              imageAlt: "product",
            },
            {
              id: 3,
              name: " Straped CropTop",
              des: "The Overwhelmed Mommy Blog",
              originalPrice: "700", // Add originalPrice field
              discountedPrice: "410", // Add discountedPrice field
              href: "#",
              imageSrc: shirtW3,
              // hoverImages: [Cardigan1, Cardigan2, Cardigan3],
              imageAlt: "product",
            },
          ],
        },
        {
          id: "pants",
          productName: "Pants",
          des: "60",
          imageSrc: pants1,
          products: [
            {
              id: 1,
              name: "Fall Shirts ",
              des: "The Overwhelmed Mommy Blog",
              originalPrice: "500", // Add originalPrice field
              discountedPrice: "410", // Add discountedPrice field
              href: "#",
              imageSrc: pants1,
              // hoverImages: [Cardigan1, Cardigan2, Cardigan3],
              imageAlt: "product",
            },
            {
              id: 2,
              name: "Fall Shirts ",
              des: "The Overwhelmed Mommy Blog",
              originalPrice: "500", // Add originalPrice field
              discountedPrice: "410", // Add discountedPrice field
              href: "#",
              imageSrc: pants2,
              // hoverImages: [Cardigan1, Cardigan2, Cardigan3],
              imageAlt: "product",
            },
            {
              id: 3,
              name: "JumpSuits",
              des: "The Overwhelmed Mommy Blog",
              originalPrice: "500", // Add originalPrice field
              discountedPrice: "410", // Add discountedPrice field
              href: "#",
              imageSrc: pants3,
              // hoverImages: [Cardigan1, Cardigan2, Cardigan3],
              imageAlt: "product",
            },
          ],
        },
        {
          id: "sweater",
          productName: "Sweater",
          des: "80",
          imageSrc: sweaters1,
          products: [
            {
              id: 1,
              name: "Sweaters",
              des: "The Overwhelmed Mommy Blog",
              originalPrice: "500", // Add originalPrice field
              discountedPrice: "410", // Add discountedPrice field
              href: "#",
              imageSrc: sweaters1,
              hoverImages: [
                sweaters1,
                sweaters2,
                sweaters3,
                sweaters4,
                sweaters5,
              ],
              imageAlt: "product",
            },
            {
              id: 2,
              name: "Long Sweater brown",
              des: "The Overwhelmed Mommy Blog",
              originalPrice: "500", // Add originalPrice field
              discountedPrice: "410", // Add discountedPrice field
              href: "#",
              imageSrc: sweaters6,
              // hoverImages: [Cardigan1, Cardigan2, Cardigan3],
              imageAlt: "product",
            },
          ],
        },
      ],
    },
  ],
};

export default productData;
