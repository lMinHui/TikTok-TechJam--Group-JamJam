import React from 'react';

const FeaturedProdCard = () => {
    return (
        <div className='bg-[#FBFBFB] shadow rounded-lg w-[48vw] h-[21vh] p-1'>
            <div className='flex w-full h-full overflow-hidden gap-1'>
                
                <div className='flex flex-col h-full w-1/2 justify-between'>
                    <div className='rounded-tl-lg min-h-3/5 w-full overflow-hidden'>
                        <img src="/RandomProd.png" alt="RandomProd" className="h-full w-full object-center object-cover" />
                    </div>
                    <div className='flex flex-col justify-between px-0.5 pt-1 w-full min-h-2/5'>
                            <p className='text-[13px] text-black font-normal drop-shadow-sm leading-tight line-clamp-3 text-ellipsis overflow-hidden'>XPTTE Welighl Lasting Crea</p>
                            <div className='flex mt-1'>
                                <span className='flex items-baseline mr-3'>
                                    <img src="/Star.svg" alt="Star" className="self-center object-scale-down py-px inline-block mr-1" />
                                    <p className='text-[#B0B0B0] text-[10px] font-normal'>4.7</p>
                                </span>
                                <span className='flex items-baseline'>
                                    <img src="/Cart.svg" alt="Cart" className="self-center object-scale-down py-px inline-block mr-1" />
                                    <p className='text-[#B0B0B0] text-[10px] font-normal'>930k</p>
                                </span>
                            </div>
                            <span className='flex items-end leading-snug mt-2'>
                                <p className='text-[#FF3864] text-[12px] font-normal mr-px'>S$</p>
                                <p className='text-[#FF3864] text-[19px] font-bold leading-none'>25.33</p>
                            </span>
                        </div>
                </div>

                <div className='relative rounded-r-lg h-full w-1/2 overflow-hidden'>
                    <img src="/RandomProd.png" alt="RandomProd" className="h-full w-full object-center object-cover" />
                    <div className="absolute flex top-0 left-0 items-start justify-start p-1">
                        <img src="/Live Icons.svg" alt="Live" className="self-center object-scale-down py-px inline-block" />             
                    </div>
                    <div className="absolute flex bottom-0 left-0 p-1 items-center">
                        <img src="/Seller User Icon.svg" alt="Seller User Icon" className="self-center object-scale-down py-px" />
                        <p className='text-white text-[10px] ml-1 drop-shadow-sm'>ZPTTAA</p>             
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedProdCard;