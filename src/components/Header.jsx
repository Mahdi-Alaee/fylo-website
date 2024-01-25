import { useContext, useEffect } from "react";
import ThemeContext from "../Context/themeContext";

function Header() {
  const { isDark, setIsDark } = useContext(ThemeContext);

  console.log(isDark);

  return (
    <header className="flex flex-col gap-y-6 items-center py-10 px-10 md:flex-row md:justify-between">
      {/* icon */}
      <div className="bg-logo-light-mode dark:bg-logo-dark-mode w-48 h-14 bg-no-repeat"></div>

      {/* menu */}
      <ul className="flex gap-x-4 items-center md:gap-x-10">
        {/* item 1 */}
        <li>
          <a className="hover:text-accentCyan" href="#">
            Features
          </a>
        </li>

        {/* item 2 */}
        <li>
          <a className="hover:text-accentCyan" href="#">
            Testimonials
          </a>
        </li>

        {/* item 3 */}
        <button
          onClick={() => setIsDark((prev) => !prev)}
          className="hover:bg-slate-100 hover:dark:bg-slate-700 p-2 flex justify-center rounded-lg items-center"
        >
          {!isDark ? (
            // {/* dark SVG icon */}
            <svg
              id="theme-toggle-dark-icon"
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
            </svg>
          ) : (
            // {/* light SVG icon */}
            <svg
              id="theme-toggle-light-icon"
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          )}
        </button>
      </ul>
    </header>
  );
}

export default Header;
