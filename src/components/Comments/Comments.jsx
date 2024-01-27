import Comment from "./componets/Comment";

function Comments() {
  return (
    <section className="mt-40 container px-6 mx-auto relative grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:gap-x-12">
      {/* image */}
      <img
        className="absolute -top-8 left-6 w-10 md:w-20 md:-top-16 md:left-0"
        src="/images/bg-quotes.png"
        alt="quotes"
      />

      {/* comment 1 */}
      <Comment
        body="Fylo has improved our team productivity by an order of magnitude. Since
        making the switch our team has become a well-oiled collaboration
        machine."
        img="/images/profile-1.jpg"
        name="Satish Patel"
        job="Founder & CEO. Huddle"
      />

      {/* comment 2 */}
      <Comment
        body="Fylo has improved our team productivity by an order of magnitude. Since
      making the switch our team has become a well-oiled collaboration
      machine."
        img="/images/profile-2.jpg"
        name="Bruce McKenzie"
        job="Founder & CEO. Huddle 2"
      />

      {/* comment 3 */}
      <Comment
        body="Fylo has improved our team productivity by an order of magnitude. Since
      making the switch our team has become a well-oiled collaboration
      machine."
        img="/images/profile-3.jpg"
        name="Eva Boyd"
        job="Founder & CEO. Huddle 3"
      />
    </section>
  );
}

export default Comments;