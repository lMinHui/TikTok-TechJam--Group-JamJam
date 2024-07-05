'use client'
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useRouter, useSearchParams } from 'next/navigation';
import FeaturedProdCard from "@/components/featuredProdCard";

export default function Home() {
    const router = useRouter();
    const handleBackButton = () => {
        if (router?.back) {
            router.back();
        } else {
            router.push('/shop');
        }
    };
    const searchParams = useSearchParams()
    const query = searchParams.get('search')
    // To input the search input on page load
    useEffect(() => {
        if (query) {
            const formatString = (str) => {
                if (str.includes('_')) {
                    // Split by underscores and capitalize each word
                    const words = str.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1));
                    return words.join(' ');
                } else {
                    return str.charAt(0).toUpperCase() + str.slice(1);
                }
            };
            const formattedQuery = formatString(query);
            document.getElementById('searchInput').value = formattedQuery;
        }
    }, [query]);

    return (
        <div className="flex min-h-screen flex-col bg-white">
            {/* header section starts here*/}
            <div className="flex w-full justify-between px-4 py-10 gap-x-5">
                <div className="flex flex-col justify-center items-center">
                    <svg onClick={handleBackButton} width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 1L1 6L6 11" stroke="black" stroke-width="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <div class="relative rounded-full bg-[#E7E7E7] text-gray-900 shadow-sm w-full">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="#939393" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="text" name="searchInput" id="searchInput" class="block w-full bg-[#E7E7E7] rounded-full border-0 px-4 py-0.5 ps-10 text-sm text-gray-900 focus:ring-2 focus:ring-inset focus:ring-gray-300 placeholder:text-[#939393]" placeholder="Search"></input>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <svg width="13" height="3" viewBox="0 0 13 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="1.1" cy="1.1" r="1.1" fill="black"/>
                        <circle cx="11.1" cy="1.1" r="1.1" fill="black"/>
                        <circle cx="6.1" cy="1.1" r="1.1" fill="black"/>
                    </svg>
                </div>
            </div>
            {/* header section ends here*/}
            
        </div>
    );
}
