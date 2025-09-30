"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, ShoppingCart, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="py-4 px-4 sm:px-6 md:px-8 lg:px-12 border-b border-neutral-200 fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
        <Link href="/" className="text-2xl font-light tracking-wider">
          ALAN
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <Link
                href="/"
                className="text-neutral-700 hover:text-black transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="text-neutral-700 hover:text-black transition-colors"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-neutral-700 hover:text-black transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-neutral-700 hover:text-black transition-colors"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/cart"
                className="text-neutral-900 flex items-center gap-2 relative"
              >
                <ShoppingCart size={20} className="mr-5" />

                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                  {" "}
                  5
                </span>
                {/* <span className="ml-1">Cart</span> */}
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden z-[60]"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
            console.log("onclick");
          }}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 pt-10">
          <nav className="p-4 bg-white">
            <ul className="space-y-6 text-center">
              <li>
                <Link
                  href="/"
                  className="text-xl text-neutral-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-xl text-neutral-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-xl text-neutral-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-xl text-neutral-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-xl text-neutral-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/cart"
                  className="text-neutral-900 relative gap-2 flex justify-center text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <ShoppingCart size={20} className="flex justify-center" />
                  Cart
                  <span className="absolute -top-2 right-[120px] bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    {" "}
                    5
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
