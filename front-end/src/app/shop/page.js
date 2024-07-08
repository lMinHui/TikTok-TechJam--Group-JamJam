"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import FeaturedProdCard from "@/components/featuredProdCard";

export default function Home() {
  const router = useRouter();
  const handleBackButton = () => {
    if (router?.back) {
      router.back();
    } else {
      router.push("/");
    }
  };
  const searchParams = useSearchParams();
  const query = searchParams.get("search");

  const [prodCategory, setProdCategory] = useState("");

  // Set active bar for tab in the navigation
  const [activeTab, setActiveTab] = useState("Shop");

  const [products, setProducts] = useState([]);
  const [firstProduct, setFirstProduct] = useState(null);
  const [remainingProducts, setRemainingProducts] = useState([]);
  const [lastProduct, setLastProduct] = useState(null);

  // product data use for demo
  const productDataByCat = {
    blush: [
      {
        product_id: 1,
        product_name: "Rare Beauty Soft Pinch Liquid Blush",
        price: "39.00",
        category: "blush",
        src: "/products/1_product.webp",
      },
      {
        product_id: 22,
        product_name: "Careline Oil Control Blush-On",
        price: "10.00",
        category: "blush",
        src: "/products/22_product.jpg",
      },
    ],
    face_wash: [
      {
        product_id: 2,
        product_name: "Youth to the People Superfood Cleanser",
        price: "52.95",
        category: "face_wash",
        src: "/products/2_product.jpg",
      },
    ],
    fragrance: [
      {
        product_id: 3,
        product_name: "Sol De Janeiro Cheirosa 59 Perfume Mist",
        price: "60.00",
        category: "fragrance",
        src: "/products/3_product.webp",
      },
    ],
    primer: [
      {
        product_id: 4,
        product_name: "Too Faced Hangover Replenishing Face Primer",
        price: "57.04",
        category: "primer",
        src: "/products/4_product.webp",
      },
    ],
    conditioner: [
      {
        product_id: 5,
        product_name: "Amika The Kure Bond Repair Conditioner",
        price: "38.03",
        category: "conditioner",
        src: "/products/5_product.webp",
      },
    ],
    lip_tint: [
      {
        product_id: 6,
        product_name: "Merrezca Glow Ink Color Lip Tint #01 - Wild Berry 5 G",
        price: "15.88",
        category: "lip_tint",
        src: "/products/6_product.png",
      },
    ],
    lip_gloss: [
      {
        product_id: 7,
        product_name: "Charmiss Glitter Lip Gloss",
        price: "11.04",
        category: "lip_gloss",
        src: "/products/7_product.webp",
      },
    ],
    lip_serum: [
      {
        product_id: 8,
        product_name: "Cathy Doll Cc Lip Serum",
        price: "13.25",
        category: "lip_serum",
        src: "/products/8_product.webp",
      },
    ],
    lip_balm: [
      {
        product_id: 9,
        product_name: "Nivea Shine Lip Balm",
        price: "5.00",
        category: "lip_balm",
        src: "/products/9_product.png",
      },
      {
        product_id: 16,
        product_name: "Laneige Lip Glowy Balm Berry",
        price: "28.00",
        category: "lip_balm",
        src: "/products/16_product.jpg",
      },
    ],
    powder: [
      {
        product_id: 10,
        product_name: "Pond's Magic Powder BB Double UV Protectionm",
        price: "2.95",
        category: "powder",
        src: "/products/10_product.jpg",
      },
    ],
    foundation: [
      {
        product_id: 11,
        product_name: "Estée Lauder Double Wear Stay-in-Place Makeup SPF 10",
        price: "82.00",
        category: "foundation",
        src: "/products/11_product.png",
      },
      {
        product_id: 14,
        product_name:
          "Charlotte Tilbury Charlotte's Beautiful Skin Foundation 10 Neutral",
        price: "82.00",
        category: "foundation",
        src: "/products/14_product.webp",
      },
    ],
    lip_mask: [
      {
        product_id: 12,
        product_name: "LANEIGE Lip Sleeping Mask - Sweet Candy - 20gr",
        price: "34.00",
        category: "lip_mask",
        src: "/products/12_product.webp",
      },
    ],
    essence: [
      {
        product_id: 13,
        product_name: "RHODE Glazing Milk",
        price: "40.75",
        category: "essence",
        src: "/products/13_product.webp",
      },
    ],
    concealer: [
      {
        product_id: 15,
        product_name: "Elf Hydrating Camo Concealer",
        price: "5.43",
        category: "concealer",
        src: "/products/15_product.webp",
      },
    ],
    brow_pencil: [
      {
        product_id: 17,
        product_name: "Hourglass Arch Brow Sculpting Pencil",
        price: "50.25",
        category: "brow_pencil",
        src: "/products/17_product.webp",
      },
    ],
    face_mist: [
      {
        product_id: 18,
        product_name: "CAUDALIE BEAUTY ELIXIR",
        price: "75.00",
        category: "face_mist",
        src: "/products/18_product.webp",
      },
    ],
    moisturiser: [
      {
        product_id: 19,
        product_name: "Charlotte Tilbury Magic Water Cream",
        price: "176.00",
        category: "moisturiser",
        src: "/products/19_product.webp",
      },
      {
        product_id: 21,
        product_name:
          "Maybelline New York Fit Me Fresh Tint Vitamin C Spf50 Mazenonline",
        price: "19.10",
        category: "moisturiser",
        src: "/products/21_product.png",
      },
    ],
    mascara: [
      {
        product_id: 20,
        product_name: "Benefit Cosmetics Mascara",
        price: "39.38",
        category: "mascara",
        src: "/products/20_product.jpg",
      },
    ],
    setting_product: [
      {
        product_id: 23,
        product_name:
          "Dr Sensitive All Day No Sebum Blur Powder Translucent With Free Kabuki Brush",
        price: "11.00",
        category: "setting_product",
        src: "/products/23_product.jpg",
      },
      {
        product_id: 24,
        product_name: "ZEESEA Lasting Makeup Setting Spray",
        price: "39.38",
        category: "setting_product",
        src: "/products/24_product.webp",
      },
    ],
  };

  // To input the search input on page load
  useEffect(() => {
    if (query) {
      const formatString = (str) => {
        if (str.includes("_")) {
          // Split by underscores and capitalize each word
          const words = str
            .split("_")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1));
          return words.join(" ");
        } else {
          return str.charAt(0).toUpperCase() + str.slice(1);
        }
      };
      const formattedQuery = formatString(query);
      document.getElementById("searchInput").value = formattedQuery;
      setProdCategory(formattedQuery);
    }
  }, [query]);

  // To fetch product data
  useEffect(() => {
    const getProductsByCategories = (categories) => {
      const result = [];
      categories.forEach((category) => {
        if (productDataByCat.hasOwnProperty(category)) {
          result.push(...productDataByCat[category]);
        }
      });
      return result;
    };

    if (prodCategory) {
      const formattedCategory = prodCategory.toLowerCase().replace(/\s/g, "_");
      const products = getProductsByCategories([formattedCategory]);
      setProducts(products);

      if (products.length > 0) {
        setFirstProduct(products[0]);
        setLastProduct(products[products.length - 1]);
        const remaining = [];
        for (let i = 1; i < 6; i++) {
          const product = products[i] || products[products.length - 1];
          remaining.push(product);
        }
        setRemainingProducts(remaining);
      }
    }
  }, [prodCategory]);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* header section starts here*/}
      <div className="flex w-full justify-between px-4 py-10 gap-x-5">
        <div className="flex flex-col justify-center items-center">
          <svg
            onClick={handleBackButton}
            width="7"
            height="12"
            viewBox="0 0 7 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 1L1 6L6 11"
              stroke="black"
              stroke-width="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div class="relative rounded-full bg-[#E7E7E7] text-gray-900 shadow-sm w-full">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="#939393"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            name="searchInput"
            id="searchInput"
            class="block w-full bg-[#E7E7E7] rounded-full border-0 px-4 py-0.5 ps-10 text-sm text-gray-900 focus:ring-2 focus:ring-inset focus:ring-gray-300 placeholder:text-[#939393]"
            placeholder="Search"
          ></input>
        </div>
        <div className="flex flex-col justify-center items-center">
          <svg
            width="13"
            height="3"
            viewBox="0 0 13 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="1.1" cy="1.1" r="1.1" fill="black" />
            <circle cx="11.1" cy="1.1" r="1.1" fill="black" />
            <circle cx="6.1" cy="1.1" r="1.1" fill="black" />
          </svg>
        </div>
      </div>
      {/* header section ends here*/}

      {/* Navigation Bar */}
      <nav
        className="flex justify-between border-b"
        style={{ marginTop: "-2vh" }}
      >
        {["Shop", "Videos", "Live", "Users", "Places"].map((navItem) => (
          <a
            key={navItem}
            href="#"
            className={`py-2 px-4 text-center w-full hover:bg-gray-200 ${
              activeTab === navItem
                ? "border-b-4 border-black font-bold text-black"
                : "text-gray-900"
            }`}
            onClick={() => setActiveTab(navItem)}
          >
            {navItem}
          </a>
        ))}
      </nav>

      {/* Main Content */}
      <main className="p-4">
        {/*Similar Products */}
        <p className="mb-4 text-gray-900">
          <span className="font-normal">Similar products:</span>{" "}
          <span className="font-bold">{prodCategory}</span>
        </p>

        {/* Product Placeholders */}
        <div className="w-full h-[18vh] px-2 py-2">
          {products.length > 0 ? (
            <>
              <div className="flex h-full w-full space-x-2">
                <div className="w-2/5 h-full">
                  <img
                    src={firstProduct.src}
                    alt={firstProduct.product_name}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="w-3/5 h-full flex flex-col gap-y-2">
                  <div className="flex gap-x-2 h-1/2">
                    <div className="w-1/3 h-full">
                      <img
                        src={remainingProducts[0].src}
                        alt={remainingProducts[0].product_name}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="w-1/3 h-full">
                      <img
                        src={remainingProducts[1].src}
                        alt={remainingProducts[1].product_name}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="w-1/3 h-full">
                      <img
                        src={remainingProducts[2].src}
                        alt={remainingProducts[2].product_name}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  </div>
                  <div className="flex gap-x-2 h-1/2">
                    <div className="w-1/2 h-full">
                      <img
                        src={remainingProducts[3].src}
                        alt={remainingProducts[3].product_name}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="w-1/2 h-full">
                      <img
                        src={remainingProducts[4].src}
                        alt={remainingProducts[4].product_name}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <p>No products available.</p>
          )}
        </div>

        {/* Sort Title*/}
        <p className="mb-4 text-gray-900" tyle={{ marginTop: "-0.5vh" }}>
          <span className="font-bold">Sort by:</span>
        </p>

        {/* Sorting Options */}
        <div
          className="p-1 rounded"
          style={{ marginTop: "-1.3vh", marginBottom: "1.3vh" }}
        >
          <div className="inline-block h-7 w-24 mr-1.5">
            <select className="px-1.5 py-0.75 border rounded text-sm text-gray-900 bg-gray-200 block w-full">
              <option value="">Rating</option>
              <option value="1">⭐️</option>
              <option value="2">⭐️⭐️</option>
              <option value="3">⭐️⭐️⭐️</option>
              <option value="4">⭐️⭐️⭐️⭐️</option>
              <option value="5">⭐️⭐️⭐️⭐️⭐️</option>
            </select>
          </div>
          <div className="inline-block h-7 w-24 mr-1.5">
            <select className="px-1.5 py-0.75 border rounded text-sm text-gray-900 bg-gray-200 block w-full">
              <option value="">Sold</option>
              <option value="10">Sold 10</option>
              <option value="20">Sold 20</option>
              <option value="30">Sold 30</option>
            </select>
          </div>
          <div className="inline-block h-7 w-24">
            <select className="px-1.5 py-0.75 border rounded text-sm text-gray-900 bg-gray-200 block w-full">
              <option value="">Delivery</option>
              <option value="1-day">1 day</option>
              <option value="less-week"> less than 1 week</option>
              <option value="more-week">more than 1 week</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 gap-4">
          {products.map((product) => (
            <FeaturedProdCard
              itemId={product.product_id}
              product_name={product.product_name}
              price={product.price}
              src={product.src}
            ></FeaturedProdCard>
          ))}
        </div>
      </main>
    </div>
  );
}
