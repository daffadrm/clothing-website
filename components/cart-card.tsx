"use client";

import { useCart } from "@/context/cartContext";
import { X } from "lucide-react";
import Link from "next/link";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { cartItems } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-40 z-40"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed top-20 right-0 h-full w-80 bg-white shadow-lg z-50 flex flex-col">
        <div className="flex justify-between items-center p-4 border-b border-neutral-200 bg-white">
          <h3 className="font-semibold text-lg">Your Cart</h3>
          <button onClick={onClose} aria-label="Close cart">
            <X size={24} />
          </button>
        </div>

        <ul className="bg-white">
          {cartItems.length === 0 && (
            <li className="p-4 text-center text-neutral-500">Cart is empty</li>
          )}
          {cartItems.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center px-4 py-2 border-b border-neutral-100"
            >
              <span>
                {item.name} x{item.quantity}
              </span>
              <span>Rp {item.price * item.quantity}</span>
            </li>
          ))}
        </ul>

        <div className="p-4 border-t border-neutral-200 bg-white">
          <div className="flex justify-between font-bold mb-4">
            <span>Total:</span>
            <span>
              Rp {cartItems.reduce((sum, i) => sum + i.price * i.quantity, 0)}
            </span>
          </div>
          <Link href="/checkout" onClick={onClose}>
            <button className="w-full bg-neutral-900 text-white py-2 hover:bg-neutral-800 transition-colors">
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
