function Footer() {
  return (
    <footer className="bg-darkBlue2">
      {/* container */}
      <div className="container text-white mx-auto pt-12 pb-20 px-5 flex flex-col gap-y-24 md:flex-row md:justify-between md:pb-12">
        {/* left(contact) */}
        <div>
          {/* phone */}
          <div className="flex gap-x-4 items-center">
            {/* icon */}
            <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M17 12.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H1C.4 0 0 .4 0 1c0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1zM16 9h2c0-5-4-9-9-9v2c3.9 0 7 3.1 7 7zm-4 0h2c0-2.8-2.2-5-5-5v2c1.7 0 3 1.3 3 3z"
                fill="#FFF"
                fillRule="evenodd"
              />
            </svg>

            {/* number */}
            <span>+1-543-123-4567</span>
          </div>
          {/* email */}
          <div className="flex gap-x-4 items-center mt-6">
            {/* icon */}
            <svg width="20" height="16" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fillRule="evenodd">
                <path d="M-2-4h24v24H-2z" />
                <path
                  d="M18 0H2C.9 0 0 .9 0 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zm0 14h-2V5.2L10 9 4 5.2V14H2V2h1.2L10 6.2 16.8 2H18v12z"
                  fill="#FFF"
                />
              </g>
            </svg>

            {/* content */}
            <span>example@fylo.com</span>
          </div>
        </div>

        {/* middle(content) */}
        <div className="flex flex-col text-md gap-y-10 md:flex-row md:gap-x-20">
          {/* list 1 */}
          <ul className="flex flex-col gap-y-3">
            {/* item 1 */}
            <li>
              <a href="#">About</a>
            </li>
            {/* item 2 */}
            <li>
              <a href="#">Jobs</a>
            </li>
            {/* item 3 */}
            <li>
              <a href="#">Press</a>
            </li>
            {/* item 4 */}
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
          {/* list 2 */}
          <ul className="flex flex-col gap-y-3">
            {/* item 1 */}
            <li>
              <a href="#">Contact Us</a>
            </li>
            {/* item 2 */}
            <li>
              <a href="#">Terms</a>
            </li>
            {/* item 3 */}
            <li>
              <a href="#">Privacy</a>
            </li>
          </ul>
        </div>

        {/* right(socials) */}
        <ul className="flex justify-center gap-x-3">
          {/* item 1 */}
          <li>
            {/* link icon */}
            <a
              href="#"
              className="flex justify-center items-center group hover:bg-accentCyan p-2 rounded-full bg-darkBlue"
            >
              <svg
                className="group-hover:fill-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="0.5"
                stroke="#ffffff"
                fill="#ffffff"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
              </svg>
            </a>
          </li>
          {/* item 2 */}
          <li>
            {/* link icon */}
            <a
              href="#"
              className="flex justify-center items-center group hover:bg-accentCyan p-2 rounded-full bg-darkBlue"
            >
              <svg
                className="group-hover:fill-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="0.5"
                stroke="#ffffff"
                fill="#ffffff"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
              </svg>
            </a>
          </li>
          {/* item 3 */}
          <li>
            {/* link icon */}
            <a
              href="#"
              className="flex justify-center items-center group hover:bg-accentCyan p-2 rounded-full bg-darkBlue"
            >
              <svg
                className="group-hover:fill-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#ffffff"
                fill="transparent"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <rect x="4" y="4" width="16" height="16" rx="4" />
                <circle cx="12" cy="12" r="3" />
                <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
