import SectionHeading from '../components/SectionHeading';

const Pricing = () => {
  const pricingData = [
    {
      id: 1,
      main_heading: 'Intro',
      Price: '$29',
      month: 'month',
      titles: ['Interface Design', 'Front-end Code', 'Back-end Development'],
      block_title: [
        'Search Engine Optimization',
        'Awesome Support',
        'Responsive site',
        'Easy in use',
        'Useful site',
        'Speedy web',
      ],
    },
    {
      id: 2,
      main_heading: 'Base',
      Price: '$49',
      month: 'month',
      titles: [
        'Interface Design',
        'Front-end Code',
        'Back-end Development',
        'Search Engine Optimization',
      ],
      block_title: [
        'Awesome Support',
        'Easy in use',
        'Useful site',
        'Speedy web',
      ],
    },
    {
      id: 3,
      main_heading: 'Popular',
      Price: '$99',
      month: 'month',
      titles: [
        'Interface Design',
        'Front-end Code',
        'Back-end Development',
        'Search Engine Optimization',
        'Responsive site',
      ],
      block_title: ['Easy in use', 'Useful site', 'Speedy web'],
    },
    {
      id: 4,
      main_heading: 'Enterprise',
      Price: '$199',
      month: 'month',
      titles: [
        'Interface Design',
        'Back-end Development',
        'Search Engine Optimization',
        'Awesome Support',
        'Easy in use',
        'Useful site',
        'Speedy web',
      ],
      block_title: [],
    },
  ];

  return (
    <div className="w-[1920px] max-w-full bg-[url('/images/main_bg.png')] bg-cover bg-center bg-no-repeat mx-auto">
      <div className="max-w-full bg-[#171B1A] w-330 mx-auto px-4 md:px-10 lg:px-20 py-10">
        <SectionHeading title="Pricing" align="left">
          <div className="w-full mt-10">
            <section>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                {pricingData.map((plan, idx) => (
                  <div
                    key={plan.id}
                    className="w-full lg:w-[332px] transition-shadow bg-black pb-10 flex flex-col justify-between mx-auto rounded-lg shadow hover:shadow-lg"
                  >
                    <div className="">
                      <div className="lg:bg-[#F5BD4D4D] lg:w-32 lg:h-12 flex items-center justify-center lg:rounded-r-full lg:mt-10 mt-2 mx-auto">
                        <p className="text-white lg:text-xl text-[44px] font-semibold whitespace-nowrap  ">
                          {plan.main_heading}
                        </p>
                      </div>

                      <div className="px-6 mt-6 text-white">
                        <div className="mb-4">
                          <span className="text-[48px] font-bold">
                            {plan.Price}
                          </span>
                          <span className="ml-1">/ {plan.month}</span>
                        </div>

                        <div className="bg-[#121414] text-white p-3 rounded-lg">
                          <ul className="space-y-2">
                            {plan.titles.map((title, idx) => (
                              <li key={idx} className="text-[14px]">
                                {title}
                              </li>
                            ))}
                          </ul>

                          <div className="flex flex-col mt-2">
                            {plan.block_title.map((block, index) => (
                              <p
                                key={index}
                                className="text-[#979797] text-[14px] line-through"
                              >
                                {block}
                              </p>
                            ))}
                          </div>
                        </div>

                        <div className="mt-6 w-full">
                          {idx === 0 ? (
                            <button className="w-full bg-red-600 text-white font-semibold py-3 px-5 rounded-lg">
                              Get Started
                            </button>
                          ) : (
                            <div className="w-full rounded-lg p-[2px] bg-gradient-to-r from-[#F5BD4D] to-[#F89222] mt-4">
                              <button className="w-full bg-black text-transparent font-semibold py-3 px-5 rounded-lg text-center">
                                <span className="bg-gradient-to-r from-[#F5BD4D] to-[#F89222] bg-clip-text text-transparent">
                                  Get Started
                                </span>
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </SectionHeading>
      </div>
    </div>
  );
};

export default Pricing;
