


"use client";


import { MenuOutlined, MenuUnfoldOutlined, SearchOutlined, ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import React, { useState } from 'react';
import { Menu, MenuIcon, MenuSquareIcon, ShoppingCart, User2Icon, UserCircle, UserIcon, UserRoundCheckIcon } from "lucide-react";


export default function Header(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [isSearchOpen, SetIsSearchOpen] = useState(false);
  const Searchbar = ()=> {
    SetIsSearchOpen(!isMenuOpen);
  };
    return(
        <nav className="bg-white w-full h-20 navbar">
            <input type="checkbox" id="check"/>
            <label htmlFor="check" className="checkbtn" onClick={toggleMenu}>
                <MenuOutlined/>
            </label>
            <label className="logo">Avion</label>
            <ul className={`buttons justify-end ${isMenuOpen ? 'show' : ''}`}>
                <li className="navbutton">home</li>
                <li className="navbutton">about</li>
                <li className="navbutton">cart</li>
                <li className="navbutton">wishlist</li>
                <li>
                    <label htmlFor="searched" className="searchbtn " onClick={Searchbar}>
                        <SearchOutlined/>
                    </label> 
                </li>
                <li>
                    <label htmlFor="searched" className="searchbtn  " onClick={Searchbar}>
                        <ShoppingCart/>
                    </label>
                </li>
                <li>
                    <label htmlFor="searched" className="searchbtn " onClick={Searchbar}>
                        <UserCircle/>
                    </label>
                </li>
            </ul>
        </nav>
    )
};
export function Header2(){
    return(
        <nav className="bg-gray-50 w-full h-14 ">
            <ul className="w-full h-16 flex items-center justify-center gap-10 text-gray-400 ">
                <li>All products</li>
                <li>Plant Pot</li>
                <li>Ceramics</li>
                <li>Tables</li>
                <li>Chairs</li>
                <li>Crockery</li>
                <li>Tableware</li>
                <li>Cutlery</li>
            </ul>

        </nav>
    )
}