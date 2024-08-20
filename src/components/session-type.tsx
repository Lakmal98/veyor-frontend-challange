import { Session } from "@/types/session";
import { FaChevronDown } from "react-icons/fa";

interface IProps {
  session: Session;
  onClick: () => void;
  isSelected?: boolean;
}

export default function SessionType(props: Readonly<IProps>) {
  const { session, isSelected } = props;
  return (
    <button
      onClick={props.onClick}
      className={`flex flex-col border p-5 my-4 mx-4 cursor-pointer 
            hover:bg-gray-100 hover:border-black-500 w-full font-[PT Sans] ${
              isSelected ? "bg-gray-200 border-black-600" : ""
            }`}
    >
      <div className="flex justify-between items-center w-full">
        <div className="font-semibold ">{session.name}</div>
        <span>{isSelected && <FaChevronDown />}</span>
      </div>
      <div>
        {session.duration} @ {session.price}
      </div>
    </button>
  );
}
