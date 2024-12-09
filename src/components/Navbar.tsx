import React from 'react'
import Link from 'next/link'
import { RiAccountCircleFill } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";

// Accept className as a prop
interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  return (
    <div className={className}>
      {/* Centered Links */}
      <div className='flex items-center justify-center gap-[20px]'>
        <Link href='/'>Home</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>

      {/* Icons with larger sizes */}
      <div className='flex items-center justify-end gap-[20px]'>
        <Link href='account'>
          <button className="p-2">
            <RiAccountCircleFill className="h-[30px] w-[30px]" />
            <span className="sr-only">Account</span>
          </button>
        </Link>
        <button className="p-2">
          <CiSearch className="h-[30px] w-[30px]" />
          <span className="sr-only">Search</span>
        </button>
        <button className="p-2">
          <CiHeart className="h-[30px] w-[30px]" />
          <span className="sr-only">Wishlist</span>
        </button>
        <button className="p-2">
          <CiShoppingCart className="h-[30px] w-[30px]" />
          <span className="sr-only">Cart</span>
        </button>
      </div>
    </div>
  )
}

export default Navbar
