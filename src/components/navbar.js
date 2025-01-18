import React from "react";
import MediaQuery, { useMediaQuery } from "react-responsive";
import {
  Drawer,
  DrawerContent,
  DrawerBody,
  DrawerOverlay,
  useDisclosure,
  DrawerCloseButton,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

function Navbar({ bgColor, fill, curPage, changePage }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useMediaQuery({
    query: "(max-width: 1024px)",
  });
  const nonHoverStyle =
    "underline decoration-lightcobaltblue decoration-2 hover:decoration-blue-400";
  const hoverStyle = "hover:decoration-blue-400";

  const navItems = (
    <div
      style={
        isMobile
          ? {
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              width: "100%",
              height: "100%",
              marginTop: "30%",
              alignItems: "center",
            }
          : {
              display: "flex",
              padding: "2rem",
              rowGap: "1.25rem",
              columnGap: "1rem",
              justifyContent: "center",
            }
      }>
      <div class='cursor-pointer' onClick={changePage}>
        <p class={curPage === "about" ? nonHoverStyle : hoverStyle}>about</p>
      </div>
      <div class='cursor-pointer' onClick={changePage}>
        <p class={curPage === "experience" ? nonHoverStyle : hoverStyle}>
          experience
        </p>
      </div>
      <div>
        <a
          target='_blank'
          rel='noreferrer'
          href='https://www.linkedin.com/in/justinqiao/'>
          <p class={curPage === "linkedin" ? nonHoverStyle : hoverStyle}>
            linkedin
          </p>
        </a>
      </div>
      <div>
        <a target='_blank' rel='noreferrer' href='https://github.com/jqiao26'>
          <p class={curPage === "github" ? nonHoverStyle : hoverStyle}>
            github
          </p>
        </a>
      </div>
      <div>
        <a href='mailto:jqiao26@gmail.com'>
          <p class={curPage === "email" ? nonHoverStyle : hoverStyle}>email</p>
        </a>
      </div>
      <div>
        <a
          target='_blank'
          rel='noreferrer'
          href='https://drive.google.com/file/d/1573XZ_z9JV00mfGb__Yj8oMzFFI4kUbL/view?usp=sharing'>
          resume
        </a>
      </div>
    </div>
  );

  return (
    <div style={{ backgroundColor: bgColor, color: fill }}>
      <MediaQuery query='(max-device-width: 1024px)'>
        <nav class='flex py-8'>
          <IconButton
            style={{ background: "transparent" }}
            size={"lg"}
            color={fill}
            icon={<HamburgerIcon />}
            onClick={onOpen}
          />
          <Drawer placement='top' onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent
              style={{
                backgroundColor: bgColor,
                color: fill,
              }}
              className='h-full'>
              <DrawerCloseButton />
              <DrawerBody>{navItems}</DrawerBody>
            </DrawerContent>
          </Drawer>
        </nav>
      </MediaQuery>
      <MediaQuery query='(min-device-width: 1024px)'>{navItems}</MediaQuery>
    </div>
  );
}

export default Navbar;
