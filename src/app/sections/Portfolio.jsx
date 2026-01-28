import SectionHeading from '../components/SectionHeading';

const Portfolio = () => {
  return (
    <div className="relative w-[1920px] max-w-full bg-[url('/images/main_bg.png')] bg-cover bg-center bg-no-repeat mx-auto">
      <div className="w-330 max-w-full mx-auto">
        <div className="flex flex-col px-6 md:px-10 lg:px-20 gap-6 bg-[#171B1A]">
          <SectionHeading title="Contact" align="left">
            <div className="w-full mt-10">
              <section></section>
            </div>
          </SectionHeading>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
