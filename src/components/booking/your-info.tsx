import { SessionData } from "@/types/session";
import { FaAngleDoubleLeft } from "react-icons/fa";
import ContinueButton from "../elements/continue-button";

interface IProps {
  sessionData: SessionData;
  onClickBack: () => void;
  onClickComplete: () => void;
}

export default function YourInfo({
  sessionData,
  onClickBack,
  onClickComplete,
}: IProps) {
  const { session, date, time } = sessionData;

  const handleComplete = () => {
    onClickComplete();
  };

  return (
    <div className="flex flex-col items-left">
      <div className="text-left">{`${
        session.name
      } ${date.toDateString()} ${time}`}</div>
      <div className="underline cursor-pointer" onClick={onClickBack}>
        {" "}
        <FaAngleDoubleLeft className="inline" /> Change
      </div>

      <form className="flex flex-col">
        {/* Name */}
        <div className="flex flex-col">
          <label htmlFor="name">Name</label>
          <div className="flex flex-row">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="border p-2 rounded-md"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="border p-2 rounded-md"
            />
          </div>
        </div>
        {/* Phone */}
        <div className="flex flex-col">
          <label htmlFor="phone">Phone</label>
          <div className="flex flex-row">
            <input type="tel" name="phone" className="border p-2 rounded-md" />
          </div>
        </div>
        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <div className="flex flex-row">
            <input
              type="email"
              name="email"
              className="border p-2 rounded-md"
            />
          </div>
        </div>
        {/* Complete Button */}
        <ContinueButton text="Complete Appointment" onClick={handleComplete} />
      </form>
    </div>
  );
}
