import logoImg from "/src/assets/logo.svg";
import logoCyanImg from "/src/assets/logo-cyan.svg";

export const Logo = () => {
  return (
    <figure class="cursor-pointer">
      <img class="w-[124px] md:w-[168px]" src={logoImg} />
    </figure>
  );
};

export const LogoCyan = () => {
  return (
    <figure class="cursor-pointer">
      <img width="168" src={logoCyanImg} />
    </figure>
  );
};
