import React from "react";

function Navbar({ bgColor, fill, curPage, changePage }) {
  return (
    <div style={{ backgroundColor: bgColor, color: fill }}>
      <nav class="flex p-8 gap-x-5 gap-y-4 justify-center">
        <div class="cursor-pointer" onClick={changePage}>
          <p
            class={
              curPage === "about"
                ? "underline decoration-lightcobaltblue decoration-2 hover:decoration-blue-400"
                : "hover:decoration-blue-400"
            }
          >
            about
          </p>
        </div>
        <div class="cursor-pointer" onClick={changePage}>
          <p
            class={
              curPage === "experience"
                ? "underline decoration-lightcobaltblue decoration-2 hover:decoration-blue-400"
                : "hover:decoration-blue-400"
            }
          >
            experience
          </p>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/justinqiao/">
            <p
              class={
                curPage === "linkedin"
                  ? "underline decoration-lightcobaltblue decoration-2 hover:decoration-blue-400"
                  : "hover:decoration-blue-400"
              }
            >
              linkedin
            </p>
          </a>
        </div>
        <div>
          <a href="https://github.com/jqiao26">
            <p
              class={
                curPage === "github"
                  ? "underline decoration-lightcobaltblue decoration-2 hover:decoration-blue-400"
                  : "hover:decoration-blue-400"
              }
            >
              github
            </p>
          </a>
        </div>
        <div>
          <a href="mailto:jqiao26@gmail.com">
            <p
              class={
                curPage === "email"
                  ? "underline decoration-lightcobaltblue decoration-2 hover:decoration-blue-400"
                  : "hover:decoration-blue-400"
              }
            >
              email
            </p>
          </a>
        </div>
        <div>
          <a href="https://drive.google.com/file/d/1zgxhFYRiWIThbwgoMH8rNavcjHXmCyvz/view?usp=sharing">resume</a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
