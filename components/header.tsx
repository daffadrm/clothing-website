"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, ShoppingCart, X } from "lucide-react";
import { useCart } from "@/context/cartContext";
import CartDrawer from "./cart-card";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartItems, totalItems } = useCart();

  console.log(cartItems, "cartItems");

  return (
    <header className="py-4 px-4 sm:px-6 md:px-8 lg:px-12 border-b border-neutral-200 fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-light tracking-wider">
          ALAN
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <Link
            href="/"
            className="text-neutral-700 hover:text-black transition-colors"
          >
            Home
          </Link>
          <Link
            href="/products"
            className="text-neutral-700 hover:text-black transition-colors"
          >
            Products
          </Link>
          <Link
            href="/about"
            className="text-neutral-700 hover:text-black transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-neutral-700 hover:text-black transition-colors"
          >
            Contact
          </Link>
          {/* Cart */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative flex items-center text-neutral-900"
          >
            <ShoppingCart size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {totalItems}
              </span>
            )}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden z-[60]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
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
        <div className="md:hidden fixed inset-0 z-40 bg-black bg-opacity-40">
          <nav className="p-4 bg-white">
            <ul className="space-y-6">
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
                <button
                  onClick={() => {
                    setIsCartOpen(true);
                    setIsMenuOpen(false);
                  }}
                  className="relative flex items-center text-neutral-900 text-xl"
                >
                  <ShoppingCart size={20} className="mr-2" />
                  Cart
                  {totalItems > 0 && (
                    <span className="absolute -top-2 -right-10 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                      {totalItems}
                    </span>
                  )}
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
}
