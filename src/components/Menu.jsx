import { Menu as MenuIcon } from "react-feather";

import { HeaderLink } from "./Link";

export const Menu = ({ toggleMenu }) => {
  return (
    <div>
      <div class="hidden md:flex md:flex-row">
        <HeaderLink>About</HeaderLink>
        <HeaderLink>Services</HeaderLink>
        <HeaderLink>Projects</HeaderLink>
        <HeaderLink>Contact</HeaderLink>
      </div>
      <div class="cursor-pointer md:hidden" onClick={toggleMenu}>
        <figure>
          <MenuIcon size="24px" color="white" />
        </figure>
      </div>
    </div>
  );
};
