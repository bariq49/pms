"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, ShoppingCart, User, Menu, BaggageClaim } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      const parsedCart = JSON.parse(storedCart);
      if (Array.isArray(parsedCart)) {
        setCartCount(parsedCart.length);
      }
    }

    const handleStorageChange = () => {
      const updatedCart = JSON.parse(localStorage.getItem("cart") || "[]");
      setCartCount(updatedCart.length);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);



  return (
    <header className="bg-white border-b relative">
      {/* Top Bar */}
      <div className="bg-primary text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span>Llámanos: 900 123 456</span>
          </div>
          <div className="hidden sm:flex gap-4">
            <Link href="/mi-cuenta" className="hover:underline">
              Mi Cuenta
            </Link>
            <Link href="/seguimiento" className="hover:underline">
              Seguimiento de Pedido
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative w-16 h-14 sm:h-16">
          <Image
            src="/WhatsApp_Image_2025-03-10_at_20.48.08_145b3981-removebg-preview.png"
            alt="Pak Mobile Store"
            fill
            className="object-contain"
            priority
          />
        </Link>

        {/* Search Bar (Hidden on Mobile) */}
        <div className="hidden lg:flex lg:flex-1 max-w-xl mx-4">
          <input
            type="search"
            placeholder="Buscar productos..."
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <ul className="hidden lg:flex gap-6">
          <li>
            <Link href="/" className="block py-2 hover:text-primary">
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/contact" className="block py-2 hover:text-primary">
              Contacto
            </Link>
          </li>
          <li>
       
            <Link href="/cart" className="relative flex items-center hover:text-primary">
              <ShoppingCart className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
        
          </li>
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Shopping Cart Icon */}
          

          <button
            className="sm:hidden p-2 border rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav
        className={`fixed z-50 top-0 left-0 w-3/4 h-full bg-white shadow-lg transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } sm:hidden`}
      >
        <div className="p-4 border-b flex justify-between items-center">
          <span className="text-lg font-semibold">Menú</span>
          <button onClick={() => setIsMenuOpen(false)}>✖</button>
        </div>
        <ul className="flex flex-col gap-3 p-4">
          <li>
            <Link href="/" className="block py-2 hover:text-primary">
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/contact" className="block py-2 hover:text-primary">
              Contacto
            </Link>

          </li>
          <li>
         
            <Link href="/cart" className="relative flex items-center hover:text-primary">
              <ShoppingCart className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
         
          </li>
          
       
        </ul>
      </nav>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 sm:hidden"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </header>
  );
}