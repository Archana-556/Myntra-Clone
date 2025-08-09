// import React, { Component } from 'react';
import React, { useState } from 'react';
import { Link } from "react-router-dom";

import { FaUser, FaHeart, FaShoppingBag, FaSearch, FaBars, FaTimes } from 'react-icons/fa';

const menuItems = [
  { name: 'MEN', path:'men', submenu: ['T-Shirts', 'Shirts', 'Jeans', 'Shoes'] },
  { name: 'WOMEN', path:'women', submenu: ['Kurtas', 'Tops', 'Sarees', 'Heels'] },
  { name: 'KIDS', path:'kids', submenu: ['Boys Clothing', 'Girls Clothing'] },
  { name: 'HOME', path:'home', submenu: ['Decor', 'Kitchen', 'Bath'] },
  { name: 'BEAUTY', path:'beauty', submenu: ['Makeup', 'Skincare'] },
  { name: 'GENZ', path:'genz', submenu: ['Trendy', 'Streetwear'] },
  { name: 'STUDIO', path:'studio', submenu: ['Fashion Shows', 'Trends'], tag: 'NEW' }
];


export default function Navbar() {
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
      <>
      
<nav className="w-full shadow-sm bg-white px-4 sm:px-6 py-3">
      <div className="flex justify-between items-center">
        {/* Left: Logo and Menu Items */}
        <div className="flex items-center space-x-6">
          <img  src="https://aartisto.com/wp-content/uploads/2020/11/myntra.png" alt="Logo" className="h-14 w-auto" />

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center space-x-6">
            {menuItems.map((item, index) => (
              <li key={index} className="relative group">
                <button className="text-sm font-semibold text-gray-800 py-5 hover:text-pink-600">
             <Link key={item.path} to={`/${item.path}`}>{item.name}</Link>     
                </button>
                {item.tag && (
                  <span className="text-[10px] text-pink-500 font-bold absolute -top-2 -right-4">NEW</span>
                )}

                {/* Dropdown on hover */}
                <div className="absolute top-full left-0 bg-white border rounded shadow-md p-4 hidden group-hover:block z-10 min-w-[160px]">
                  <ul className="space-y-2">
                    {item.submenu.map((sub, i) => (
                      <li key={i} className="text-sm text-gray-700 hover:text-pink-500 cursor-pointer">
                        {sub}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Center: Search bar */}
        <div className="relative hidden lg:block w-full max-w-md mx-8">
          <input
            type="text"
            placeholder="Search for products, brands and more"
            className="w-full border rounded px-4 py-1 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <FaSearch className="absolute top-2.5 left-3 text-gray-400" />
        </div>

        {/* Right: Icons */}
        <div className="hidden lg:flex items-center space-x-6 text-sm text-gray-800 font-medium">
          <div className="flex flex-col items-center hover:text-pink-600 cursor-pointer group">
            <FaUser size={18} />
            <span>Profile</span>
            {/* Profile Card on Hover */}
            <div className="absolute right-0 mt-12 mr-8 px-5 w-80 bg-white shadow-lg border border-gray-200 rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="p-4 border-b">
                <p className="font-semibold text-sm">Welcome</p>
                <p className="text-xs text-gray-600">To access account and manage orders</p>
                <button className="mt-3 w-full border border-pink-500 text-pink-500 font-bold py-1 rounded text-sm hover:bg-pink-50">
                 <Link to={'/login'}>
                  LOGIN / SIGNUP
                  </Link> 
                </button>
              </div>
              <ul className="text-sm p-4 space-y-2 border-b">
                <li className="hover:text-pink-600 cursor-pointer">Orders</li>
                <li className="hover:text-pink-600 cursor-pointer">Wishlist</li>
                <li className="hover:text-pink-600 cursor-pointer">Gift Cards</li>
                <li className="hover:text-pink-600 cursor-pointer">Contact Us</li>
                <li className="hover:text-pink-600 cursor-pointer flex items-center justify-between">
                  Myntra Insider
                  <span className="bg-pink-500 text-white text-[10px] px-2 py-0.5 rounded-full">NEW</span>
                </li>
              </ul>
              <ul className="text-sm p-4 space-y-2">
                <li className="hover:text-pink-600 cursor-pointer">Myntra Credit</li>
                <li className="hover:text-pink-600 cursor-pointer">Coupons</li>
                <li className="hover:text-pink-600 cursor-pointer">Saved Cards</li>
                <li className="hover:text-pink-600 cursor-pointer">Saved VPA</li>
                <li className="hover:text-pink-600 cursor-pointer">Saved Addresses</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center hover:text-pink-600 cursor-pointer">
            <FaHeart size={18} />
            <span>Wishlist</span>
          </div>
          <div className="flex flex-col items-center hover:text-pink-600 cursor-pointer">
            <FaShoppingBag size={18} />
            <span>Bag</span>
          </div>
        </div>

        {/* Hamburger */}
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden text-gray-800">
          {mobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-4">
          <ul className="space-y-4">
            {menuItems.map((item, index) => (
              <li key={index}>
                <details>
                  <summary className="font-semibold text-gray-800 cursor-pointer flex justify-between items-center">
                    {item.name}
                    {item.tag && <span className="text-xs text-pink-500 ml-2">{item.tag}</span>}
                  </summary>
                  <ul className="mt-2 ml-4 space-y-1">
                    {item.submenu.map((sub, i) => (
                      <li key={i} className="text-sm text-gray-700 hover:text-pink-500 cursor-pointer">
                        {sub}
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            ))}
          </ul>

          {/* Mobile Icons */}
          <div className="mt-6 flex justify-around text-sm text-gray-800 font-medium">
            <div className="flex flex-col items-center hover:text-pink-600 cursor-pointer">
              <FaUser size={18} />
              <span>Profile</span>
            </div>
            <div className="flex flex-col items-center hover:text-pink-600 cursor-pointer">
              <FaHeart size={18} />
              <span>Wishlist</span>
            </div>
            <div className="flex flex-col items-center hover:text-pink-600 cursor-pointer">
              <FaShoppingBag size={18} />
              <span>Bag</span>
            </div>
          </div>
        </div>
      )}
    </nav>

      </>
    )
  }

