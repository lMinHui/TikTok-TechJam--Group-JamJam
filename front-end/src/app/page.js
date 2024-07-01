'use client'
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {

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
            <button className="bg-white rounded-lg p-2 mb-2">Shop Icon</button>
            <div className="bg-white rounded-lg p-2 rounded-full">Icon 6</div>
          </div>
        </div>
      </div>

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
