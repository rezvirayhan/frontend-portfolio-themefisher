import SectionHeading from '../components/SectionHeading';

const Footer = () => {
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
        <div className="flex flex-col px-6 md:px-10 lg:px-20 gap-6 bg-[#171B1A]">
          <SectionHeading title="Resume" align="left">
            <div className="mb-4 w-full">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Nostrum cum, quos voluptatibu Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Nostrum cum, quos voluptatibu
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Nostrum cum, quos voluptatibu Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Nostrum cum, quos voluptatibu
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Nostrum cum, quos voluptatibu Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Nostrum cum, quos voluptatibu
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Nostrum cum, quos voluptatibu Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Nostrum cum, quos voluptatibus
                facilis aliquid dolorem et nemo quo ad.
              </p>
            </div>
          </SectionHeading>
        </div>
      </div>
    </div>
  );
};

export default Footer;
