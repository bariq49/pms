import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo and About */}
          <div>
            <Link href="/" className="relative w-48 h-16 block mb-4">
              <Image
                src="/logo.png"
                alt="Pak Mobile Store"
                fill
                className="object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-gray-400">
              Tu tienda de confianza para móviles libres y accesorios. Garantía oficial y envío rápido.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><Link href="/tienda" className="text-gray-400 hover:text-white">Tienda</Link></li>
              <li><Link href="/sobre-nosotros" className="text-gray-400 hover:text-white">Sobre Nosotros</Link></li>
              <li><Link href="/contacto" className="text-gray-400 hover:text-white">Contacto</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-gray-400">Calle Principal 123, Madrid</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-gray-400">900 123 456</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-gray-400">info@pakmobilestore.com</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-bold mb-4">Síguenos</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary"><Facebook className="h-6 w-6" /></a>
              <a href="#" className="hover:text-primary"><Instagram className="h-6 w-6" /></a>
              <a href="#" className="hover:text-primary"><Twitter className="h-6 w-6" /></a>
              <a href="#" className="hover:text-primary"><Youtube className="h-6 w-6" /></a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Pak Mobile Store. Todos los derechos reservados.
            </p>
            <div className="flex gap-4">
              <Link href="/privacidad" className="text-gray-400 hover:text-white">Política de Privacidad</Link>
              <Link href="/terminos" className="text-gray-400 hover:text-white">Términos y Condiciones</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}