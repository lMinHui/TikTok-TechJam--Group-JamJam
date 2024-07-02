import React from 'react';

const FeaturedProdCard = () => {
    return (
        <div className='bg-[#FBFBFB] rounded-lg w-[48vw] h-[21vh] p-1'>
            <div className='w-full h-3/5 overflow-hidden'>
                <div className='flex w-full h-full overflow-hidden'>
                    <div className='relative rounded-t-lg h-full w-full overflow-hidden'>
                        <img src="/RandomProd.png" alt="RandomProd" className="h-full w-full object-center object-cover" />
                        <div className="absolute flex top-0 left-0 items-start justify-start p-1.5">
                            <img src="/TikTok Mall Icon.svg" alt="TikTok Mall Icon" className="self-center object-scale-down inline-block" />             
                        </div>
                        <div className="absolute flex top-0 right-0 items-start justify-start p-1.5">
                            <img src="/Coupon_10.svg" alt="10% Coupon Icon" className="self-center object-scale-down inline-block" />             
                        </div>
                    </div>
                </div>
            </div>
            <div className='min-w-full flex flex-col justify-between px-1 pt-1 '>
                <p className='text-[13px] text-black drop-shadow-sm leading-tight line-clamp-2 text-ellipsis overflow-hidden'>[SG STOCK] Urban Beaded Bracelet Set 3PC more more more</p>
                <div className='flex justify-between w-full h-full'>
                    <span className='flex items-baseline leading-snug'>
                        <p className='text-[#FF3864] text-[12px] mr-px'>S$</p>
                        <p className='text-[#FF3864] text-[19px]'>25.33</p>
                    </span>
                    <div className='flex flex-col '>
                        <span className='flex items-baseline leading-snug'>
                            <img src="/Star.svg" alt="Star" className="self-center object-scale-down py-px inline-block mr-1" />
                            <p className='text-[#B0B0B0] text-[10px]'>4.7</p>
                        </span>
                        <span className='flex items-baseline leading-none'>
                            <img src="/Cart.svg" alt="Cart" className="self-center object-scale-down py-px inline-block mr-1" />
                            <p className='text-[#B0B0B0] text-[10px]'>930k</p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedProdCard;