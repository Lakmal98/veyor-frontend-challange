import { Tab } from "@/types/tabs";
import "./step-navigation.css";

interface IProps {
  currentStep: Tab;
}

export default function StepNavigation(props: Readonly<IProps>) {
  const { currentStep } = props;
  return (
    <div className="arrow-steps">
      <div
        className={`step start ${
          currentStep === Tab.ChooseAppointment ? "active" : ""
        }`}
      >
        {" "}
        <span> {Tab.ChooseAppointment}</span>{" "}
      </div>
      <div
        className={`step middle ${
          currentStep === Tab.YourInfo ? "active" : ""
        }`}
      >
        {" "}
        <span>{Tab.YourInfo}</span>{" "}
      </div>
      <div
        className={`step end ${currentStep === Tab.Confirmation ? "active" : ""}`}
      >
        {" "}
        <span>{Tab.Confirmation}</span>{" "}
      </div>
    </div>
  );
}
