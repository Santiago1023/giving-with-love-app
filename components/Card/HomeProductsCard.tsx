import { ProductCard } from "@/components/Card";
import React from 'react'
import { Button } from "@/components/Button";

const HomeProductsCard = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-[900px] m-auto gap-4 bg-white p-4 rounded-md">
        {/* <div className='debug grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 m-auto md:gap-5 sm:gap-3 gap-1 max-w-[900px] bg-white'> */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-5 sm:gap-3 gap-1'>
            <ProductCard url={"/item1.png"} price={20.25} title={"Surprise Breakfast"}/>
            <ProductCard url={"/item2.png"} price={20.25} title={"Surprise Breakfast"}/>
            <ProductCard url={"/item3.png"} price={20.25} title={"Surprise Breakfast"}/>
            <ProductCard url={"/item4.png"} price={20.25} title={"Surprise Breakfast"}/>
            <ProductCard url={"/item5.png"} price={20.25} title={"Surprise Breakfast"}/>
            <ProductCard url={"/item1.png"} price={20.25} title={"Surprise Breakfast"}/>
            <ProductCard url={"/item1.png"} price={20.25} title={"Surprise Breakfast"}/>
            <ProductCard url={"/item1.png"} price={20.25} title={"Surprise Breakfast"}/>
        </div>
        <Button bg="blue-1" textColor="white" text="See all products"/>
    </div>
  )
}

export {HomeProductsCard};