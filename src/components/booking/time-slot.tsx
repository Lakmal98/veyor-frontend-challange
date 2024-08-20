interface IProps {
  time: string;
  onClick: (time: string) => void;
  isSelected?: boolean;
}

export default function TimeSlot(props: Readonly<IProps>) {
  const { time, isSelected, onClick } = props;

  return (
    <div
      onClick={() => onClick(time)}
      className={`flex items-center w-full sm:w-11/12 pt-1 my-1 mx-4 sm:mx-8 cursor-pointer`}
    >
      <input type="radio" checked={isSelected} readOnly className="mr-2" />
      <div className="font-semibold text-sm sm:text-base">{time}</div>
    </div>
  );
}
