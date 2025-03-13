import Link from 'next/link';
import Image from 'next/image';
import { Button } from './button';
import { Phone, ShoppingCart, User } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white border-b">
      {/* Top Bar */}
      <div className="bg-primary text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span className="text-sm">Llámanos: 900 123 456</span>
          </div>
          <div className="flex gap-4">
            <Link href="/mi-cuenta" className="text-sm hover:underline">Mi Cuenta</Link>
            <Link href="/seguimiento" className="text-sm hover:underline">Seguimiento de Pedido</Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative w-48 h-16">
            <Image
              src="/logo.png"
              alt="Pak Mobile Store"
              fill
              className="object-contain"
              priority
            />
          </Link>

          {/* Search */}
          <div className="flex-1 max-w-xl mx-8">
            <input
              type="search"
              placeholder="Buscar productos..."
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-6">
            <Link href="/mi-cuenta" className="flex items-center gap-2 hover:text-primary">
              <User className="h-5 w-5" />
              <span>Mi Cuenta</span>
            </Link>
            <Link href="/carrito" className="flex items-center gap-2 hover:text-primary">
              <ShoppingCart className="h-5 w-5" />
              <span>Carrito</span>
            </Link>
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-4">
          <ul className="flex gap-8">
            <li>
              <Link href="/" className="hover:text-primary">Inicio</Link>
            </li>
            <li>
              <Link href="/tienda" className="hover:text-primary">Tienda</Link>
            </li>
            <li>
              <Link href="/marcas" className="hover:text-primary">Marcas</Link>
            </li>
            <li>
              <Link href="/ofertas" className="hover:text-primary">Ofertas</Link>
            </li>
            <li>
              <Link href="/sobre-nosotros" className="hover:text-primary">Sobre Nosotros</Link>
            </li>
            <li>
              <Link href="/contacto" className="hover:text-primary">Contacto</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}