import { Review } from "./Review";

import emilyImg from "/src/assets/image-emily.jpg";
import thomasImg from "/src/assets/image-thomas.jpg";
import jennieImg from "/src/assets/image-jennie.jpg";

export const Testimonials = () => {
  return (
    <div class="py-16 px-8 md:p-32 bg-white">
      <h2 class="text-grayishBlue text-sm md:text-base font-extrabold font-heading text-center tracking-outerSpace mb-12 md:mb-16">
        CLIENT TESTIMONIALS
      </h2>
      <div class="flex flex-col md:flex-row justify-center items-center gap-16 md:gap-8">
        <Review
          reviewText="We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
          avatarSrc={emilyImg}
          authorName="Emily R."
          jobTitle="Marketing Director"
        />
        <Review
          reviewText="Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience."
          avatarSrc={thomasImg}
          authorName="Thomas S."
          jobTitle="Chief Operating Officer"
        />
        <Review
          reviewText="Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
          avatarSrc={jennieImg}
          authorName="Jennie F."
          jobTitle="Business Owner"
        />
      </div>
    </div>
  );
};
