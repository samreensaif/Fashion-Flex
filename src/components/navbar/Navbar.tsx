"use client";
import React from "react";
import style from "./Navbar.module.css";
import { IoIosMenu } from "react-icons/io";
import { islandMoments, istokWeb } from "@/font";

import Image from "next/image";
import Link from "next/link";

function Navbar() {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const showFunc = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className={style.nav}>
        <div className={style.logo}>
          <Image src="/logo.png" alt="Image" width={96} height={96} />
          <h1 className={islandMoments.className}>Fashion Flex.</h1>
        </div>

        
        {isOpen == true ?(
          <div className={`${style.links} ${style.adjust}`}>
          
          <ul>
            <li>
              <Link href={"/"} className={istokWeb.className}>
                Home
              </Link>
            </li>
            <li>
              <Link href={"/shop"} className={istokWeb.className}>
                Shop
              </Link>
            </li>
            <li>
              <Link href={"/features"} className={istokWeb.className}>
                Features
              </Link>
            </li>
            <li>
              <Link href={"/contact"} className={istokWeb.className}>
                Contact
              </Link>
            </li>
          </ul>
        
        
          <button>SIGN UP</button>
        
      </div>
        )
      :
      (<div className={`${style.links}`}>
          
        <ul>
          <li>
            <Link href={"/"} className={istokWeb.className}>
              Home
            </Link>
          </li>
          <li>
            <Link href={"/shop"} className={istokWeb.className}>
              Shop
            </Link>
          </li>
          <li>
            <Link href={"/features"} className={istokWeb.className}>
              Features
            </Link>
          </li>
          <li>
            <Link href={"/contact"} className={istokWeb.className}>
              Contact
            </Link>
          </li>
        </ul>
      
      
        <button>SIGN UP</button>
      
    </div>)}
        
        <IoIosMenu size={60} className={style.menu} onClick={showFunc} />
      </nav>
    </div>
  );
}

export default Navbar;
