function Footer() {
  return (
    <footer>
      {/* left(contact) */}
      <div>
        {/* phone */}
        <div>
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
        <div>
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
      <div>
        {/* list 1 */}
        <ul>
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
        <ul>
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
      <ul>
        {/* item 1 */}
        <li>
          {/* link icon */}
          <a href="#">
            <svg
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
          <a href="#">
            <svg
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
        {/* item 3 */}
        <li>
          {/* link icon */}
          <a href="#">
            <svg
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
      </ul>
    </footer>
  );
}

export default Footer;
