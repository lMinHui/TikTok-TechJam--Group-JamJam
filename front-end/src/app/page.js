'use client'
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import SimilarProdCard from "@/components/similarProdCard";
import FeaturedProdCard from "@/components/featuredProdCard";

export default function Home() {
  const sidebarRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
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
      // remove event listener when sidebar is not visible
      document.removeEventListener('mousedown', handleClickOutside);
    }
    // remove event listener when component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isVisible]);

  return (
    <main className="flex min-h-screen flex-col">
      <div className="z-10 fixed top-0 flex w-full items-center justify-between pb-6 pt-8">
        <div className="flex items-center space-x-6 flex-grow">
          <div className="flex-grow"></div>
          <div className="font-normal text-sm font-mono text-center">Following</div>
          <div className="font-bold text-sm font-mono text-center">For You</div>
          <div className="flex-grow"></div>
        </div>
        <div className="pr-2 font-normal text-sm font-mono">Search</div>
      </div>

      <div className="mb-[8vh] flex-grow bg-purple-200 relative">
        <div className="absolute bottom-0 w-full flex items-end justify-between p-2">
          <div className="flex flex-col">
            <div className="mb-2 font-normal text-sm font-mono max-w-[80vw] truncate">Name</div>
            <div className="font-normal text-sm font-mono max-w-[80vw] truncate">Description - DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription</div>
          </div>
          <div className="flex flex-col">
            <div className="bg-white rounded-lg p-2 mb-2">Icon 1</div>
            <div className="bg-white rounded-lg p-2 mb-2">Icon 2</div>
            <div className="bg-white rounded-lg p-2 mb-2">Icon 3</div>
            <div className="bg-white rounded-lg p-2 mb-2">Icon 4</div>
            <div className="bg-white rounded-lg p-2 mb-2">Icon 5</div>
            <button className="bg-white rounded-lg p-2 mb-2" onClick={toggleVisibility}>Shop Icon</button>
            <div className="bg-white rounded-lg p-2 rounded-full">Icon 6</div>
          </div>
        </div>
      </div>

      {isVisible && (
        <div ref={sidebarRef} className="z-20 backdrop-blur-[3px] overflow-y-auto overscroll-contain fixed top-0 right-0 w-[75vw] h-full shadow-lg bg-gradient-to-r from-zinc-200/70 from-0% to-[#010101]/70 to-100%">
          <div className="z-30 absolute top-0 right-0 w-[50vw] mx-4 my-6">
            <p className="text-[14px] text-[#FBFBFB] font-semibold mb-2 drop-shadow-2xl">Featured in this video</p>
            <div className="flex flex-col mb-4">
              <div className="bg-white rounded w-25 h-10 text-xs">Replace this with FeaturedProdCard</div>
            </div>
            <p className="text-[14px] text-[#FBFBFB] font-semibold mb-2 drop-shadow-2xl">Similar Products</p>
            <div className="flex flex-col gap-y-2 mb-6">
              <SimilarProdCard></SimilarProdCard>
              <SimilarProdCard></SimilarProdCard>
              <SimilarProdCard></SimilarProdCard>
              <SimilarProdCard></SimilarProdCard>
              <SimilarProdCard></SimilarProdCard>
              <SimilarProdCard></SimilarProdCard>
              <SimilarProdCard></SimilarProdCard>
              <SimilarProdCard></SimilarProdCard>
              <SimilarProdCard></SimilarProdCard>
              <SimilarProdCard></SimilarProdCard>
              <SimilarProdCard></SimilarProdCard>
              <SimilarProdCard></SimilarProdCard>
            </div>
          </div>
        </div>
      )}

      <div className="fixed bottom-0 flex w-full items-center justify-between px-2 pb-6 pt-2 h-[8vh] bg-black">
        <div className="flex items-center justify-center p-4">
          <div className="font-bold text-xs font-mono text-white">Home</div>
        </div>
        <div className="flex items-center justify-center p-4">
          <div className="font-bold text-xs font-mono text-white">Friends</div>
        </div>
        <div className="flex items-center justify-center p-4">
          <div className="font-bold text-xs font-mono text-white">Add</div>
        </div>
        <div className="flex items-center justify-center p-4">
          <div className="font-bold text-xs font-mono text-white">Inbox</div>
        </div>
        <div className="flex items-center justify-center p-4">
          <div className="font-bold text-xs font-mono text-white">Profile</div>
        </div>
      </div>

    </main>
  );
}
