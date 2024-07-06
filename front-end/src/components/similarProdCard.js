import React from 'react';
import Link from 'next/link';

const SimilarProdCard = ({prodCategory, data}) => {
    
    const formatString = (str) => {
        if (str.includes('_')) {
            // Split by underscores and capitalize each word
            const words = str.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1));
            return words.join(' ');
        } else {
            return str.charAt(0).toUpperCase() + str.slice(1);
        }
    };
    const formattedProdCategory = formatString(prodCategory);
    
    const top4SrcValues = data.slice(0, 4).map(item => item.src);
    while (top4SrcValues.length < 4) {
        top4SrcValues.push(top4SrcValues[0]);
    }

    return (
        <div className='bg-[#FBFBFB] shadow rounded-lg w-auto h-[10vh] p-1'>
            <Link
                href={ formattedProdCategory ? 
                {
                    pathname: '/shop',
                    query: { search: `${encodeURIComponent(prodCategory)}` },
                } : "/shop"}
            >
            <div className='flex flex-col w-full h-full justify-between'>
                <div className='w-full min-h-2/3 overflow-hidden'>
                    <div className='flex w-full h-full overflow-hidden gap-1'>
                        <div className='rounded-tl-lg h-full w-[29vw] overflow-hidden'>
                            <img src={top4SrcValues[0]} alt="RandomProd" className="h-full w-full object-center object-cover" />
                        </div>
                        <div className='flex flex-col h-full w-[31vw]'>
                            <img src={top4SrcValues[1]} alt="RandomProd" className="block object-cover w-full h-1/2 mb-1" />
                            <img src={top4SrcValues[2]} alt="RandomProd" className="block object-cover w-full h-1/2" />
                        </div>
                        <div className='relative rounded-tr-lg h-full w-[29vw] overflow-hidden'>
                            <img src={top4SrcValues[3]} alt="RandomProd" className="h-full w-full object-center object-cover" />
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
                    <p className='max-w-[35vw] text-[12px]  text-black truncate align-text-bottom drop-shadow-sm'>{formattedProdCategory}</p>
                    <img src="/Arrow.svg" alt="Arrow" className="self-center object-scale-down py-px inline-block" />
                </div>
            </div>
            </Link>
        </div>
    );
};

export default SimilarProdCard;