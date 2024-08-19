import { FaAngleDoubleRight } from "react-icons/fa";

interface IProps {
  text: string;
  disabled?: boolean;
  onClick: () => void;
}

export default function ContinueButton({ text, onClick, disabled }: IProps) {
  return (
    <button
      className={`p-2 px-4 bg-black text-white rounded-lg ${
        disabled ? "opacity-50" : ""
      }`}
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
