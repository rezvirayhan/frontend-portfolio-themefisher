import SectionHeading from '../components/SectionHeading';
import Image from 'next/image';
import { IMAGES } from '../utils/images';

const Resume = () => {
  return (
    <div
      className="
        relative
        w-[1920px]
        max-w-full
        bg-[url('/images/resume_bg.png')]
        bg-cover
        bg-center
        bg-no-repeat
        mx-auto
      "
    >
      <div className="w-330 max-w-full mx-auto">
        <div className="flex flex-col px-6 md:px-10 lg:px-20 gap-6 bg-[#171B1A]">
          <SectionHeading title="Resume" align="left">
            <div className="mb-4 w-full">
              <div>
                <div className="flex  items-center gap-3">
                  <div className="bg-[#333333] w-12 h-12 rounded-lg flex items-center justify-center">
                    <Image
                      src={IMAGES.EducationIcon}
                      alt="Education Icon"
                      className="w-6 h-6"
                    />
                  </div>

                  <h2 className="text-white text-center text-[20px] lg:text-[24px] font-bold">
                    Education
                  </h2>
                </div>
                <div className="lg:mt-10 mt-5">
                  <div className="absolute">
                    <Image
                      src={IMAGES.leftSide_Education}
                      alt="Education Icon"
                      className="w-6 md:h-[500px] h-[682px] -mt-2"
                    />
                  </div>
                  <div>
                    <div>
                      <h3 className="border-2 lg:w-[14%] rounded-lg ml-8  border-white/20 p-1 text-[14px] font-bold">
                        2016-2020
                      </h3>
                    </div>
                    <div className=" ml-8 border-1 p-5 border-white/20 bg-[#121414] mt-3 rounded-lg">
                      <h2 className="text-18px font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F5BD4D] to-[#F89222]">
                        Harvard University
                      </h2>
                      <h3 className="text-[#8F8F8F] text-[12px] mt-2">
                        B.A. and M.S., Computer Science
                      </h3>
                      <div className="lg:w-[605px] mt-4 h-[1px] bg-[#222222]"></div>
                      <p className="mt-3 text-[16px] font-normal">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Ab aut commodi earum eligendi ipsum, laborum
                        maiores mollitia, optio quam quis rerum totam voluptas.
                      </p>
                    </div>
                  </div>
                  <div className="mt-14">
                    <div>
                      <h3 className="border-2 lg:w-[14%] rounded-lg ml-8  border-white/20 p-1 text-[14px] font-bold">
                        2014-2016
                      </h3>
                    </div>
                    <div className=" ml-8 border-1 p-5 border-white/20 bg-[#121414] mt-3 rounded-lg">
                      <h2 className="text-18px font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F5BD4D] to-[#F89222]">
                        Harvard University
                      </h2>
                      <h3 className="text-[#8F8F8F] text-[12px] mt-2">
                        Bachelor Degree
                      </h3>
                      <div className="lg:w-[605px] mt-4 h-[1px] bg-[#222222]"></div>
                      <p className="mt-3 text-[16px] font-normal">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Ab aut commodi earum eligendi ipsum, laborum
                        maiores mollitia, optio quam quis rerum totam voluptas.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-4 w-full lg:mt-20 mt-10">
              <div>
                <div className="flex  items-center gap-3">
                  <div className="bg-[#333333] w-12 h-12 rounded-lg flex items-center justify-center">
                    <Image
                      src={IMAGES.work_hestoryIcon}
                      alt="Education Icon"
                      className="w-12 h-12"
                    />
                  </div>

                  <h2 className="text-white text-center text-[20px] lg:text-[24px] font-bold">
                    Work History
                  </h2>
                </div>
                <div className="lg:mt-10 mt-5">
                  <div className="absolute">
                    <Image
                      src={IMAGES.leftSide_Education}
                      alt="Education Icon"
                      className="w-6 md:h-[500px] h-[682px] -mt-2"
                    />
                  </div>
                  <div>
                    <div>
                      <h3 className="border-2 lg:w-[14%] rounded-lg ml-8  border-white/20 p-1 text-[14px] font-bold">
                        2016-2022
                      </h3>
                    </div>
                    <div className=" ml-8 border-1 p-5 border-white/20 bg-[#121414] mt-3 rounded-lg">
                      <h2 className="text-18px font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F5BD4D] to-[#F89222]">
                        UI/UX design
                      </h2>
                      <h3 className="text-[#8F8F8F] text-[12px] mt-2">
                        Web site design
                      </h3>
                      <div className="lg:w-[605px] mt-4 h-[1px] bg-[#222222]"></div>
                      <p className="mt-3 text-[16px] font-normal">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Ab aut commodi earum eligendi ipsum, laborum
                        maiores mollitia, optio quam quis rerum totam voluptas.
                      </p>
                    </div>
                  </div>
                  <div className="mt-14">
                    <div>
                      <h3 className="border-2 lg:w-[14%] rounded-lg ml-8  border-white/20 p-1 text-[14px] font-bold">
                        2012-2016
                      </h3>
                    </div>
                    <div className=" ml-8 border-1 p-5 border-white/20 bg-[#121414] mt-3 rounded-lg">
                      <h2 className="text-18px font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F5BD4D] to-[#F89222]">
                        Junior Web designers
                      </h2>
                      <h3 className="text-[#8F8F8F] text-[12px] mt-2">
                        Product designer
                      </h3>
                      <div className="lg:w-[605px] mt-4 h-[1px] bg-[#222222]"></div>
                      <p className="mt-3 text-[16px] font-normal">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Ab aut commodi earum eligendi ipsum, laborum
                        maiores mollitia, optio quam quis rerum totam voluptas.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SectionHeading>
        </div>
      </div>
    </div>
  );
};

export default Resume;
