import SectionHeading from '../components/SectionHeading';

const Footer = () => {
  return (
    <div className="relative w-[1920px] max-w-full bg-[url('/images/main_bg.png')] bg-cover bg-center bg-no-repeat mx-auto">
      <div className="w-330 max-w-full mx-auto">
        <div className="flex flex-col px-6 md:px-10 lg:px-20 gap-6 bg-[#171B1A]">
          <SectionHeading title="Contact" align="left">
            <div className="w-full mt-10">
              <section>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                  <div className="flex flex-col mb-1">
                    <label
                      className="text-white mb-1 font-normal text-[20px]"
                      htmlFor="firstName"
                    >
                      First Name
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      className="bg-black border-[1px] border-yellow-200 focus:border-2 focus:border-yellow-500 text-white px-4 py-2 rounded outline-none w-[330px]"
                    />
                  </div>
                  <div className="flex flex-col mb-1">
                    <label
                      className="text-white mb-1 font-normal text-[20px]"
                      htmlFor="LastName"
                    >
                      Last Name
                    </label>
                    <input
                      id="LastName"
                      type="text"
                      className="bg-black border-[1px] border-yellow-200 focus:border-2 focus:border-yellow-500 text-white px-4 py-2 rounded outline-none w-[330px]"
                    />
                  </div>
                  <div className="flex flex-col mb-1">
                    <label
                      className="text-white mb-1 font-normal text-[20px]"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="text"
                      className="bg-black border-[1px] border-yellow-200 focus:border-2 focus:border-yellow-500 text-white px-4 py-2 rounded outline-none w-[330px]"
                    />
                  </div>
                  <div className="flex flex-col mb-1">
                    <label
                      className="text-white mb-1 font-normal text-[20px]"
                      htmlFor="phone"
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="text"
                      className="bg-black border-[1px] border-yellow-200 focus:border-2 focus:border-yellow-500 text-white px-4 py-2 rounded outline-none w-[330px]"
                    />
                  </div>
                </div>
                <div className="flex flex-col mb-1 mt-10">
                  <label
                    className="text-white mb-1 font-normal text-[20px]"
                    htmlFor="phone"
                  >
                    Phone
                  </label>
                  <textarea
                    rows={5}
                    id="phone"
                    type="text"
                    className="bg-black border-[1px] border-yellow-200 focus:border-2 focus:border-yellow-500 text-white px-4 py-2 rounded outline-none lg:w-[690px]"
                  />
                </div>
                <button className="w-full bg-yellow-500 mt-8 font-bold px-6 py-3 rounded-lg">
                  Click Me
                </button>
              </section>
            </div>
          </SectionHeading>
        </div>
      </div>
    </div>
  );
};

export default Footer;
