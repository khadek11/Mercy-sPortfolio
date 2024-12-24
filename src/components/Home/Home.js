import React from "react";
import { useTheme } from "../../ThemeContext";
import Particle from "../Particle";
import Home2 from "./Home2";


function Home() {
  const { isDark } = useTheme();

  return (
    <section>
      <div fluid className={`${isDark ? "text-white" :  "text-black"} "home-section"`} id="home">
        <Particle />
        <Home2 />
      </div>
    
    </section>
  );
}

export default Home;
