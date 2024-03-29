import Button from "./Button";

function HeroSection() {
  return (
    <section
      className="text-center w-full px-6 
    dark:bg-curvy-dark-mode bg-no-repeat bg-contain bg-bottom
    bg-curvy-light-mode pb-52 md:mt-16 "
      id="hero"
    >
      {/* container */}
      <div className="max-w-2xl mx-auto lg:max-w-3xl lg:w-max">
        {/* section image */}
        <img
          className="w-full mb-14 mt-2"
          src="/images/illustration-intro.png"
          alt="intro"
        />

        {/* title */}
        <h1 className="font-bold text-3xl leading-relaxed my-8 md:text-4xl">
          All your files in one secure location, assessible anywhere.
        </h1>

        {/* description */}
        <p className="w-full mx-auto max-w-md text-sm md:text-lg md:max-w-xl">
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </p>

        <Button
          className="btn mt-8 px-16 py-3"
          href="#"
        >
          Get Started
        </Button>
      </div>
    </section>
  );
}

export default HeroSection;
