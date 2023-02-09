import React from "react";
import "./Cursor/Cursor.css";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import GlobalStyle from "./globalStyles";

export default function App() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  console.log(mousePosition);

  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      //   console.log(e);
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "pink",
      mixBlendMode: "difference",
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");
  return (
    <div className="App">
      {/* <h1 onMouseEnter={textEnter} onMouseLeave={textLeave} className="title">
        Jayesh Bhushan
      </h1> */}
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
      />
      <GlobalStyle />
      App File
    </div>
  );
}

// export default App;
