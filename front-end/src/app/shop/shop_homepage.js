import Image from "next/image";
import React from "react";
import MenuIcon from "@material-ui/icons/Menu";

const ShopHomepage = () => {
  return (
    <div className="bg-white min-h-screen p-4">
      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b">
        <button className="text-xl">{"<"}</button>
        <input
          type="text"
          placeholder="Search"
          className="flex-grow mx-4 p-2 border rounded"
        />
        <button className="text-xl">⋮</button>
      </header>

      {/* Navigation Bar */}
      <nav className="flex justify-between border-b">
        {["Shop", "Videos", "Live", "Users", "Places"].map((navItem) => (
          <a
            key={navItem}
            href="#"
            className="py-2 px-4 text-center w-full hover:bg-gray-200"
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

        {/* Product Placeholders */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-gray-200 h-40"></div>
          <div className="bg-gray-200 h-40"></div>
        </div>

        <h2 className="text-xl font-bold mb-4">Sort by</h2>

        {/* Sort Options */}
        <div className="flex justify-between mb-8">
          <div className="flex items-center">
            <span className="material-icons">star</span>
            <select className="ml-2 p-2 border rounded">
              <option>Rating</option>
            </select>
          </div>
          <div className="flex items-center">
            <span className="material-icons">shopping_cart</span>
            <select className="ml-2 p-2 border rounded">
              <option>Sold</option>
            </select>
          </div>
          <div className="flex items-center">
            <span className="material-icons">schedule</span>
            <select className="ml-2 p-2 border rounded">
              <option>Delivery</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 gap-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="bg-gray-200 h-40"></div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ShopHomepage;
