
// import Image from 'next/image';
import Link from "next/link";
import { BsInstagram, BsFacebook, BsWhatsapp } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const FooterUI = () => {
  return (
    // <div className='relative w-full h-[400px]'>
    //     <Image src='/fondo-footer2.jpg' alt='giving with love info' fill={true}/>
    // </div>
    <div className=' w-full h-[250px] bg-white flex items-center justify-center border-4 border-blue-1 mt-8 relative'>
        <span className="absolute  bottom-0 right-1 sm:bottom-1 sm:right-3 text-blue-1 font-semibold">Se habla español</span>
        <div className="flex flex-col gap-4">
            <span className="mx-auto font-bold text-lg text-blue-1">Sandra hincapie</span>
            <Link
                className="flex gap-4 text-blue-1 transform hover:scale-105 transition" 
                href={"https://www.instagram.com/givingwithlove/"}>
                <BsInstagram size={25}/>
                <span className="font-bold ">
                    @givingwithlove_
                </span>
            </Link>
            <Link
                className="flex gap-4 text-blue-1 transform hover:scale-105 transition" 
                href={"https://www.facebook.com/GivingwithLove19"}>
                <BsFacebook size={25}/>
                <span className="font-bold ">
                    Giving with love
                </span>
            </Link>
            <Link
                className="flex gap-4 text-blue-1 transform hover:scale-105 transition" 
                href={"https://api.whatsapp.com/send?phone=%2B13057418532&data=ARDniiKTqmcLwc7ty31sFe3n312HHaIequoJCiKe0Dq6GRiArh8oECCbccPn49yqCsKzPBob9qckAQuGwxiojhvHWV6PQQgb9QFK9tkKbkYNeNkcZlVMkl9wFC_5rM7JyyJ_JRVxta2khSKnEyl4IvE&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR02MZU9IYUVMYMKoj6uZh9zmL3wZexJRFq6YvUgJUtgK1SAZYkF_YjRPH8"}>
                <BsWhatsapp size={25}/>
                <span className="font-bold ">
                    (305 741 85 32)
                </span>
            </Link>
            <div
                className="flex gap-4 text-blue-1 transform hover:scale-105 transition">
                <MdEmail size={25}/>
                <span className="font-bold ">givingwithlove2019@gmail.com</span>
            </div>
        </div>
    </div>
  )
}

export {FooterUI};