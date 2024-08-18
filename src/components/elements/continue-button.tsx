import { FaAngleDoubleRight } from "react-icons/fa";

interface IProps {
  text: string;
  onClick: () => void;
}

export default function ContinueButton({ text, onClick }: IProps) {
  return (
    <button
      className="p-2 px-4 bg-black text-white rounded-lg"
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {text} <FaAngleDoubleRight className="inline" />
    </button>
  );
}
