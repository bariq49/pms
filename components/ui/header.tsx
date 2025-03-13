"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, ShoppingCart, User, Menu } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b">
      {/* Top Bar */}
      <div className="bg-primary text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span>Llámanos: 900 123 456</span>
          </div>
          <div className="hidden sm:flex gap-4">
            <Link href="/mi-cuenta" className="hover:underline">Mi Cuenta</Link>
            <Link href="/seguimiento" className="hover:underline">Seguimiento de Pedido</Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative w-40 lg:h-24 h-20 ">
            <Image
              src="/WhatsApp_Image_2025-03-10_at_20.48.08_145b3981-removebg-preview.png"
              alt="Pak Mobile Store"
              fill
              className="object-contain"
              priority
            />
          </Link>

          {/* Search */}
          <div className="hidden md:flex flex-1 max-w-xl mx-4">
            <input
              type="search"
              placeholder="Buscar productos..."
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4 sm:gap-6">
            <Link href="/mi-cuenta" className="hidden sm:flex items-center gap-2 hover:text-primary">
              <User className="h-5 w-5" />
              <span>Mi Cuenta</span>
            </Link>
            <Link href="/carrito" className="flex items-center gap-2 hover:text-primary">
              <ShoppingCart className="h-5 w-5" />
              <span className="hidden sm:inline">Carrito</span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="sm:hidden p-2 border rounded-lg"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="mt-3 md:hidden">
          <input
            type="search"
            placeholder="Buscar productos..."
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Navigation */}
        <nav className={`mt-4 ${isMenuOpen ? 'block' : 'hidden'} sm:block`}>
          <ul className="flex flex-col sm:flex-row gap-3 sm:gap-8 text-center sm:text-left">
            <li>
              <Link href="/" className="block py-2 sm:py-0 hover:text-primary">Inicio</Link>
            </li>
            {/* <li>
              <Link href="/tienda" className="block py-2 sm:py-0 hover:text-primary">Tienda</Link>
            </li>
            <li>
              <Link href="/marcas" className="block py-2 sm:py-0 hover:text-primary">Marcas</Link>
            </li>
            <li>
              <Link href="/ofertas" className="block py-2 sm:py-0 hover:text-primary">Ofertas</Link>
            </li>
            <li>
              <Link href="/sobre-nosotros" className="block py-2 sm:py-0 hover:text-primary">Sobre Nosotros</Link>
            </li> */}
            <li>
              <Link href="/contacto" className="block py-2 sm:py-0 hover:text-primary">Contacto</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
