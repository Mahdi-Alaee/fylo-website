import { useEffect, useState } from "react";
import ThemeContext from "./Context/themeContext";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";

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
        setIsDark,
      }}
    >
      <div className={`${isDark ? "dark" : ""}`}>
        <div className="min-h-screen bg-inherit font-opensans dark:text-white dark:bg-darkBlue">
          <Header />

          <main>
            <HeroSection />
          </main>
        <br /><br /><br />
        <br /><br /><br />

        </div>
        test for see online change and pull changes
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
