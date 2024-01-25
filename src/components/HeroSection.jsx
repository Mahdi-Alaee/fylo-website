function HeroSection() {
  return (
    <section className="max-w-2xl mx-auto text-center w-full px-6 md:max-w-3xl md:mt-16 md:w-max" id="hero">
      {/* section image */}
      <img className="w-full" src="/images/illustration-intro.png" alt="intro" />

      {/* title */}
      <h1 className="font-bold text-3xl leading-10 md:text-4xl my-8">
        All your files in one secure location, assessible anywhere.
      </h1>

      {/* description */}
      <p className="w-full mx-auto max-w-md text-sm md:text-lg md:max-w-xl">
        Fylo stores all your most important files in one secure location. Access
        them wherever you need, share and collaborate with friends family, and
        co-workers.
      </p>

      <a
        className="bg-accentCyan mt-8 inline-block px-16 py-3 rounded-full"
        href="#"
      >
        Get Started
      </a>
    </section>
  );
}

export default HeroSection;
