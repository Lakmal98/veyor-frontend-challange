import { FaAngleDoubleRight } from "react-icons/fa";

interface IProps {
  text: string;
  disabled?: boolean;
  onClick: () => void;
}

export default function ContinueButton({
  text,
  onClick,
  disabled,
}: Readonly<IProps>) {
  return (
    <button
      className={`p-2 px-4 bg-gray-800 text-white rounded-lg ${
        disabled ? "opacity-50" : ""
      } hover:bg-black`}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      disabled={disabled}
    >
      {text} <FaAngleDoubleRight className="inline" />
    </button>
  );
}
