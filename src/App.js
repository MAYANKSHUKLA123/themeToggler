import React, { useState } from "react";
import ThemeContext from "./Context/themeContext";
import Header from "./header";
import HeaderSection from "./Component/HeroSection";

const App = () => {
  const themeHook = useState("light");
  return (
    <ThemeContext.Provider value={themeHook}>
      <div>
        <Header />
        <HeaderSection />
      </div>
    </ThemeContext.Provider>
  );
};
export default App;
