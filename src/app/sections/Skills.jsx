import SectionHeading from '../components/SectionHeading';

const Skills = () => {
  const progresses = [
    { name: 'UI/UX Design', percentage: 95 },
    { name: 'Photography', percentage: 90 },
    { name: 'Creativity', percentage: 80 },
    { name: 'Team Work', percentage: 95 },
    { name: 'Web Design', percentage: 95 },
  ];

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
          <SectionHeading title="Skills" align="left">
            <div className="mb-4 w-full">
              <div className="flex flex-col   ">
                {progresses.map((progress, idx) => {
                  const { name, percentage } = progress;
                  return (
                    <div key={idx} className=" ">
                      <div className="flex justify-between mb-2">
                        <span className="lg:text-[24px] text-[20px] font-medium text-white">
                          {name}
                        </span>
                        <span className="text-[20px] font-medium text-[#F5BD4D] lg:text-[20px] ">
                          {percentage}%
                        </span>
                      </div>

                      <div className="lg:w-[600px] w-[300px] h-2 rounded-full overflow-hidden flex">
                        <div
                          className="h-6 bg-[#F5BD4D]"
                          style={{ width: `${percentage}%` }}
                        ></div>
                        <div
                          className="h-6 bg-[#F5BD4D]/30"
                          style={{ width: `${100 - percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </SectionHeading>
        </div>
      </div>
    </div>
  );
};

export default Skills;
