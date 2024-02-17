const Tooltip = ({ theme, direction, text }) => {
  const bg = theme === 'light' ? 'bg-white' : 'bg-black';
  const color = theme === 'light' ? 'text-primary' : 'text-white';
  const p = direction === 'right' ? 'pr-14' : 'pl-10';
  const position = direction === 'right' ? 'right-0' : 'left-0';

  return (
    <div
      className={`absolute ${p} ${position} hidden xl:group-hover:flex rounded-[3px] z-10 w-max`}>
      <span
        className={`${bg} relative flex ${color} items-center p-[6px] text-[12px] leading-none font-semibold capitalize`}>
        {text}

        {direction === 'right' ? (
          <span
            className={`border-solid ${
              theme === 'light' ? 'border-l-white' : 'border-l-black'
            } border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2`}
          />
        ) : (
          <span
            className={`border-solid ${
              theme === 'light' ? 'border-r-white' : 'border-r-black'
            } border-r-8 border-y-transparent border-y-[6px] border-l-0 absolute -left-2`}
          />
        )}
      </span>
    </div>
  );
};

export default Tooltip;
