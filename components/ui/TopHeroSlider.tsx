
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import Slider from "react-slick";

export function TopHeroSlider() {
    const settings = {
        dots: true,
        infinite: true,
        autoplay:true,
        speed: 500,
        autoplaySpeed: 2000,
        slidesToShow: 1, 
        slidesToScroll: 1, 
        nextArrow: <NextArrow />, 
            prevArrow: <PrevArrow />, 
        responsive: [
          { breakpoint: 1280, settings: { slidesToShow: 1 } },  
          { breakpoint: 1024, settings: { slidesToShow: 1 } },  
          { breakpoint: 640, settings: { slidesToShow: 1 } },  
          { breakpoint: 320, settings: { slidesToShow: 1 } }, 
        ],
      };
    
        const images = [
        "/202307122837slider-1.jpg",
        "/blonde-young-woman-using-smartphone-holding-cell-phone-copy-space-for-banner-design-concept-free-photo.jpg",
    "/csm_Apple_iPhone_16_Pro_Concept4_7f42bb9d9e.jpg",
    "/galaxy-s23-ultra-highlights-kv.jpg",
    "/hero_endframe__b3cjfkquc2s2_xlarge.jpg",
    "/heroImg.webp",
    "/iphone-16_overview__fcivqu9d5t6q_og.png"
      ];
return (
    <>
     <section className="relative lg:h-[400px] h-[300px] overflow-hidden px-6 lg:px-24">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="lg:h-[400px] h-[300px] relative">
            <Image src={src} alt={`Slide ${index + 1}`} fill className="object-fill" priority />
          </div>
        ))}
      </Slider>
    </section>
    </>
)
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