
import Image from 'next/image';
import Link from 'next/link';
import { MdClose, MdFilterList, MdShoppingCart } from "react-icons/md";
import { useRouter } from 'next/router';
import React, { useState } from "react";

const Navbar = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  return (
    <header className=' w-full shadow-xl'>
        
      <nav className='flex justify-between px-7 sm:px-10 py-3 bg-white'>
          <Link className=' flex items-center gap-2' href='/'>
              <Image className='' src={'/gwl.png'} alt='Giving with love' width={70} height={70}/>
              <h1 className=' text-lg text-blue-2 hover:text-blue-1 font-bold'>Giving with love</h1>
          </Link>
          <div className=' flex items-center justify-center gap-2'>
            <ul className='gap-4 hidden sm:flex'>
                <NavbarLink href="/shop" title="Shop"/>
                <NavbarLink href="/shop" title="ShopShop"/>
            </ul>
            <Link className=' inline-flex items-center justify-center text-lg rounded-full relative h-10 w-10' href='/cart'>
                
                <MdShoppingCart className='text-black'/>
                <span className='absolute h-5 w-5 -top-1.5 -right-1.5 inline-flex items-center justify-center gap-1 rounded-full bg-pink-primary text-sm text-white'>
                  3
                </span>
            </Link>
            <button
              onClick={() => setIsToggleOpen(!isToggleOpen)}
              className=' sm:hidden'>
                { isToggleOpen
                  ? <MdClose className='text-black h-7 w-7'/>
                  : <MdFilterList className='text-black h-7 w-7'/>  
                }
            </button>
          </div>
      </nav>
    </header>
  )
}

interface NavbarLinkProps {
  href: string;
  title: string;
}

const NavbarLink = ({href, title}: NavbarLinkProps) => {
  const router = useRouter();
  return(
      <li className="flex ">
          <Link
              className={`flex items-center py-4 
                  ${
                      router.asPath === href
                      ? "text-blue-1 hover:text-blue-2 font-bold"
                      : "text-blue-2 hover:text-blue-1 font-bold "
                  }`
              }
              href={href}
          >
              <span>{title}</span>
          </Link>
      </li>
  )
}

export { Navbar };