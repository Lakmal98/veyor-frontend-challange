import { Session } from "@/types/session";

interface IProps {
  session: Session;
  onClick: () => void;
  isSelected?: boolean;
}

export default function SessionType(props: IProps) {
  const { session, isSelected } = props;
  return (
    <div
      onClick={props.onClick}
      className={`flex flex-col border w-11/12 p-5 my-4 mx-8 cursor-pointer 
            hover:bg-gray-100 hover:border-black-500 
            ${isSelected ? "bg-gray-200 border-black-600" : ""}`}
    >
      <div className="font-semibold">{session.name}</div>
      <div>
        {session.duration} @ {session.price}
      </div>
    </div>
  );
}
