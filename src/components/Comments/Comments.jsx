import Comment from "./componets/Comment";

function Comments() {
  return (
    <section id="comments" className="bg-gray-50 dark:bg-darkBlue pb-44">
      {/* container */}
      <div className="mt-40 pb-52 pt-12 container px-6 mx-auto relative grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:gap-x-12">
        {/* image */}
        <img
          className="absolute top-4 left-6 w-10 md:w-20 md:left-0 md:-top-4"
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
      </div>
    </section>
  );
}

export default Comments;
