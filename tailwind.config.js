/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      heading: ["Fraunces", "Arial", "Helvetica", "sans-serif"],
    },
    extend: {
      letterSpacing: {
        outerSpace: "0.2em",
      },
      boxShadow: {
        underline: "inset 0 -0.75em 0 0",
      },
      colors: {
        heading: "var(--Very-dark-desaturated-blue)",
        yellow: "var(--Yellow)",
        red: "var(--Red)",
        softYellow: "var(--Soft-yellow)",
        softRed: "var(--Soft-red)",
        darkBlue: "var(--Dark-blue)",
        grayishBlue: "var(--Grayish-blue)",
        darkModerateCyan: "var(--Dark-moderate-cyan)",
        darkDesaturatedCyan: "var(--Dark-desaturated-cyan)",
        veryDarkDesaturedBlue: "var(--Very-dark-desaturated-blue)",
      },
      height: {
        120: "30rem",
        160: "40rem",
      },
      flex: {
        50: "50%",
        100: "100%",
      },
      backgroundImage: {
        "header-mobile": "url('/src/assets/mobile/image-header.jpg')",
        "header-desktop": "url('/src/assets/desktop/image-header.jpg')",
        "transform-mobile": "url('/src/assets/mobile/image-transform.jpg')",
        "transform-desktop": "url('/src/assets/desktop/image-transform.jpg')",
        "stand-out-mobile": "url('/src/assets/mobile/image-stand-out.jpg')",
        "stand-out-desktop": "url('/src/assets/desktop/image-stand-out.jpg')",
        "photography-mobile": "url('/src/assets/mobile/image-photography.jpg')",
        "photography-desktop":
          "url('/src/assets/desktop/image-photography.jpg')",
        "graphic-design-mobile":
          "url('/src/assets/mobile/image-graphic-design.jpg')",
        "graphic-design-desktop":
          "url('/src/assets/desktop/image-graphic-design.jpg')",
        "cone-mobile": "url('/src/assets/mobile/image-gallery-cone.jpg')",
        "cone-desktop": "url('/src/assets/desktop/image-gallery-cone.jpg')",
        "milkbottles-mobile":
          "url('/src/assets/mobile/image-gallery-milkbottles.jpg')",
        "milkbottles-desktop":
          "url('/src/assets/desktop/image-gallery-milkbottles.jpg')",
        "orange-mobile": "url('/src/assets/mobile/image-gallery-orange.jpg')",
        "orange-desktop": "url('/src/assets/desktop/image-gallery-orange.jpg')",
        "sugarcubes-mobile":
          "url('/src/assets/mobile/image-gallery-sugarcubes.jpg')",
        "sugarcubes-desktop":
          "url('/src/assets/desktop/image-gallery-sugarcubes.jpg')",
      },
    },
  },
  plugins: [],
};
