import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import { useTheme } from "./ThemeContext";
import Footer from "./components/Footer";
import DarkBackground from "./Assets/darkbackground.jpg";
import Lightbackground from "./Assets/Grey5.jpg";

const Layout = ({ children }) => {
  const { isDark } = useTheme();
  const { textColor } = useTheme();

  // Update CSS variable when textColor changes
  useEffect(() => {
    document.documentElement.style.setProperty("--text-color", textColor);
  }, [textColor]);

  // Replace these with your actual image URLs
  const lightBackground = Lightbackground;
  const darkBackground = DarkBackground;

  return (
    <div
      className="min-h-screen bg-cover bg-center transition-all duration-500 background"
      style={{
        backgroundImage: `url(${isDark ? darkBackground : lightBackground})`,
      }}
    >
      <Navbar />
      <main className="container mx-auto px-4">{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
