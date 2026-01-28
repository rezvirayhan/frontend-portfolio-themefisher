const BackgroundWrapper = ({ children }) => {
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
      <div className="absolute"></div>

      <div className="relative z-10 w-330 max-w-full mx-auto bg-[#171B1A] ">
        {children}
      </div>
    </div>
  );
};

export default BackgroundWrapper;
