export function Avatar({ img, hasBorder, isComment }) {
  return (
    <img
      className={` ${isComment ? 'h-15 w-15' : 'h-18 w-18'} rounded-lg object-cover ${hasBorder ? 'border-2 border-[#00b37E]' : ''} `}
      src={img}
      alt=""
    />
  );
}
