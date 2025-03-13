"use client";
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Phone, Clock, CreditCard, Truck, Star, Shield, Gift, PhoneCall, Smartphone, Wrench, Package, Banknote, Navigation } from 'lucide-react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TopHeroSlider } from '@/components/ui/TopHeroSlider';

export default function Home() {
  const featuredBrands = [
    { name: 'Apple', image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&q=80&w=300&h=200' },
    { name: 'Samsung', image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&q=80&w=300&h=200' },
    { name: 'Xiaomi', image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=80&w=300&h=200' },
  ];

  const featuredProducts = [
    {
      name: 'iPhone 15 Pro',
      price: '1299€',
      image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=300&h=400',
      discount: '10%'
    },
    {
      name: 'Samsung Galaxy S23',
      price: '899€',
      image: 'https://images.unsplash.com/photo-1678911820864-e5c0c4667687?auto=format&fit=crop&q=80&w=300&h=400',
      discount: '15%'
    },
    {
      name: 'Xiaomi 13T Pro',
      price: '799€',
      image: 'https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&q=80&w=300&h=400',
      discount: '20%'
    }
  ];

  const newArrivals = [
    {
      name: 'Airpods pro 2',
      price: '200€',
      image: 'https://images.unsplash.com/photo-1576243345690-4e4b79b63288?auto=format&fit=crop&q=80&w=300&h=400',
      tag: 'NOVEDAD'
    },
    {
      name: 'iPhone 13 128GB ',
      price: '470€',
      image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&q=80&w=300&h=400',
      tag: 'NOVEDAD'
    },
    {
      name: ' iPhone 16 128GB  ',
      price: '  765€',
      image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=300&h=400',
      tag: 'NOVEDAD'
    },
    {
      name: 'iPhone 16pro 128GB ',
      price: ' 980€',
      image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=80&w=300&h=400',
      tag: 'NOVEDAD'
    },
    {
      name: 'sam A05S 128+6  ',
      price: ' 110€',
      image: 'https://images.unsplash.com/photo-1567581935884-3349723552ca?auto=format&fit=crop&q=80&w=300&h=400',
      tag: 'NOVEDAD'
    },
    {
      name: 'sam A15 128+6RAM  ',
      price: ' 135€',
      image: 'https://images.unsplash.com/photo-1637159773228-a77c2a977c89?auto=format&fit=crop&q=80&w=300&h=400',
      tag: 'NOVEDAD'
    },
    {
      name: 'sam A35 128gb  ',
      price: '  220€',
      image: 'https://images.unsplash.com/photo-1567581935884-3349723552ca?auto=format&fit=crop&q=80&w=300&h=400',
      tag: 'NOVEDAD'
    },
    {
      name: 'sam A55 256GB   ',
      price: '  320€',
      image: 'https://images.unsplash.com/photo-1637159773228-a77c2a977c89?auto=format&fit=crop&q=80&w=300&h=400',
      tag: 'NOVEDAD'
    },
    {
      name: 'sam A16 5G 128gb',
      price: '140€',
      image: 'https://images.unsplash.com/photo-1567581935884-3349723552ca?auto=format&fit=crop&q=80&w=300&h=400',
      tag: 'NOVEDAD'
    },
    {
      name: 'sam A15 128+6RAM  ',
      price: ' 135€',
      image: 'https://images.unsplash.com/photo-1637159773228-a77c2a977c89?auto=format&fit=crop&q=80&w=300&h=400',
      tag: 'NOVEDAD'
    },
    {
      name: 'sam A35 5G 128gb  ',
      price: '220€',
      image: 'https://images.unsplash.com/photo-1567581935884-3349723552ca?auto=format&fit=crop&q=80&w=300&h=400',
      tag: 'NOVEDAD'
    },
    {
      name: 'sam S24 ULTRA 256GB   ',
      price: '  830€',
      image: 'https://images.unsplash.com/photo-1637159773228-a77c2a977c89?auto=format&fit=crop&q=80&w=300&h=400',
      tag: 'NOVEDAD'
    },
    {
      name: 'redmi 14C 256+8  ',
      price: ' 105€',
      image: 'https://images.unsplash.com/photo-1567581935884-3349723552ca?auto=format&fit=crop&q=80&w=300&h=400',
      tag: 'NOVEDAD'
    },
    {
      name: 'redmi note 11s 128+6  ',
      price: '118€',
      image: 'https://images.unsplash.com/photo-1637159773228-a77c2a977c89?auto=format&fit=crop&q=80&w=300&h=400',
      tag: 'NOVEDAD'
    },
       {
      name: 'redmi note 12pro plus 256gb 5G  ',
      price: ' 245€',
      image: 'https://images.unsplash.com/photo-1567581935884-3349723552ca?auto=format&fit=crop&q=80&w=300&h=400',
      tag: 'NOVEDAD'
    },
    {
      name: 'Redmi note 13pro 5G 512GB  ',
      price: ' 278€',
      image: 'https://images.unsplash.com/photo-1637159773228-a77c2a977c89?auto=format&fit=crop&q=80&w=300&h=400',
      tag: 'NOVEDAD'
    },
    {
      name: 'Redmi note 13pro plus 512+12 5G   ',
      price: '  318€',
      image: 'https://images.unsplash.com/photo-1567581935884-3349723552ca?auto=format&fit=crop&q=80&w=300&h=400',
      tag: 'NOVEDAD'
    },
    {
      name: 'Redmi note 14pro 5G 256gb',
      price: ' 245€',
      image: 'https://images.unsplash.com/photo-1637159773228-a77c2a977c89?auto=format&fit=crop&q=80&w=300&h=400',
      tag: 'NOVEDAD'
    }
    
  ];

  const services = [
    {
      icon: Smartphone,
      title: 'Móviles Libres',
      description: 'Amplia selección de smartphones desbloqueados de las mejores marcas.'
    },
    {
      icon: Package,
      title: 'Accesorios',
      description: 'Todo tipo de accesorios para teléfonos, smartphones y tablets.'
    },
    {
      icon: Wrench,
      title: 'Servicio Técnico',
      description: 'Reparación profesional y mantenimiento de dispositivos móviles.'
    },
    {
      icon: Banknote,
      title: 'Financiación',
      description: 'Pago a plazos flexible adaptado a tus necesidades.'
    }
  ];


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6, 
    slidesToScroll: 1, 
    nextArrow: <NextArrow />, 
        prevArrow: <PrevArrow />, 
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 6 } },  
      { breakpoint: 1024, settings: { slidesToShow: 4 } },  
      { breakpoint: 640, settings: { slidesToShow: 2 } },  
      { breakpoint: 320, settings: { slidesToShow: 1 } }, 
    ],
  };


 
  return (
    <>
      {/* Hero Section */}
      <TopHeroSlider/>
     

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Envía dinero y compra accesorios móviles en Pak Mobiles</h2>
            <p className="text-gray-600 max-w-4xl mx-auto">
            En Pak Mobiles, puedes enviar dinero, comprar accesorios móviles y explorar una amplia gama de smartphones y dispositivos electrónicos de las mejores marcas. Nuestro extenso catálogo cuenta con garantía total, lo que garantiza calidad y fiabilidad. Como pioneros en la venta de móviles online, seguimos ampliando nuestra colección para ofrecerte las mejores ofertas y ventajas. ¡Encuentra el smartphone perfecto y explora nuestra tienda para descubrir los últimos accesorios y artículos tecnológicos esenciales!
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-center">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Categorías</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredBrands.map((brand, index) => (
              <div key={index} className="relative h-48 group overflow-hidden rounded-lg">
                <Image
                  src={brand.image}
                  alt={brand.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white">{brand.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex items-center gap-4 p-4 border rounded-lg">
              <Shield className="h-10 w-10 text-primary" />
              <div>
                <h3 className="font-semibold">Garantía Oficial</h3>
                <p className="text-sm text-gray-600">2 años de garantía</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 border rounded-lg">
              <Truck className="h-10 w-10 text-primary" />
              <div>
                <h3 className="font-semibold">Envío Rápido</h3>
                <p className="text-sm text-gray-600">24/48h laborables</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 border rounded-lg">
              <CreditCard className="h-10 w-10 text-primary" />
              <div>
                <h3 className="font-semibold">Pago Seguro</h3>
                <p className="text-sm text-gray-600">Múltiples métodos</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 border rounded-lg">
              <PhoneCall className="h-10 w-10 text-primary" />
              <div>
                <h3 className="font-semibold">Atención Personal</h3>
                <p className="text-sm text-gray-600">Soporte especializado</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="py-16 bg-gray-50 overflow-hidden px-12">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-8">
      Novedades destacadas en smartphones, tablets y wearables
    </h2>
    <p className="text-center text-gray-600 mb-12">
      Actualizamos diariamente las novedades en smartphones, tablets y wearables. Encuentra rápidamente los nuevos modelos tecnológicos incorporados en nuestra página web.
    </p>

    {/* Custom Slider */}
    <Slider {...settings}>
      {newArrivals.map((product, index) => (
        <div key={index} className="px-2">
          <div className="bg-white hover:border   overflow-hidden group h-[450px] flex flex-col">
            <div className="relative h-[60%]">
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={400}
                className="w-full h-full object-cover "
              />
              <span className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                {product.tag}
              </span>
            </div>
            <div className="p-6 flex flex-col justify-between h-[40%]">
              <h3 className="text-sm font-semibold">{product.name}</h3>
                <span className="text-md text-center font-semibold text-primary text-[#F7A416] ">{product.price}</span>
              <div className="flex flex-col">
                <Link href="/contact"className='bg-white text-black text-center hover:text-[#F7A416]'>
                  Comprar
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  </div>
</section>


      {/* Featured Brands */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Marcas Destacadas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredBrands.map((brand, index) => (
              <div key={index} className="relative h-48 group overflow-hidden rounded-lg">
                <Image
                  src={brand.image}
                  alt={brand.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white">{brand.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Ofertas Destacadas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <div key={index} className="group relative bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="absolute top-4 right-4 z-10 bg-red-500 text-white px-2 py-1 rounded">
                  -{product.discount}
                </div>
                <div className="relative h-80">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <Button size="sm">Ver Detalles</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">¡No Te Pierdas Nuestras Ofertas!</h2>
          <p className="mb-8 text-lg">Suscríbete a nuestra newsletter y recibe las mejores ofertas</p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="flex-1 px-4 py-2 rounded-lg text-black"
            />
            <Button variant="secondary">Suscribirse</Button>
          </div>
        </div>
      </section>
    </>
  );
}


const NextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} right-[-10px] absolute cursor-pointer z-10`}
      style={{ ...style, display: "block", background: "#F6A41A", borderRadius: "50%" }}
      onClick={onClick}
    />
  );
};

// Custom Left Arrow
const PrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} left-[-10px] absolute cursor-pointer z-10`}
      style={{ ...style, display: "block", background: "#F6A41A", borderRadius: "50%" ,}}
      onClick={onClick}
    />
  );
};