import { Link } from "./Link";

export const LinkCard = ({
  bg = "bg-white",
  title,
  text,
  accent = "yellow",
}) => {
  return (
    <div
      class={`flex-1
        h-[120vw] md:h-[42vw]
        bg-cover bg-no-repeat bg-center ${bg}`}
    >
      <div class="flex flex-col justify-center items-center md:items-start p-8 sm:p-16 md:p-16 gap-8">
        {title && (
          <h2 class="text-heading text-center md:text-start text-3xl md:text-4xl font-black font-heading">
            {title}
          </h2>
        )}
        {text && <p class="text-center md:text-start">{text}</p>}
        {(title || text) && <Link accent={accent}>LEARN MORE</Link>}
      </div>
    </div>
  );
};

export const ClearCard = ({ bg = "bg-white" }) => {
  return (
    <div
      class={`flex-1
            h-[80vw] md:h-[42vw] 
            bg-cover bg-no-repeat bg-center ${bg}`}
    ></div>
  );
};

export const GalleryCard = ({ bg = "bg-white" }) => {
  return (
    <div
      class={`flex-1
            h-[50vw] md:h-[30vw] 
            bg-cover bg-no-repeat bg-center ${bg}`}
    ></div>
  );
};

export const InfoCard = ({ bg, title, text, textColor }) => {
  return (
    <div
      class={`flex-1 flex flex-col justify-end items-center gap-8
          h-[160vw] md:h-[42vw] p-8 md:px-32 md:py-8 
          bg-cover bg-no-repeat bg-center ${bg}
          ${textColor}`}
    >
      {title && (
        <h2 class="text-2xl text-center font-black font-heading">{title}</h2>
      )}
      {text && <p class="text-sm text-center">{text}</p>}
    </div>
  );
};
