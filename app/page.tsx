"use client";
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Phone, Clock, CreditCard, Truck, Star, Shield, Gift, PhoneCall, Smartphone, Wrench, Package, Banknote, Navigation, ShoppingCart } from 'lucide-react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TopHeroSlider } from '@/components/ui/TopHeroSlider';
import Slider from 'react-slick';

export default function Home() {
  const featuredBrands = [
    { name: 'Apple', image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&q=80&w=300&h=200' },
    { name: 'Samsung', image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&q=80&w=300&h=200' },
    { name: 'Xiaomi', image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=80&w=300&h=200' },

    { name: 'Apple', image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&q=80&w=300&h=200' },
    { name: 'Samsung', image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&q=80&w=300&h=200' },
    { name: 'Xiaomi', image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=80&w=300&h=200' },
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

  const newArival2 = [
    {
      id:1,
      name: 'sam A05S 128+6  ',
      price: ' 110€',
      image: 'https://images.unsplash.com/photo-1567581935884-3349723552ca?auto=format&fit=crop&q=80&w=300&h=400',
      tag: 'NOVEDAD'
    },
    {
      id:2,
      name: 'sam A15 128+6RAM  ',
      price: ' 135€',
      image: 'https://images.unsplash.com/photo-1567581935884-3349723552ca?auto=format&fit=crop&q=80&w=300&h=400',
      tag: 'NOVEDAD'
    },
    {
      id:3,
      name: 'sam A35 128gb  ',
      price: '  220€',
      image: 'https://images.unsplash.com/photo-1567581935884-3349723552ca?auto=format&fit=crop&q=80&w=300&h=400',
      tag: 'NOVEDAD'
    },
    {
      id:4,
      name: 'Airpods pro 2',
      price: '200€',
      image: 'https://images.unsplash.com/photo-1576243345690-4e4b79b63288?auto=format&fit=crop&q=80&w=300&h=400',
      tag: 'NOVEDAD'
    },
    {
      id:5,
      name: 'iPhone 13 128GB ',
      price: '470€',
      image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&q=80&w=300&h=400',
      tag: 'NOVEDAD'
    },
    {
      id:6,

      name: ' iPhone 16 128GB  ',
      price: '  765€',
      image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=300&h=400',
      tag: 'NOVEDAD'
    },
    {
      id:7,
      name: 'iPhone 16pro 128GB ',
      price: ' 980€',
      image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=80&w=300&h=400',
      tag: 'NOVEDAD'
    },
    {
      id:8,
      name: 'sam A05S 128+6  ',
      price: ' 110€',
      image: 'https://images.unsplash.com/photo-1567581935884-3349723552ca?auto=format&fit=crop&q=80&w=300&h=400',
      tag: 'NOVEDAD'
    },
    {
      id:9,
      name: 'sam A15 128+6RAM  ',
      price: ' 135€',
      image: 'https://images.unsplash.com/photo-1567581935884-3349723552ca?auto=format&fit=crop&q=80&w=300&h=400',
      tag: 'NOVEDAD'
    },

  ]


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
      image: 'https://images.unsplash.com/photo-1567581935884-3349723552ca?auto=format&fit=crop&q=80&w=300&h=400',
      tag: 'NOVEDAD'
    },
    {
      name: 'sam A35 128gb  ',
      price: '  220€',
      image: 'https://images.unsplash.com/photo-1567581935884-3349723552ca?auto=format&fit=crop&q=80&w=300&h=400',
      tag: 'NOVEDAD'
    },
  

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

  const Logos = [
    {
      image: '/honor_logo_2.png',
    },
    {
      image: "/aple_logo.png"
    },
    {
      image: "/log-logo.png"
    },
    {
      image: "/motorola.png"
    },
    {
      image: "/huawei-logo.png"
    },
    {
      image: "/samsung_logo.png"
    },
    {
      image: "/xiaomi.png"
    },
    {
      image: "/nokia_logo.png"
    },
    {
      image: '/sony_logo.png'
    },
    {
      image: '/logo-oppo.png'
    },
    {
      image: "/htc_logo.png"
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4, arrows: false },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3, arrows: false },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2, arrows: false },
      },
    ],
  };

  const settings1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, arrows: false },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, arrows: false },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, arrows: false },
      },
    ],
  };

  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2 },
      },
    ],
  };

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  tag: string;
}

