"use client";

import { useState, useEffect } from "react";
import { ShoppingCart, Trash2 } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation"; 

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  tag: string;
}

export default function Cart() {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const router = useRouter(); 

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  const removeFromCart = (id: number) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    router.push("/checkout"); 
  };

  return (
    <div className="w-full mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <h1 className="text-2xl font-semibold text-gray-800 flex items-center">
        <ShoppingCart className="h-6 w-6 mr-2 text-[#F7A416]" />
        Shopping Cart
      </h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600 mt-4">Your cart is empty.</p>
      ) : (
        <div className="mt-6 space-y-4">
          {cartItems.map((product) => (
            <div
              key={product.id}
              className="flex items-center justify-between border-b pb-4"
            >
              <div className="flex items-center">
                <div className="relative w-16 h-16">
                  <Image
                    src={product.image}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="text-md font-semibold text-gray-800">{product.name}</h3>
                  <span className="text-[#F7A416] font-semibold">{product.price}</span>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(product.id)}
                className="text-red-500 hover:text-red-700 transition-all"
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
          ))}
        </div>
      )}

      <button
        onClick={handleCheckout}
        className="mt-6 w-[30%] bg-primary text-white py-3 rounded-lg text-center font-semibold hover:bg-[#F7A416] transition-all"
      >
        Proceed to Checkout
      </button>
    </div>
  );
}
