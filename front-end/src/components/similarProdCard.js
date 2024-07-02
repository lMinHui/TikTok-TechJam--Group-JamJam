import React from 'react';

const SimilarProdCard = () => {
    return (
        <div className='bg-[#FBFBFB] rounded-lg w-[48vw] h-[10vh] p-1'>
            <div className='w-full h-[7vh] overflow-hidden'>
                <div className='flex w-full h-full overflow-hidden gap-1'>
                    <div className='rounded-tl-lg h-full w-[29vw] overflow-hidden'>
                        <img src="/RandomProd.png" alt="RandomProd" className="h-full w-full object-center object-cover" />
                    </div>
                    <div className='flex flex-col h-full w-[31vw]'>
                        <img src="/RandomProd.png" alt="RandomProd" className="block object-cover w-full h-1/2 mb-1" />
                        <img src="/RandomProd.png" alt="RandomProd" className="block object-cover w-full h-1/2" />
                    </div>
                    <div className='relative rounded-tr-lg h-full w-[29vw] overflow-hidden'>
                        <img src="/RandomProd.png" alt="RandomProd" className="h-full w-full object-center object-cover" />
                        <div className="absolute inset-0 bg-black opacity-70 bg-gradient-radial from-slate-100 to-neutral-700"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center px-2">
                            <div className="text-center text-white">
                                <p className="text-xs truncate">+4502</p>
                                <p className="text-[8px]">More</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='min-w-full flex justify-between px-1 pt-0.5'>
                <p className='max-w-[35vw] text-[8px] text-black truncate drop-shadow-sm'>Electric Guitar</p>
                <img src="/Arrow.svg" alt="Arrow" className="self-center object-scale-down py-px inline-block" />
            </div>
        </div>
    );
};

export default SimilarProdCard;