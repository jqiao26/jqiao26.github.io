import React from "react";
import { Canvas } from "@react-three/fiber";
import Blob from "./blob";
import Navbar from "./navbar";

function About({ setBg, bgColor, fill, changePage }) {
  return (
    <div>
      <Navbar bgColor={bgColor} fill={fill} curPage={"about"} changePage={changePage} />
      <h1 className="text-4xl mt-32 font-poppins font-bold">Justin Qiao</h1>
      <p className="text-2xl m-10 font-poppins text-center">
        I'm a{" "}
        <a
          href="https://uwaterloo.ca/systems-design-engineering/"
          class="text-lightcobaltblue cursor-pointer hover:underline decoration-lightcobaltblue decoration-2"
        >
          Systems Design Engineering
        </a>{" "}
        graduate from the University of Waterloo seeking full-time software
        engineering opportunities!
      </p>
      <div style={{ height: "400px" }}>
        <Canvas className="canvas" dpr={[1, 2]}>
          <Blob toggleBackground={setBg} />
        </Canvas>
      </div>
    </div>
  );
}

export default About;
