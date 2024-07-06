import React from 'react';
import Link from 'next/link';

const FeaturedProdCard = ({itemId, product_name, price, src}) => {
    return (
        <Link href={`/shop/${itemId}`}>
        <div className='bg-[#FBFBFB] shadow rounded-lg w-auto h-[20vh] p-1'>
            <div className='flex flex-col  w-full h-full'>
                <div className='flex w-full min-h-3/5 overflow-hidden'>
                    <div className='relative rounded-t-lg h-full w-full overflow-hidden'>
                        <img src={src} alt={product_name} className="h-full w-full object-center object-cover" />
                        <div className="absolute flex top-0 left-0 items-start justify-start p-1.5">
                            <img src="/TikTok Mall Icon.svg" alt="TikTok Mall Icon" className="self-center object-scale-down inline-block" />             
                        </div>
                        <div className="absolute flex top-0 right-0 items-start justify-start p-1.5">
                            <img src="/Coupon_10.svg" alt="10% Coupon Icon" className="self-center object-scale-down inline-block" />             
                        </div>
                    </div>
                </div>
                <div className='min-w-full h-auto flex flex-col justify-between px-1 pt-1 '>
                    <p className='text-[13px] text-black font-normal drop-shadow-sm leading-tight line-clamp-2 text-ellipsis overflow-hidden'>{product_name}</p>
                    <div className='flex justify-between'>
                        <span className='flex items-end leading-snug'>
                            <p className='text-[#FF3864] text-[12px] font-normal mr-px'>S$</p>
                            <p className='text-[#FF3864] text-[19px] leading-none font-bold'>{price}</p>
                        </span>
                        <div className='flex flex-col '>
                            <span className='flex items-baseline leading-snug'>
                                <img src="/Star.svg" alt="Star" className="self-center object-scale-down py-px inline-block mr-1" />
                                <p className='text-[#B0B0B0] text-[10px] font-normal'>4.7</p>
                            </span>
                            <span className='flex items-baseline leading-none'>
                                <img src="/Cart.svg" alt="Cart" className="self-center object-scale-down py-px inline-block mr-1" />
                                <p className='text-[#B0B0B0] text-[10px] font-normal'>930k</p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Link>
    );
};

export default FeaturedProdCard;