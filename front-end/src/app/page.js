'use client'
import Image from "next/image";
import Link from 'next/link'
import { useState, useEffect, useRef } from "react";
import SimilarProdCard from "@/components/similarProdCard";
import FeaturedProdCard from "@/components/featuredProdCard";
import LiveProdCard from "@/components/liveProdCard";

export default function Home() {
  const sidebarRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [prodAvail, setProdAvail] = useState(false);
  // ^ when product is available, set the setProdAvail to true
  const [productsData, setProductsData] = useState(null);
  const [currentVideo, setCurrentVideo] = useState('');
  const [prodCategories, setProdCategories] = useState(null);
  const [productsByCatData, setProductsByCatData] = useState(null);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsVisible(false);
      }
    };
    // when sidebar is visible
    if (isVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isVisible]);
  
   
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/fetch-data');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log({"data from backend": data})
        setVideos(data);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };
    fetchVideos();
  }, []);

  const videoData = [
    { "id": 19, "creator": "nel.denela", "description": "Miffy makeup bag ☁️🐰", "tags": "tagtag", "sound": "BLUSH - WOOAH (우아)", "src": "/addvid/19.mp4" },
    { "id": 6, "creator": "nicolepamelaaa", "description": "Was running low 💋", "tags": "#sephorahaul #sephora #makeup #skincare #beautyguru #thatgirl #asmrunboxing #girlythings #rarebeauty #toofaced #gisou #soldejaniero #beautyhaul #milkmakeup #minisephorahaul", "sound": "The Hills x Say It Right by GOBAITH - GOBAITH", "src": "/addvid/6.mp4" },
    { "id": 10, "creator": "pyum.pyum", "description": "Makeup that I bought in Thailand♥️ What do you want me to swatch?🍓💕", "tags": "tagtag", "sound": "เพลงรัก love song speed up - หวานใจ 🪥🌻", "src": "/addvid/10.mp4" },
    { "id": 11, "creator": "kenziemeads", "description": "few new things", "tags": "#makeup #makeuptutorial", "sound": "BEST INTEREST - Tyler, The Creator", "src": "/addvid/11.mp4" },
    { "id": 16, "creator": "madelleyn", "description": "Whats in my mini makup bag 🫶🏼", "tags": "#minimakeup #minimakeupbag #whatsinmybag #makeupbag", "sound": "telepatía - Kali Uchis", "src": "/addvid/16.mp4" },
    { "id": 20, "creator": "cams._.gotchu", "description": "What’s in my makeup bag✨🌷 Get yours now click the yellow basket🛒🛍️", "tags": "tagtag", "sound": "JUMP YOU CRYPTOCASTRO EDIT - Cryptocastro", "src": "/addvid/20.mp4" },
  ]
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  const productDataByVideoId = {
    6: [
      { "product_id": 1, "product_name": "Rare Beauty Soft Pinch Liquid Blush", "price": "39.00", "category": "blush", "src": "/products/1_product.webp" },
      { "product_id": 2, "product_name": "Youth to the People Superfood Cleanser", "price": "52.95", "category": "face_wash", "src": "/products/2_product.jpg" },
      { "product_id": 3, "product_name": "Sol De Janeiro Cheirosa 59 Perfume Mist", "price": "60.00", "category": "fragrance", "src": "/products/3_product.webp" },
      { "product_id": 4, "product_name": "Too Faced Hangover Replenishing Face Primer", "price": "57.04", "category": "primer", "src": "/products/4_product.webp" },
      { "product_id": 5, "product_name": "Amika The Kure Bond Repair Conditioner", "price": "38.03", "category": "conditioner", "src": "/products/5_product.webp" },
    ],
    10: [
      { "product_id": 6, "product_name": "Merrezca Glow Ink Color Lip Tint #01 - Wild Berry 5 G", "price": "15.88", "category": "lip_tint", "src": "/products/6_product.png" },
      { "product_id": 7, "product_name": "Charmiss Glitter Lip Gloss", "price": "11.04", "category": "lip_gloss", "src": "/products/7_product.webp" },
      { "product_id": 8, "product_name": "Cathy Doll Cc Lip Serum", "price": "13.25", "category": "lip_serum", "src": "/products/8_product.webp" },
      { "product_id": 9, "product_name": "Nivea Shine Lip Balm", "price": "5.00", "category": "lip_balm", "src": "/products/9_product.png" },
      { "product_id": 10, "product_name": "Pond's Magic Powder BB Double UV Protectionm", "price": "2.95", "category": "powder", "src": "/products/10_product.jpg" },
    ],
    11: [
      { "product_id": 11, "product_name": "Estée Lauder Double Wear Stay-in-Place Makeup SPF 10", "price": "82.00", "category": "foundation", "src": "/products/11_product.png" },
      { "product_id": 12, "product_name": "LANEIGE Lip Sleeping Mask - Sweet Candy - 20gr", "price": "34.00", "category": "lip_mask", "src": "/products/12_product.webp" },
      { "product_id": 13, "product_name": "RHODE Glazing Milk", "price": "40.75", "category": "essence", "src": "/products/13_product.webp" },
      { "product_id": 14, "product_name": "Charlotte Tilbury Charlotte's Beautiful Skin Foundation 10 Neutral", "price": "82.00", "category": "foundation", "src": "/products/14_product.webp" },
      { "product_id": 15, "product_name": "Elf Hydrating Camo Concealer", "price": "5.43", "category": "concealer", "src": "/products/15_product.webp" },
    ],
    16: [
      { "product_id": 16, "product_name": "Laneige Lip Glowy Balm Berry", "price": "28.00", "category": "lip_balm", "src": "/products/16_product.jpg" },
      { "product_id": 17, "product_name": "Hourglass Arch Brow Sculpting Pencil", "price": "50.25", "category": "brow_pencil", "src": "/products/17_product.webp" },
      { "product_id": 18, "product_name": "CAUDALIE BEAUTY ELIXIR", "price": "75.00", "category": "face_mist", "src": "/products/18_product.webp" },
      { "product_id": 19, "product_name": "Charlotte Tilbury Magic Water Cream", "price": "176.00", "category": "moisturiser", "src": "/products/19_product.webp" },
      { "product_id": 20, "product_name": "Benefit Cosmetics Mascara", "price": "39.38", "category": "mascara", "src": "/products/20_product.jpg" },
    ],
    20: [
      { "product_id": 21, "product_name": "Maybelline New York Fit Me Fresh Tint Vitamin C Spf50 Mazenonline", "price": "19.10", "category": "moisturiser", "src": "/products/21_product.png" },
      { "product_id": 22, "product_name": "Careline Oil Control Blush-On", "price": "10.00", "category": "blush", "src": "/products/22_product.jpg" },
      { "product_id": 23, "product_name": "Dr Sensitive All Day No Sebum Blur Powder Translucent With Free Kabuki Brush", "price": "11.00", "category": "setting_product", "src": "/products/23_product.jpg" },
      { "product_id": 24, "product_name": "ZEESEA Lasting Makeup Setting Spray", "price": "39.38", "category": "setting_product", "src": "/products/24_product.webp" },
      { "product_id": 1, "product_name": "Rare Beauty Soft Pinch Liquid Blush", "price": "39.00", "category": "blush", "src": "/products/1_product.webp" },
    ],
  };

  const productDataByCat = {
    "blush": [
      { "product_id": 1, "product_name": "Rare Beauty Soft Pinch Liquid Blush", "price": "39.00", "category": "blush", "src": "/products/1_product.webp" },
      { "product_id": 22, "product_name": "Careline Oil Control Blush-On", "price": "10.00", "category": "blush", "src": "/products/22_product.jpg" },
    ],
    "face_wash": [
      { "product_id": 2, "product_name": "Youth to the People Superfood Cleanser", "price": "52.95", "category": "face_wash", "src": "/products/2_product.jpg" },
    ],
    "fragrance": [
      { "product_id": 3, "product_name": "Sol De Janeiro Cheirosa 59 Perfume Mist", "price": "60.00", "category": "fragrance", "src": "/products/3_product.webp" },
    ],
    "primer": [
      { "product_id": 4, "product_name": "Too Faced Hangover Replenishing Face Primer", "price": "57.04", "category": "primer", "src": "/products/4_product.webp" },
    ],
    "conditioner": [
      { "product_id": 5, "product_name": "Amika The Kure Bond Repair Conditioner", "price": "38.03", "category": "conditioner", "src": "/products/5_product.webp" },
    ],
    "lip_tint": [
      { "product_id": 6, "product_name": "Merrezca Glow Ink Color Lip Tint #01 - Wild Berry 5 G", "price": "15.88", "category": "lip_tint", "src": "/products/6_product.png" },
    ],
    "lip_gloss": [
      { "product_id": 7, "product_name": "Charmiss Glitter Lip Gloss", "price": "11.04", "category": "lip_gloss", "src": "/products/7_product.webp" },
    ],
    "lip_serum": [
      { "product_id": 8, "product_name": "Cathy Doll Cc Lip Serum", "price": "13.25", "category": "lip_serum", "src": "/products/8_product.webp" },
    ],
    "lip_balm": [
      { "product_id": 9, "product_name": "Nivea Shine Lip Balm", "price": "5.00", "category": "lip_balm", "src": "/products/9_product.png" },
      { "product_id": 16, "product_name": "Laneige Lip Glowy Balm Berry", "price": "28.00", "category": "lip_balm", "src": "/products/16_product.jpg" },
    ],
    "powder": [
      { "product_id": 10, "product_name": "Pond's Magic Powder BB Double UV Protectionm", "price": "2.95", "category": "powder", "src": "/products/10_product.jpg" },
    ],
    "foundation": [
      { "product_id": 11, "product_name": "Estée Lauder Double Wear Stay-in-Place Makeup SPF 10", "price": "82.00", "category": "foundation", "src": "/products/11_product.png" },
      { "product_id": 14, "product_name": "Charlotte Tilbury Charlotte's Beautiful Skin Foundation 10 Neutral", "price": "82.00", "category": "foundation", "src": "/products/14_product.webp" },
    ],
    "lip_mask": [
      { "product_id": 12, "product_name": "LANEIGE Lip Sleeping Mask - Sweet Candy - 20gr", "price": "34.00", "category": "lip_mask", "src": "/products/12_product.webp" },
    ],
    "essence": [
      { "product_id": 13, "product_name": "RHODE Glazing Milk", "price": "40.75", "category": "essence", "src": "/products/13_product.webp" },
    ],
    "concealer": [
      { "product_id": 15, "product_name": "Elf Hydrating Camo Concealer", "price": "5.43", "category": "concealer", "src": "/products/15_product.webp" },
    ],
    "brow_pencil": [
      { "product_id": 17, "product_name": "Hourglass Arch Brow Sculpting Pencil", "price": "50.25", "category": "brow_pencil", "src": "/products/17_product.webp" },
    ],
    "face_mist": [
      { "product_id": 18, "product_name": "CAUDALIE BEAUTY ELIXIR", "price": "75.00", "category": "face_mist", "src": "/products/18_product.webp" },
    ],
    "moisturiser": [
      { "product_id": 19, "product_name": "Charlotte Tilbury Magic Water Cream", "price": "176.00", "category": "moisturiser", "src": "/products/19_product.webp" },
      { "product_id": 21, "product_name": "Maybelline New York Fit Me Fresh Tint Vitamin C Spf50 Mazenonline", "price": "19.10", "category": "moisturiser", "src": "/products/21_product.png" },
    ],
    "mascara": [
      { "product_id": 20, "product_name": "Benefit Cosmetics Mascara", "price": "39.38", "category": "mascara", "src": "/products/20_product.jpg" },
    ],
    "setting_product": [
      { "product_id": 23, "product_name": "Dr Sensitive All Day No Sebum Blur Powder Translucent With Free Kabuki Brush", "price": "11.00", "category": "setting_product", "src": "/products/23_product.jpg" },
      { "product_id": 24, "product_name": "ZEESEA Lasting Makeup Setting Spray", "price": "39.38", "category": "setting_product", "src": "/products/24_product.webp" },
    ],
  };

  // Function to handle video change
  const handleVideoChange = (videoId) => {
    setCurrentVideo(videoId);
    if (productDataByVideoId.hasOwnProperty(videoId)) {
      const prodData = productDataByVideoId[videoId];
      setProdAvail(true);
      setProductsData(productDataByVideoId[videoId]);
      const prodCategory = prodData.map(item => item.category);
      const uniqueCategories = [...new Set(prodCategory)];
      setProdCategories(uniqueCategories);
      const productsByCategories = getProductsByCategories(uniqueCategories);
      setProductsByCatData(productsByCategories);
      console.log('Products for current video:', prodData);
      console.log('Products by category for current video:', productsByCategories);
    } else {
      console.warn(`No data found for video ${videoId}`);
      setProdAvail(false);
      setProductsData(null);
      setProdCategories(null);
      setProductsByCatData(null);
    }
  };

  // Function to retrieve data for each category
  const getProductsByCategories = (categories) => {
    const result = {};
    categories.forEach(category => {
      if (productDataByCat.hasOwnProperty(category)) {
        result[category] = productDataByCat[category];
      }
    });
    return result;
  };

  return (
    <main className="flex min-h-screen flex-col">
      <div className="z-10 fixed top-0 flex w-full items-center justify-center pb-6 pt-8">
        <div className="flex items-center">
          <div className="font-semibold text-base text-white/60 text-center">Following</div>
          <div className="h-4 w-px bg-white/50 mx-3"></div>
          <div className="font-semibold text-lg text-white text-center">For You</div>
        </div>
        <div className="absolute right-0 pr-3">
          <img src="/Search Icon.svg" alt="Search" className="self-center object-scale-down py-px scale-95" />
        </div>
      </div>

      <div className="mb-[8vh] bg-black flex-grow relative">
        <div ref={containerRef} className="bg-black h-[92vh] overflow-y-scroll snap-y snap-mandatory scroll-smooth">
            {videoData.map((video, index) => {
              return (
              <div className='flex flex-col justify-center items-center overflow-hidden snap-center snap-always min-h-full relative'>
                <video
                  key={index}
                  ref={videoRef}
                  className="w-full min-h-full object-cover"
                  autoPlay
                  muted
                  loop
                  onPlay={() => handleVideoChange(video.id)}
                >
                  <source src={video.src} type="video/mp4" />
                </video>

                <div className="absolute bottom-0 w-full flex items-end justify-between p-2 ">
                  <div className="flex flex-col">
                    <div className="mb-1 font-semibold text-[17px] text-white max-w-[80vw] truncate">{video.creator}</div>
                    <div className="mb-1 font-normal text-[15px] text-white max-w-[80vw] leading-snug line-clamp-2 text-ellipsis overflow-hidden">{video.description} {video.tags}</div>
                    <div className="font-normal text-[15px] text-white max-w-[80vw]"> 
                      <span className="inline-flex">
                        <img src="/Music Icon.svg" alt="Home" className="self-center object-scale-down mr-2" />
                        <div className="min-w-[65vw] overflow-hidden shaded-element">
                          <p className="animate-roll line-clamp-1 ">{video.sound}</p> 
                        </div>
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col max-w-[11vw]">
                    <div className="flex flex-col items-center justify-center mb-4">
                      <img src="/User Icon.svg" alt="User" className="self-center object-scale-down" />
                    </div>
                    <div className="flex flex-col items-center justify-center mb-2">
                      <img src="/Heart Icon.svg" alt="Heart Icon" className="self-center object-scale-down" />
                      <div className="font-semibold text-[13px] drop-shadow text-white">328.7K</div>
                    </div>
                    <div className="flex flex-col items-center justify-center mb-2">
                      <img src="/Message Icon.svg" alt="Comment Icon" className="self-center object-scale-down" />
                      <div className="font-semibold text-[13px] drop-shadow text-white">578</div>
                    </div>
                    <button className="relative flex flex-col items-center justify-center mb-2 mt-1" onClick={toggleVisibility}>
                      <img src="/Shop Icon.svg" alt="Shop Icon" className={`z-10 self-center object-scale-down ${prodAvail ? 'scale-[0.95] mr-1' : 'scale-105'}`} />
                      {prodAvail && (
                        <span className="absolute top-0 left-0 right-0 bottom-auto -mt-1 mr-1 flex items-center justify-center">
                          <div className="animate-pulse">
                            <img src="/Sparkle.svg" alt="Sparkle" className="self-center scale-[1.5]" />
                          </div>
                        </span>
                      )}
                      <div className="font-semibold text-[13px] drop-shadow text-white">Shop</div>
                    </button>
                    <div className="flex flex-col items-center justify-center mb-2">
                      <img src="/Share Icon.svg" alt="Share Icon" className="self-center object-scale-down scale-95" />
                      <div className="font-semibold text-[13px] drop-shadow text-white">Share</div>
                    </div>
                    <div className="flex flex-col items-center justify-center mt-3 mb-1">
                      <img src="/Disc.svg" alt="Disc" className="self-center object-scale-down" />
                    </div>
                  </div>
                </div>
            </div>
            );
            })}
        </div>
      </div>

      {/* {isVisible && ( */}
        <div ref={sidebarRef} className={`z-20 backdrop-blur-[3px] overflow-y-auto overscroll-contain transform transition-transform duration-300 ${isVisible ? 'translate-x-0' : 'translate-x-full'} fixed top-0 right-0 w-[75vw] h-full shadow-lg bg-gradient-to-r from-zinc-200/70 from-0% to-[#010101]/70 to-100% `}>
          <div className="z-30 absolute top-0 right-0 w-[50vw] mx-4 my-6">
            <p className="text-[14px] text-[#FBFBFB] font-semibold mb-2 drop-shadow-2xl">Featured in this video</p>
            <div className="flex flex-col gap-y-2 mb-4">
              {productsData ? (
                productsData.map(p => (
                  <div key={p.product_id} >
                    <FeaturedProdCard itemId={p.product_id} product_name={p.product_name} price={p.price} src={p.src} ></FeaturedProdCard>
                  </div>
                ))
              ) : (
                <p>None at the moment, check back soon!</p>
              )}
              {productsData && productsData.length > 0 && (
                <div>
                  <LiveProdCard itemId={productsData[0].product_id} product_name={productsData[0].product_name} price={productsData[0].price} src={productsData[0].src}></LiveProdCard>
                </div>
              )}
            </div>
            <p className="text-[14px] text-[#FBFBFB] font-semibold mb-2 drop-shadow-2xl">Similar Products</p>
            <div className="flex flex-col gap-y-2 mb-6">
              {/* 
              {prodCategories ? (
                  prodCategories.map(category => (
                    <div key={category} >
                      <SimilarProdCard prodCategory={category} productsByCatData={productsByCatData} ></SimilarProdCard>
                    </div>
                  ))
                ) : (
                  <p>None at the moment, check back soon!</p>
              )}
               */}
              
              {productsByCatData ? (
                Object.keys(productsByCatData).map(category => {
                  const prodInOneCategory = productsByCatData[category];
                  console.log(prodInOneCategory)
                  return (
                    <SimilarProdCard key={category} prodCategory={category} data={prodInOneCategory} ></SimilarProdCard>
                  );
                })
              ) : (
                <p>None at the moment, check back soon!</p>
              )}
            </div>
          </div>
        </div>
      {/* )} */}

      <div className="fixed bottom-0 flex w-full items-center justify-between px-7 pb-6 pt-2 h-[8vh] bg-black">
        <div className="flex flex-col items-center justify-center  pt-1">
          <img src="/Home Solid Icon.svg" alt="Home" className="self-center object-scale-down py-px" />
          <div className="font-semibold text-[10px] text-white">Home</div>
        </div>
        <Link href="/shop">
          <div className="flex flex-col items-center justify-center  pt-1">
              <img src="/Shop_small.svg" alt="Shop" className="self-center object-scale-down" />
              <div className="font-semibold text-[10px] text-white">Shop</div>
          </div>
        </Link>
        <div className="flex items-center justify-center ">
          <img src="/Button Shape.svg" alt="Add Button" className="self-center object-scale-down py-px" />
        </div>
        <div className="flex flex-col items-center justify-center  pt-1">
          <img src="/Inbox Icon.svg" alt="Inbox" className="self-center object-scale-down py-px" />
          <div className="font-semibold text-[10px] text-white">Inbox</div>
        </div>
        <div className="flex flex-col items-center justify-center  pt-1">
          <img src="/Account Icon.svg" alt="Account" className="self-center object-scale-down py-px" />
          <div className="font-semibold text-[10px] text-white">Profile</div>
        </div>
      </div>

    </main>
  );
}
