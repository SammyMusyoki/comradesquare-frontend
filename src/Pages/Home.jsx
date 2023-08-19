import React, { useRef, useState } from 'react'
import CategorySideBar from '../components/HomeComponents/CategorySideBar'
import { gsap } from 'gsap'
import MainHeader from '../components/HomeComponents/MainHeader';
import SubCategories from '../components/HomeComponents/SubCategories';

const CarouselData = [
  {
    id: 1,
    h1: "Embrace boundless",
    h2: "possibilities as you shop with us.",
    h3: "Uncover a world of quality products and elevate",
    h4: "your shopping experience.",
    button: {
      text: "Shop Now",
      link: "/shop",
    },
  },
  {
    id: 2,
    h1: "Join us as a student seller ",
    h2: "and transform your ideas into reality,",
    h3: "building your business while you",
    h4: "pursue your education.",
    button: {
      text: "Sell Now",
      link: "/vendor-dashboard",
    },
  },
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const sliderRef = useRef(null)

  const handleSwipe = (direction) => {
    const newIndex = direction === 'right' ? currentIndex - 1 : currentIndex + 1;
    setCurrentIndex(newIndex)
    animateCarousel(newIndex)
  }

  const animateCarousel = ( index ) => {
      gsap.to(sliderRef.current, {
        x: index === 0? -1000: 0,
        duration: 0.5,
        ease: "power1.inOut",
      })

  }

  return (
    <React.Fragment>
      <header className="w-full relative isolate h-full">
        <div className="mx-auto max-w-[1560px] px-6">
          <div className="overflow-y-scroll scrollbar-hide h-screen">
            <div className="flex gap-4 mb-4">
              <CategorySideBar />
              <MainHeader sliderRef={sliderRef} handleSwipe={handleSwipe} CarouselData={CarouselData}/>
            </div>

            {/* Catogories Component */}
            <SubCategories />
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}

export default Home
