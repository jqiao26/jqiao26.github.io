import "./App.css";
import About from "./components/about";
import Experience from "./components/experience";
import { useState } from "react";

function App() {
  const [backgroundInfo, setBackgroundInfo] = useState({
    background: "#faf9f6",
    fill: "#202020",
  });
  const [isAboutPage, setIsAboutPage] = useState(true);

  function changePage() {
    setIsAboutPage(!isAboutPage);
  }

  return (
    <div className="app" style={{ backgroundColor: backgroundInfo.background }}>
      <div className="wrapper" style={{ color: backgroundInfo.fill }}>
        {isAboutPage ? (
          <About
            setBg={setBackgroundInfo}
            bgColor={backgroundInfo.background}
            fill={backgroundInfo.fill}
            changePage={changePage}
          />
        ) : (
          <Experience
            bgColor={backgroundInfo.background}
            fill={backgroundInfo.fill}
            changePage={changePage}
          />
        )}
      </div>
    </div>
  );
}

export default App;