const addToLocalStorage = (product: Product) => {
  let cartItems: Product[] = JSON.parse(localStorage.getItem("cart") || "[]");
  cartItems.push(product);
  localStorage.setItem("cart", JSON.stringify(cartItems));
};

  



  return (
    <>
      {/* Hero Section */}
      <TopHeroSlider />


      {/* Services Section */}
      <section className="py-4 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="lg:text-3xl text-lg font-bold mb-4">Envía dinero y compra accesorios móviles en Pak Mobiles</h2>
            <p className="text-gray-600 max-w-4xl mx-auto">
              En Pak Mobiles, envía dinero, compra accesorios y explora una amplia gama de smartphones y dispositivos electrónicos con garantía total. Como pioneros en ventas online, seguimos ampliando nuestro catálogo para ofrecerte las mejores ofertas. ¡Encuentra tu smartphone ideal y descubre lo último en tecnología!
            </p>
          </div>

        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="lg:text-3xl text-xl  font-bold text-left mb-12">Categorías</h2>
          <Slider {...settings2}>
            {featuredBrands.map((brand, index) => (
              <div key={index} className="flex flex-col items-center justify-center">
                <div className="w-40 h-40 relative overflow-hidden rounded-full">
                  <Image
                    src={brand.image}
                    alt={brand.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 text-xl font-bold text-center">{brand.name}</h3>
              </div>
            ))}
          </Slider>
        </div>
      </section>


      <section className="py-16 bg-gray-50 overflow-hidden px-2 lg:px-12">
        <div className="container mx-auto">
          <h2 className="lg:text-3xl text-lg font-bold text-center mb-6 sm:mb-8">
            La mejor selección de móviles libres
          </h2>
          <p className="text-center text-gray-600 mb-8 sm:mb-12">
            Esta es nuestra mejor selección de móviles libres. Los últimos móviles del mercado y los móviles con mejores prestaciones. Ahora en maxmovil.com puedes encontrar las mejores marcas en nuestra selección de productos de móviles libres.
          </p>
          <Slider {...settings}>
  {newArival2.map((product, index) => (
    <div key={index} className="px-2">
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md transition-all duration-300 group hover:shadow-lg flex flex-col h-auto">
        <div className="relative h-[55%] overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={400}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 max-h-[300px]"
          />
          <span className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs sm:text-sm">
            {product.tag}
          </span>
        </div>

        <div className="p-4 flex flex-col justify-between h-[45%]">
          <h3 className="text-md font-semibold text-gray-800">{product.name}</h3>
          <span className="text-lg font-semibold text-[#F7A416]">{product.price}</span>
          <div className="flex mt-2 items-center justify-between gap-3">
            <Link
              href="/checkout"
              className="w-full bg-primary text-white text-center py-2 px-4 rounded-lg transition-all duration-300 hover:bg-[#F7A416] hover:text-white"
            >
              Comprar
            </Link>
            <Link onClick={() => addToLocalStorage(product)} href="/cart" className="hover:text-primary">
              <ShoppingCart className="h-6 w-6 text-[#F7A416]" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  ))}
</Slider>

        </div>
      </section>

      <section className="py-16 ">
        <div className="container mx-auto lg:px-24">
          <div className="relative w-full h-64 overflow-hidden group">
            <Image
              src="/1.jpg"
              alt="Banner"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>
      </section>


      <section className="py-16 bg-gray-50 overflow-hidden px-2 lg:px-12">
        <div className="container mx-auto">
          <h2 className="lg:text-3xl text-lg font-bold text-center mb-6 sm:mb-8">
            Novedades destacadas en smartphones, tablets y wearables
          </h2>
          <p className="text-center text-gray-600 mb-8 sm:mb-12">
            Actualizamos diariamente las novedades en smartphones, tablets y wearables. En maxmovil.com puedes encontrar rápidamente los nuevos modelos tecnológicos incorporados en nuestra página web.
          </p>
          <Slider {...settings}>
  {newArival2.map((product, index) => (
    <div key={index} className="px-2">
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md transition-all duration-300 group hover:shadow-lg flex flex-col h-auto">
        <div className="relative h-[55%] overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={400}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 max-h-[300px]"
          />
          <span className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs sm:text-sm">
            {product.tag}
          </span>
        </div>

        <div className="p-4 flex flex-col justify-between h-[45%]">
          <h3 className="text-md font-semibold text-gray-800">{product.name}</h3>
          <span className="text-lg font-semibold text-[#F7A416]">{product.price}</span>
          <div className="flex mt-2 items-center justify-between gap-3">
  <Link
    href="/checkout"
    className="w-full bg-primary text-white text-center py-2 px-4 rounded-lg transition-all duration-300 hover:bg-[#F7A416] hover:text-white"
  >
    Comprar
  </Link>
  
  <button 
    onClick={() => addToLocalStorage(product)} 
    className="hover:text-primary"
  >
    <ShoppingCart className="h-6 w-6 text-[#F7A416]" />
  </button>
</div>

        </div>
      </div>
    </div>
  ))}
</Slider>

        </div>
      </section>


      <section className="py-16 ">
        <div className="container mx-auto lg:px-24">
          <div className="relative w-full h-64 overflow-hidden group">
            <Image
              src="/3.jpg"
              alt="Banner"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>
      </section>


      <section className="py-16 bg-gray-50 overflow-hidden px-12 sm:px-12">
        <div className="container mx-auto">
          <h2 className="lg:text-3xl text-lg font-bold text-center mb-6 sm:mb-8">
            Comprar móviles y smartphones online con un amplio catálogo con las mejores marcas

          </h2>
          <p className="text-center text-gray-600 mb-8 sm:mb-12">
            En Maxmovil.com puedes comprar artículos de electrónica con total garantía. Consulta nuestra lista de mejores marcas para encontrar lo que buscas y descubrir nuevos fabricantes. Fuimos pioneros como tienda de móviles online, y año tras año vamos ampliando nuestro catálogo y ofreciéndote las mejores ventajas de compra. Encuentra el smartphone que más te gusta y explora las otras secciones de nuestro comercio electrónico.
          </p>
          <Slider {...settings1}>
            {Logos.map((product, index) => (
              <div key={index} className="px-2">
                <div className="relative h-[55%] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.image}
                    width={300}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 max-h-[100px]"
                  />

                </div>
              </div>
            ))}
          </Slider>
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

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">

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

      {/* Newsletter Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            ¡No Te Pierdas Nuestras Ofertas!
          </h2>
          <p className="mb-6 text-base sm:text-lg">
            Suscríbete a nuestra newsletter y recibe las mejores ofertas
          </p>

          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="flex-1 px-4 py-2 rounded-lg text-black"
            />
            <Button variant="secondary" className="w-full sm:w-auto">
              Suscribirse
            </Button>
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

const PrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} left-[-10px] absolute cursor-pointer z-10`}
      style={{ ...style, display: "block", background: "#F6A41A", borderRadius: "50%", }}
      onClick={onClick}
    />
  );
};