import React from 'react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const MainHeader = ({ CarouselData, sliderRef, handleSwipe}) => {
  return (
    <React.Fragment>
      <main className="relative border h-[36rem] w-full overflow-hidden rounded bg-studentshero bg-no-repeat bg-cover bg-center">
        <div className="h-full w-full bg-black opacity-70 absolute"></div>
        <div ref={sliderRef} className="relative z-50 h-full w-full flex">
          {CarouselData.map((data) => (
            <div
              key={data.id}
              className="flex-shrink-0 flex flex-col items-center justify-center text-gray-50 w-full flex-none"
            >
              <h1 className="text-[min(6vw,4rem)] text-center font-bold filter drop-shadow-2xl">
                {data.h1}
              </h1>
              <h1 className="text-[min(4vw,4rem)] text-center font-bold filter drop-shadow-2xl">
                {data.h2}
              </h1>
              <h1 className="text-[min(4vw,2.5rem)] text-center font-bold filter drop-shadow-2xl">
                {data.h3}
              </h1>
              <h1 className="text-[min(4vw,2.5rem)] text-center font-bold filter drop-shadow-2xl">
                {data.h4}
              </h1>

              <Link to={data.button.link} className="relative p-3 px-4 border mt-8 font-semibold rounded">
                {data.button.text}
              </Link>
            </div>
          ))}
        </div>

        <div className="absolute flex justify-between w-full px-4 bottom-[50%] z-50">
          <button
            onClick={() => handleSwipe("left")}
            className="p-1  rounded-full border shadow-inner border-cyan-300"
          >
            <BsChevronLeft className="font-bold text-white" />
          </button>
          <button
            onClick={() => handleSwipe("right")}
            className="p-1  rounded-full border shadow-inner border-cyan-300"
          >
            <BsChevronRight className="font-bold text-white" />
          </button>
        </div>
      </main>
    </React.Fragment>
  );
}

export default MainHeader
