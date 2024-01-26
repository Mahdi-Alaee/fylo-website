function ProductiveSection() {
  return (
    <section className="mt-16">
      {/* container */}
      <div className="container mx-auto px-6 flex flex-col gap-y-10 md:flex-row 
      md:justify-between md:gap-x-16 md:items-center">
        {/* section image */}
        <img
        className="md:w-1/2"
          src="/images/illustration-stay-productive.png"
          alt="illustration stay productive"
        />

        {/* section content */}
        <div className="flex flex-col gap-y-4 md:w-1/2">
          {/* title */}
          <h2 className="text-xl font-bold md:text-4xl">Stay productive, wherever you are</h2>

          {/* paragraph 1 */}
          <p className="md:text-lg">
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>

          {/* paragraph 2 */}
          <p className="md:text-lg">
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.{" "}
          </p>

          {/* how fylo works Link */}
          <a className="text-accentCyan border-b w-max border-accentCyan flex items-start gap-x-2" href="#">
            {/* text */}
            <span>See how Fylo works</span>
            {/* icon */}
            <div className="bg-accentCyan flex justify-center items-center w-min rounded-full">
              <svg
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <defs>
                  <circle id="b" cx="6" cy="6" r="6" />
                  <filter
                    x="-25%"
                    y="-25%"
                    width="150%"
                    height="150%"
                    filterUnits="objectBoundingBox"
                    id="a"
                  >
                    <feOffset in="SourceAlpha" result="shadowOffsetOuter1" />
                    <feGaussianBlur
                      stdDeviation="1"
                      in="shadowOffsetOuter1"
                      result="shadowBlurOuter1"
                    />
                    <feColorMatrix
                      values="0 0 0 0 0.384313725 0 0 0 0 0.878431373 0 0 0 0 0.850980392 0 0 0 0.811141304 0"
                      in="shadowBlurOuter1"
                    />
                  </filter>
                </defs>
                <g fill="none" fill-rule="evenodd">
                  <g transform="translate(2 2)">
                    <use fill="#000" filter="url(#a)" xlink:href="#b" />
                    <use fill="#62E0D9" xlink:href="#b" />
                  </g>
                  <path
                    d="M8.582 6l-.363.35 1.452 1.4H5.333v.5h4.338L8.22 9.65l.363.35 2.074-2z"
                    fill="#1B2330"
                  />
                </g>
              </svg>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProductiveSection;
