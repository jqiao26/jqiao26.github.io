import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import Blob from "./blob";
import Navbar from "./navbar";

function About({ setBg, bgColor, fill, changePage }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div style={{ cursor: isHovered ? "pointer" : "default" }}>
      <Navbar
        bgColor={bgColor}
        fill={fill}
        curPage={"about"}
        changePage={changePage}
      />
      <h1 className='text-4xl mt-32 font-poppins font-bold'>Justin Qiao</h1>
      <p className='text-2xl mt-4 font-poppins text-center'>
        I'm a software engineer from the{" "}
        <a
          href='https://uwaterloo.ca/systems-design-engineering/'
          target='_blank'
          rel='noreferrer'
          class='text-lightcobaltblue cursor-pointer hover:underline decoration-lightcobaltblue decoration-2'>
          University of Waterloo
        </a>{" "}
        working at{" "}
        <a
          href='https://teleskope.ai'
          target='_blank'
          rel='noreferrer'
          class='text-lightcobaltblue cursor-pointer hover:underline decoration-lightcobaltblue decoration-2'>
          Teleskope
        </a>
      </p>
      <div style={{ height: "400px" }}>
        <Canvas className='canvas' dpr={[1, 2]}>
          <Blob
            isHovered={isHovered}
            setIsHovered={setIsHovered}
            toggleBackground={setBg}
          />
        </Canvas>
      </div>
    </div>
  );
}

export default About;
