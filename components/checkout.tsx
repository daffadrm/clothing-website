"use client";

import { useCart } from "@/context/cartContext";
import { useState } from "react";

export default function CheckoutPage() {
  const { cartItems, updateQuantity, removeFromCart } = useCart();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const handleQuantityChange = (id: number, qty: number) => {
    updateQuantity(id, qty);
  };

  const totalPrice = cartItems.reduce(
    (sum, i) => sum + i.price * i.quantity,
    0
  );

  const handleSubmit = () => {
    if (!name || !address || !phone || cartItems.length === 0) {
      alert("Please fill all fields and ensure cart is not empty.");
      return;
    }

    let message = `*Checkout Details*\n\n`;
    cartItems.forEach((item) => {
      message += `${item.name} - Rp ${item.price} x${item.quantity} = Rp ${
        item.price * item.quantity
      }\n`;
    });
    message += `\nTotal: Rp ${totalPrice}`;
    message += `\n\nName: ${name}\nAddress: ${address}\nPhone: ${phone}`;

    const waNumber = "6281281870275";
    const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(waUrl, "_blank");
  };

  return (
    <div className="max-w-lg mx-auto py-6 px-4 sm:px-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Checkout</h1>

      {cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <>
          <div className="mb-6 border border-neutral-200 rounded">
            <ul>
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="flex flex-wrap items-center justify-between p-3 border-b border-neutral-200 gap-2"
                >
                  {/* Nama Produk */}
                  <div className="flex-1 min-w-[150px]">
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-neutral-600">
                      Rp {item.price.toLocaleString()} / pcs
                    </p>
                  </div>

                  {/* Input Quantity */}
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      min={1}
                      value={item.quantity}
                      onChange={(e) =>
                        handleQuantityChange(item.id, parseInt(e.target.value))
                      }
                      className="w-16 border px-2 py-1 text-center rounded"
                    />
                  </div>

                  {/* Harga Total */}
                  <div className="w-24 text-right font-semibold">
                    Rp {(item.price * item.quantity).toLocaleString()}
                  </div>

                  {/* Tombol Hapus */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600 text-2xl font-bold px-2 hover:text-red-800 transition"
                  >
                    ×
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Total */}
          <div className="flex justify-between font-bold text-lg mb-6">
            <span>Total:</span>
            <span>Rp {totalPrice}</span>
          </div>

          {/* User info */}
          <div className="mb-6 space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border px-3 py-2 rounded"
            />
            <textarea
              placeholder="Your Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full border px-3 py-2 rounded"
            />
            <input
              type="text"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          {/* Submit button */}
          <button
            onClick={handleSubmit}
            className="w-full bg-green-600 text-white py-3 rounded text-lg hover:bg-green-500 transition-colors"
          >
            Send Order via WhatsApp
          </button>
        </>
      )}
    </div>
  );
}
