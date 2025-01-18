import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import About from "./components/about";
import Experience from "./components/experience";
import MediaQuery from "react-responsive";
import { useEffect, useState } from "react";

function App() {
  const [backgroundInfo, setBackgroundInfo] = useState({
    background: "#faf9f6",
    fill: "#202020",
  });
  const [isAboutPage, setIsAboutPage] = useState(true);

  function changePage() {
    setIsAboutPage(!isAboutPage);
  }

  useEffect(() => {
    document.body.style.backgroundColor = backgroundInfo.background;
  }, [backgroundInfo]);

  const page = isAboutPage ? (
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
  );

  return (
    <ChakraProvider>
      <div
        className='app'
        style={{
          backgroundColor: backgroundInfo.background,
          color: backgroundInfo.fill,
        }}>
        <MediaQuery query='(max-device-width: 1024px)'>
          <div className='wrapper-mobile'>{page}</div>
        </MediaQuery>
        <MediaQuery query='(min-device-width: 1024px)'>
          <div className='wrapper'>{page}</div>
        </MediaQuery>
      </div>
    </ChakraProvider>
  );
}

export default App;
