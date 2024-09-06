import React from "react";

function Navbar({ bgColor, fill, curPage, changePage }) {
  const nonHoverStyle = "underline decoration-lightcobaltblue decoration-2 hover:decoration-blue-400";
  const hoverStyle = "hover:decoration-blue-400";

  return (
    <div style={{ backgroundColor: bgColor, color: fill }}>
      <nav class="flex p-8 gap-x-5 gap-y-4 justify-center">
        <div class="cursor-pointer" onClick={changePage}>
          <p class={curPage === "about" ? nonHoverStyle: hoverStyle}>
            about
          </p>
        </div>
        <div class="cursor-pointer" onClick={changePage}>
          <p class={curPage === "experience" ? nonHoverStyle: hoverStyle}>
            experience
          </p>
        </div>
        <div>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/justinqiao/">
            <p class={curPage === "linkedin" ? nonHoverStyle: hoverStyle}>
              linkedin
            </p>
          </a>
        </div>
        <div>
          <a target="_blank" rel="noreferrer" href="https://github.com/jqiao26">
            <p class={curPage === "github" ? nonHoverStyle: hoverStyle}> 
              github
            </p>
          </a>
        </div>
        <div>
          <a href="mailto:jqiao26@gmail.com">
            <p class={curPage === "email" ? nonHoverStyle: hoverStyle}>
              email
            </p>
          </a>
        </div>
        <div>
          <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1573XZ_z9JV00mfGb__Yj8oMzFFI4kUbL/view?usp=sharing">
            resume
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
