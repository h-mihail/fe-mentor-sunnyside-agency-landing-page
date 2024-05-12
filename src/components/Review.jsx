export const Review = ({ reviewText, avatarSrc, authorName, jobTitle }) => {
  return (
    <div class="flex flex-col justify-center items-center gap-8 md:gap-14">
      <img class="rounded-full w-16" alt="avatar" src={avatarSrc} />
      <p class="text-center font-bold">{reviewText}</p>
      <div class="flex flex-col justify-center items-center gap-2">
        <p class="text-base text-heading font-black font-heading">
          {authorName}
        </p>
        <p class="text-xs font-bold text-grayishBlue">{jobTitle}</p>
      </div>
    </div>
  );
};
