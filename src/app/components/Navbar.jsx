import Hero from '../sections/Hero';
import { IMAGES } from '../utils/images';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div
      className="
        relative
        w-[1920px]
        max-w-full
        bg-[url('/images/main_bg.png')]
        bg-cover
        bg-center
        bg-no-repeat
        mx-auto
      "
    >
      <div className="w-330 max-w-full mx-auto">
        <div className="flex items-center justify-between px-6 md:px-10 lg:px-20 h-26 gap-4 md:gap-6 lg:gap-10 bg-[#121414]">
          <div className="flex flex-col">
            <div className="flex items-center gap-1 md:gap-2 lg:gap-2 text-[16px] md:text-[28px] lg:text-[32px] font-normal">
              <span className="text-[#FFFFFF]">Daryl</span>
              <span className="text-[#F5BD4D]">Smith</span>
            </div>
            <p className="text-[#C2C2C2] text-[10px] md:text-[16px] lg:text-[18px] font-normal">
              UI/UX designer
            </p>
          </div>

          <div className="hidden md:block border border-[#353535] h-12 lg:h-27 mx-[10px] lg:mx-52"></div>
          <div className="flex  gap-2 md:gap-3 lg:gap-2">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center lg:-ml-48">
              <Image
                src={IMAGES.homeIcon}
                alt="star"
                className="w-4 h-4 md:w-6 md:h-6"
              />
            </div>
            <span className="text-white text-[16px] md:text-[20px] lg:text-[24px] font-bold">
              Home
            </span>
          </div>

          <div className="ml-auto flex items-center gap-2 border border-yellow-500 px-3 md:px-4 py-1 md:py-2 rounded-full">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent font-semibold text-[14px] md:text-[16px] lg:text-[16px]">
              Talk To Me
            </span>
          </div>
        </div>
        <Hero />
      </div>
    </div>
  );
};

export default Navbar;
