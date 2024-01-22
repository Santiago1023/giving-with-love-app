
import { HomeProductsCard } from "@/components/Card/HomeProductsCard";
import { FooterUI } from "@/components/Footer";
import { SliderPhotos } from "@/components/Slider";
// import { useState } from "react";


const Home = () => {
  // const [openDialog, setOpenDialog] = useState(false);
  return (
    <main className="flex flex-col gap-20">
      <SliderPhotos/>
      <HomeProductsCard/>
      <FooterUI/>
    </main>
  )
}

export default Home;
