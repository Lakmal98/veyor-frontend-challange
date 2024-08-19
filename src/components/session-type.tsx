import { Session } from "@/types/session";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface IProps {
  session: Session;
  onClick: () => void;
  isSelected?: boolean;
  collapsed?: boolean;
}

export default function SessionType(props: Readonly<IProps>) {
  const { session, isSelected, collapsed } = props;
  return (
    <button
      onClick={props.onClick}
      className={`flex flex-col border p-5 my-4 mx-4 cursor-pointer 
            hover:bg-gray-100 hover:border-black-500 
            ${isSelected ? "bg-gray-200 border-black-600" : ""}
            sm:w-[40vw] md:w-[30vw] lg:w-[25vw] xl:w-[20vw]`}
    >
      <div className="flex justify-between items-center">
        <div className="font-semibold">{session.name}</div>
        <span>
          {isSelected && !collapsed ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </div>
      <div>
        {session.duration} @ {session.price}
      </div>
    </button>
  );
}
