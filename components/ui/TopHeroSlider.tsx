import { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Slider from "react-slick";

export function TopHeroSlider() {
  const [images, setImages] = useState<string[]>([]);

  // Define images for different screen sizes
  const largeScreenImages = [
    "/2.jpg",
    "/4.jpg",
    "/1.jpg",
    "/3.jpg",
  ];

  const smallScreenImages = [
    "/6.jpg",
    "/7.jpg",
    "/8.jpg",
    "/5.jpg"
  ];

  // Detect screen size and update images accordingly
  useEffect(() => {
    const updateImages = () => {
      if (window.innerWidth >= 1024) {
        setImages(largeScreenImages);
      } else {
        setImages(smallScreenImages);
      }
    };

    updateImages(); // Call initially

    // Listen for window resize to update images dynamically
    window.addEventListener("resize", updateImages);
    return () => window.removeEventListener("resize", updateImages);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { arrows: false },
      },
    ],
  };

  return (
    <section className="relative lg:h-[400px] h-[450px] overflow-hidden p-2 lg:px-24">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="lg:h-[300px] h-[450px] relative">
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              fill
              className="object-center"
              priority
            />
          </div>
        ))}
      </Slider>
    </section>
  );
}

const NextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} right-[-10px] absolute cursor-pointer z-10 hidden lg:block`}
      style={{
        ...style,
        display: "block",
        background: "#F6A41A",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} left-[-10px] absolute cursor-pointer z-10 hidden sm:block`}
      style={{
        ...style,
        display: "block",
        background: "#F6A41A",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
};
