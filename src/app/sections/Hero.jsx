import Image from 'next/image';
import { IMAGES } from '../utils/images';

const Hero = () => {
  return (
    <header className="bg-[#171B1A]  w-full relative">
      <div className="flex">
        <aside
          className="lg:w-22.5 hidden lg:flex flex-col bg-[url('/images/leftsidebar_bg.png')] bg-cover bg-center lg:mt-20 lg:h-120 "
          aria-label="Primary navigation"
        >
          <nav
            className="flex flex-col items-center space-y-10"
            role="navigation"
          >
            {[
              { icon: IMAGES.homeIcon, label: 'Home' },
              { icon: IMAGES.aboutIcon, label: 'About' },
              { icon: IMAGES.portfolioIcon, label: 'Portfolio' },
              { icon: IMAGES.blogIcon, label: 'Blog' },
              { icon: IMAGES.contactIcon, label: 'Contact' },
            ].map(({ icon, label }) => (
              <button
                key={label}
                aria-label={label}
                className="cursor-pointer hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-[#F5BD4D]"
              >
                <Image
                  src={icon}
                  alt={`${label} icon`}
                  width={32}
                  height={32}
                />
              </button>
            ))}
          </nav>
        </aside>

        <main className="flex-1">
          <section className="lg:flex lg:gap-12" aria-labelledby="hero-heading">
            <section className="bg-black lg:w-[40%] lg:h-[560px] flex flex-col items-center justify-center space-y-4 pb-2">
              <figure>
                <Image
                  src={IMAGES.aboutme}
                  alt="Portrait of creative developer and UI/UX designer"
                  width={350}
                  height={350}
                  priority
                />
                <figcaption className="sr-only">
                  Profile image of the developer
                </figcaption>
              </figure>

              <nav aria-label="Social media links">
                <ul className="flex gap-3">
                  {[
                    { icon: IMAGES.facebookIcon, label: 'Facebook' },
                    { icon: IMAGES.linkedinIcon, label: 'LinkedIn' },
                    { icon: IMAGES.pinterestIcon, label: 'Pinterest' },
                    { icon: IMAGES.instagramIcon, label: 'Instagram' },
                    { icon: IMAGES.twitterIcon, label: 'Twitter' },
                  ].map(({ icon, label }) => (
                    <li key={label}>
                      <a
                        href="#"
                        aria-label={`Visit ${label} profile`}
                        className="bg-[#121414] w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 focus:ring-2 focus:ring-[#F5BD4D]"
                      >
                        <Image
                          src={icon}
                          alt={`${label} icon`}
                          width={16}
                          height={16}
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </section>

            <section className="lg:w-192.5 lg:mt-10 p-4">
              <p className="text-[#F5BD4D] font-bold text-center lg:text-left">
                Introduction
              </p>

              <h1
                id="hero-heading"
                className="text-white font-bold lg:text-[48px] text-[22px] text-center lg:text-left"
              >
                Creative Developer & UI/UX Design Expert
              </h1>

              <ul className="flex gap-3 justify-center lg:justify-start font-bold text-[16px] lg:mt-0 mt-5">
                <li>24 years</li>
                <li aria-hidden="true">/</li>
                <li>Robert Smith</li>
                <li aria-hidden="true">/</li>
                <li>London, UK</li>
              </ul>

              <p className="lg:mt-10 mt-5 text-[16px] font-medium text-white lg:pr-10">
                Prolific, full stack web developer with a passion for metrics
                and beating former "best-yets. Prototyped 25 new product
                features per year for Flexor, Inc. Decreased rework by 22% and
                costs by 15%. Consistently receive high user experience scores
                for all web development projects, including a 55% increase for
                Flexor, Inc. Passionate about building world class web
                applications. One of my sites received a 2020 Webby for Best
                Navigation and Structure.
              </p>

              <div className="mt-8 flex justify-center lg:justify-start">
                <a
                  href="/cv.pdf"
                  download
                  className="bg-gradient-to-r from-[#F5BD4D] to-[#F89222] flex items-center gap-2 px-10 py-2 rounded-full hover:opacity-90 focus:ring-2 focus:ring-white"
                  aria-label="Download CV"
                >
                  <span className="text-white font-semibold">Download CV</span>
                  <Image
                    src={IMAGES.downloadIcon}
                    alt=""
                    width={20}
                    height={20}
                    aria-hidden
                  />
                </a>
              </div>
            </section>
          </section>
        </main>

        <aside
          className="w-22.5 hidden lg:flex flex-col bg-[url('/images/righttsidebar_bg.png')] bg-cover bg-center mt-20  "
          aria-label="Language and credits"
        >
          <p className="[writing-mode:vertical-rl] text-white pr-8 -mt-16 text-sm">
            © Design by Themefisher · Developed by GetHugoThemes
          </p>

          <nav className="flex flex-col items-center space-y-5 mt-10">
            <button
              aria-label="Switch language to French"
              className="bg-[#343434] w-10 h-10 rounded-full text-white text-xs font-bold"
            >
              FR
            </button>
            <button
              aria-label="Switch language to English"
              className="bg-gradient-to-r from-[#F5BD4D] to-[#F89222] w-10 h-10 rounded-full text-white text-xs font-bold"
            >
              EN
            </button>
          </nav>
        </aside>
      </div>
    </header>
  );
};

export default Hero;
