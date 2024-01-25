import { useEffect, useState } from "react";
import ThemeContext from "./Context/themeContext";
import Header from "./components/Header";

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(true);
  }, []);

  return (
    // app container
    <ThemeContext.Provider
      value={{
        isDark,
      }}
    >
      <div className="">
        <div className="min-h-screen bg-inherit font-opensans dark:text-white dark:bg-darkBlue">
          <Header />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
