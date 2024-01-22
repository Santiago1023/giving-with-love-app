
import Image from 'next/image';
import React from 'react'

interface ProductCardProps {
    url: string;
    price: number;
    title: string;

}
const ProductCard = ({url, price, title}: ProductCardProps) => {
    const newPrice = (price: number) => `$ ${price}`;
  return (
    // <div className='w-[170px] h-[270px] sm:w-[200px] sm:h-[300px] bg-white shadow-lg debug'>
    //     <div className=''>
    //         <Image src={url} alt={url} width={200} height={250}/>
    //     </div>
    //     <div className='flex flex-col items-center debug'>
    //         <span className='text-blue-1 font-bold'>{newPrice(price)}</span>
    //         <span className='text-black font-bold'>{title}</span>
    //     </div>
    // </div>
    <div className='shadow-lg transform hover:scale-105 transition'>
        <div className='relative w-[170px] h-[240px] sm:w-[200px] sm:h-[270px]'>
            <Image src={url} alt={url} fill={true}/>
        </div>
        <div className='flex flex-col items-center'>
            <span className='text-blue-1 font-bold'>{newPrice(price)}</span>
            <span className='text-black font-bold'>{title}</span>
        </div>
    </div>
  )
//   return (
//     <div className=' bg-white shadow-lg debug'>
//         <div style={{ position: 'relative', width: '200px', height: '200px' }}>
//             <Image
//                 src={url}
//                 alt="Picture of the author"
//                 sizes="100px"
//                 fill
//                 style={{
//                 objectFit: 'contain',
//                 }}
//             />
//         </div>
//         <div className='flex flex-col items-center debug'>
//             <span className='text-blue-1 font-bold'>{newPrice(price)}</span>
//             <span className='text-black font-bold'>{title}</span>
//         </div>
//     </div>
//   )
}

export {ProductCard};