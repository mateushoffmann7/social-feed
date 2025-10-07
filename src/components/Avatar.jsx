export function Avatar(props) {
  return (
    <img
      src={props.src}
      className={
        props.hasNotBorder
          ? 'w-[3rem] h-[3rem] rounded-[8px]'
          : 'w-[calc(3rem_+_12px)] h-[calc(3rem_+_12px)] rounded-[8px] border-4 border-gray-800 outline-2 outline-green-500'
      }
    />
  );
}

<img
  src="https://github.com/mateushoffmann7.png"
  className="w-[3rem] h-[3rem] 
        rounded-[8px]"
/>;

('');
