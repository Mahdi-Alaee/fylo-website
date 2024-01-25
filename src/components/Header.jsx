import { useContext, useEffect } from "react";
import ThemeContext from "../Context/themeContext";

function Header() {
  const { isDark } = useContext(ThemeContext);

  console.log(isDark);

  return (
    <header className="flex justify-between py-14">
      {/* icon */}
      <div className="bg-logo-light-mode dark:bg-logo-dark-mode"></div>
    </header>
  );
}

export default Header;
