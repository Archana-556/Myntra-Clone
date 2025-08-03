import React from 'react';
import Slider from "react-slick";
const HomeHeroSec = () => {
 const HeroCarouselImg =[
  {
id: 1,
Image:"https:assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/31/4031994d-9092-4aa7-aea1-f52f2ae5194f1654006594976-Activewear_DK.jpg",
  },
  {
id: 2,
Image:"https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/9be788ff-39a4-4214-99d0-fc97505aae5a1658752545685-USPA_Desk_Banner.jpg",
  },
  {
id: 3,
Image:"https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2025/6/23/c3beb3ae-6895-458f-b1e0-f97becf05c5d1750618551514-Desktop-Banner--2---1-.png",
  },
  {
id: 4,
Image:"https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/179e278f-77ee-44c2-bf39-9f00b0cd08e01658752429301-Handbags_Desk.jpg",
  },
  {
id: 5,
Image:"https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/27/53b4daed-cd2c-4111-86c5-14f737eceb351656325318973-Handbags_Desk.jpg",
  },
 ]
 
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  return (
     <>
    <div className="hero-section overflow-hidden mt-10">
    <Slider {...settings}>
      {HeroCarouselImg.map((item) => (
          <div key={item.id}>
            <div >
              <img
                src={item.Image}
                alt={`Banners ${item.id}`}/>
            </div>
          </div>
        ))}
     
      
    </Slider>
    </div>

    </>
  );
};

export default HomeHeroSec;
