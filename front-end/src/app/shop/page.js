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

  // Set active bar for tab in the navigation
  const [activeTab, setActiveTab] = useState("Shop");

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
    }
  }, [query]);

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
      <nav className="flex justify-between border-b">
        {["Shop", "Videos", "Live", "Users", "Places"].map((navItem) => (
          <a
            key={navItem}
            href="#"
            className={`py-2 px-4 text-center w-full hover:bg-gray-200 ${
              activeTab === navItem ? "border-b-4 border-black font-bold" : ""
            }`}
            onClick={() => setActiveTab(navItem)}
          >
            {navItem}
          </a>
        ))}
      </nav>

      {/* Main Content */}
      <main className="p-4">
        <h2 className="text-2xl font-bold mb-4">
          Similar Products: Electric Guitar
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-2 gap-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="bg-gray-200 rounded-md overflow-hidden flex"
            >
              {/* 2/3 Placeholder */}
              <div className="w-2/3 bg-gray-400"></div>

              {/* 1/3 Product Description and Price */}
              <div className="w-1/3 bg-white p-4 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold mb-2">Product Name</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <div className="text-pink-500 font-bold text-lg">$99.99</div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
