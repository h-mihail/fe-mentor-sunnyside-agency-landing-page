import { useMemo } from "preact/hooks";

export const Link = ({ children, accent }) => {
  const [shadowColor, hoverShadowColor] = useMemo(() => {
    if (accent === "yellow") return ["shadow-softYellow", "shadow-yellow"];
    else if (accent === "red") return ["shadow-softRed", "shadow-red"];
  }, [accent]);

  return (
    <a
      class={`cursor-pointer text-heading text-sm font-extrabold font-heading px-2 shadow-underline ${shadowColor} hover:${hoverShadowColor}`}
    >
      {children}
    </a>
  );
};

export const HeaderLink = ({ children }) => {
  return (
    <a
      class="p-3 cursor-pointer text-white content-center text-center w-[120px]
   hover:bg-white hover:text-veryDarkDesaturedBlue hover:rounded-full hover:font-heading hover:font-bold hover:uppercase hover:text-sm"
    >
      {children}
    </a>
  );
};

export const MenuLink = ({ children }) => {
  return (
    <a
      class="p-3 cursor-pointer content-center text-center h-[50px]
 hover:bg-yellow hover:text-veryDarkDesaturedBlue hover:rounded-full hover:font-heading hover:font-bold hover:uppercase hover:text-sm"
    >
      {children}
    </a>
  );
};
