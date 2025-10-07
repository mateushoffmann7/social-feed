export function Avatar(props) {
  return (
    <img
      src={props.src}
      className="w-[calc(3rem_+_12px)] h-[calc(3rem_+_12px)] 
      rounded-[8px] border-4 border-gray-800 outline-2 outline-green-500"
    />
  );
}
