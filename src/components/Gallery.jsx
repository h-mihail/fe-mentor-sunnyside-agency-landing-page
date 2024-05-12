import { GalleryCard } from "./Card";

export const Gallery = () => {
  return (
    <div class="grid grid-cols-2 md:flex">
      <GalleryCard bg="bg-milkbottles-mobile md:bg-milkbottles-desktop" />
      <GalleryCard bg="bg-orange-mobile md:bg-orange-desktop" />
      <GalleryCard bg="bg-cone-mobile md:bg-cone-desktop" />
      <GalleryCard bg="bg-sugarcubes-mobile md:bg-sugarcubes-desktop" />
    </div>
  );
};
