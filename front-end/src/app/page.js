'use client'
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import SimilarProdCard from "@/components/similarProdCard";
import FeaturedProdCard from "@/components/featuredProdCard";
import LiveProdCard from "@/components/liveProdCard";

export default function Home() {
  const sidebarRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [prodAvail, setProdAvail] = useState(true);
  // ^ when product is available, set the setProdAvail to true

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

  const videoData = [
    { "id": 1, "creator": "lora8grace", "description": "#Only S$4.20 Original price $12.57 Discount 60% Garnier 30ml Vitamin C Booster Serum Bright Complete Nicotinamide Brighting Skin Tone Essence Fade Acne Mark Beauty Products!", "sound": "nhạc nền - BẠCH TUYẾT-FASHION", "src": "1_ssstik.io_@lora8grace_1719797298702.mp4" },
    { "id": 2, "creator": "lora8grace", "description": "#Only S$4.20 Original price $12.57 Discount 60% Garnier 30ml Vitamin C Booster Serum Bright Complete Nicotinamide Brighting Skin Tone Essence Fade Acne Mark Beauty Products!", "sound": "positions - Ariana Grande", "src": "1_ssstik.io_@lora8grace_1719797298702.mp4" },
    { "id": 3, "creator": "lora8grace", "description": "#Only S$4.20 Original price $12.57 Discount 60% Garnier 30ml Vitamin C Booster Serum Bright Complete Nicotinamide Brighting Skin Tone Essence Fade Acne Mark Beauty Products!", "sound": "nhạc nền - BẠCH TUYẾT-FASHION", "src": "1_ssstik.io_@lora8grace_1719797298702.mp4" }
  ]
  const videoRef = useRef(null);

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
        <div className="bg-black h-[92vh] overflow-y-scroll snap-y snap-mandatory scroll-smooth">
            {videoData.map((video, index) => (
              <div className='flex flex-col justify-center items-center overflow-hidden snap-center snap-always min-h-full relative'>
                <video
                  key={index}
                  ref={videoRef}
                  className="w-full min-h-full object-cover"
                  autoPlay
                  muted
                  loop
                >
                  <source src={video.src} type="video/mp4" />
                </video>
              
                <div className="absolute bottom-0 w-full flex items-end justify-between p-2 ">
                  <div className="flex flex-col">
                    <div className="mb-1 font-semibold text-[17px] text-white max-w-[80vw] truncate">{video.creator}</div>
                    <div className="mb-1 font-normal text-[15px] text-white max-w-[80vw] leading-snug line-clamp-2 text-ellipsis overflow-hidden">{video.description}</div>
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
          ))}
        </div>
      </div>
      
      
      {/* {isVisible && ( */}
        <div ref={sidebarRef} className={`z-20 backdrop-blur-[3px] overflow-y-auto overscroll-contain transform transition-transform duration-300 ${isVisible ? 'translate-x-0' : 'translate-x-full'} fixed top-0 right-0 w-[75vw] h-full shadow-lg bg-gradient-to-r from-zinc-200/70 from-0% to-[#010101]/70 to-100% `}>
          <div className="z-30 absolute top-0 right-0 w-[50vw] mx-4 my-6">
            <p className="text-[14px] text-[#FBFBFB] font-semibold mb-2 drop-shadow-2xl">Featured in this video</p>
            <div className="flex flex-col gap-y-2 mb-4">
              <FeaturedProdCard></FeaturedProdCard>
              <LiveProdCard></LiveProdCard>
              <FeaturedProdCard></FeaturedProdCard>
            </div>
            <p className="text-[14px] text-[#FBFBFB] font-semibold mb-2 drop-shadow-2xl">Similar Products</p>
            <div className="flex flex-col gap-y-2 mb-6">
              <SimilarProdCard></SimilarProdCard>
              <SimilarProdCard></SimilarProdCard>
              <SimilarProdCard></SimilarProdCard>
              <SimilarProdCard></SimilarProdCard>
              <SimilarProdCard></SimilarProdCard>
            </div>
          </div>
        </div>
      {/* )} */}

      <div className="fixed bottom-0 flex w-full items-center justify-between px-7 pb-6 pt-2 h-[8vh] bg-black">
        <div className="flex flex-col items-center justify-center  pt-1">
          <img src="/Home Solid Icon.svg" alt="Home" className="self-center object-scale-down py-px" />
          <div className="font-semibold text-[10px] text-white">Home</div>
        </div>
        <div className="flex flex-col items-center justify-center  pt-1">
          <img src="/Shop_small.svg" alt="Shop" className="self-center object-scale-down" />
          <div className="font-semibold text-[10px] text-white">Shop</div>
        </div>
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