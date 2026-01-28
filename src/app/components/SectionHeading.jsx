import React from 'react';

const SectionHeading = ({ title, align = 'left', children }) => {
  return (
    <div className="lg:ml-[40%] mx-auto">
      <section className="mb-16 lg:mb-24">
        <header
          className={`mb-6 ${align === 'center' ? 'text-center' : 'text-left'}`}
        >
          <h2 className="text-white font-bold text-[22px] lg:text-[48px] leading-tight lg:mt-10">
            {title}
          </h2>
        </header>

        <div className={align === 'center' ? 'text-center' : 'text-left'}>
          {children}
        </div>
      </section>
    </div>
  );
};

export default SectionHeading;
