import Button from "./Button";

function EarlyAccessForm() {
  return (
    <section>
      {/* title */}
      <h4>Get early access today</h4>
      {/* description */}
      <p>
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
      </p>

      {/* form */}
      <form>
        <input type="text" placeholder="Email@example.com" />
        <Button className='btn' type="submit">Get Started For Free</Button>
      </form>
    </section>
  );
}

export default EarlyAccessForm;
