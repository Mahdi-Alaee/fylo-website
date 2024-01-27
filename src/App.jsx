import { useEffect, useState } from "react";
import ThemeContext from "./Context/themeContext";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import ProductiveSection from "./components/ProductiveSection";
import Comments from "./components/Comments/Comments";
import EarlyAccessForm from "./components/EarlyAccessForm";

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if(localStorage.getItem('theme') === 'dark'){
      setIsDark(true);
    }
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
            <FeaturesSection />
            <ProductiveSection />
            <Comments />
            <EarlyAccessForm />
          </main>


        <br /><br /><br />
        <br /><br /><br />

        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
