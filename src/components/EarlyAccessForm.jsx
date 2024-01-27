import Button from "./Button";

function EarlyAccessForm() {
  return (
    <section className="bg-darkBlue1 max-w-4xl rounded-lg px-6 mx-6 mt-44 py-10 flex flex-col gap-y-6 items-center text-center -mb-24 relative z-10 md:mx-auto md:px-20">
      {/* title */}
      <h4 className="font-bold text-2xl tracking-wide">Get early access today</h4>
      {/* description */}
      <p className="text-sm">
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
      </p>

      {/* form */}
      <form className="flex flex-col w-full gap-y-6 md:flex-row md:justify-center md:gap-x-6 ">
        <input className="pl-8 py-3 rounded-full outline-none text-black md:w-8/12" type="text" placeholder="Email@example.com" />
        <Button className='btn mt-0 py-3 md:w-4/12' type="submit">Get Started For Free</Button>
      </form>
    </section>
  );
}

export default EarlyAccessForm;
