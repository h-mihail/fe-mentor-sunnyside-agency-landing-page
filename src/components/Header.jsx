import { useState } from "preact/hooks";

import { Logo } from "./Logo";
import { Menu } from "./Menu";
import downIcon from "/src/assets/icon-arrow-down.svg";
import { MenuLink } from "./Link";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div class="flex flex-col items-center gap-16 px-4 py-8 h-[70vh] md:h-[70vh] bg-header-mobile md:bg-header-desktop bg-cover bg-no-repeat bg-center">
      <div class="w-full flex justify-between items-center">
        <Logo />
        <Menu toggleMenu={toggleMenu} />
      </div>
      <h1 class="text-white text-4xl md:text-5xl font-extrabold font-heading text-center tracking-outerSpace">
        WE ARE CREATIVES
      </h1>
      <figure>
        <img src={downIcon} />
      </figure>
      {
        <div
          class={`md:hidden 
            flex flex-col justify-center items-center 
            bg-white
            gap-8 p-8 
            absolute top-[100px] w-[90vw] 
            ${showMenu ? "opacity-100" : "opacity-0"}
            transition duration-500 ease-in-out`}
        >
          <MenuLink>About</MenuLink>
          <MenuLink>Services</MenuLink>
          <MenuLink>Projects</MenuLink>
          <MenuLink>Contact</MenuLink>
        </div>
      }
    </div>
  );
};
