import { SessionData } from "@/types/session";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { useState } from "react";
import { UserInfo } from "@/types/user-info";
import LoadingOverlay from "../elements/loading-overlay";
import ContinueButton from "../elements/continue-button";

interface IProps {
  sessionData: SessionData;
  onClickBack: () => void;
  onClickComplete: () => void;
  setUserInput: (userInfo: UserInfo) => void;
}

export default function YourInfo({
  sessionData,
  onClickBack,
  onClickComplete,
  setUserInput,
}: Readonly<IProps>) {
  const { session, date, time } = sessionData;

  const [hasButtonDisabled, setButtonDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const validateForm = () => {
    const formErrors = { firstName: "", lastName: "", email: "", phone: "" };
    const form = document.querySelector("form") as HTMLFormElement;
    const formData = new FormData(form);

    const firstName = formData.get("firstName")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const phone = formData.get("phone")?.toString() || "";

    if (!firstName.trim()) {
      formErrors.firstName = "First name is required.";
    }
    if (!email.trim()) {
      formErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = "Please enter a valid email address.";
    }
    if (phone && !/^\+?\d{10,15}$/.test(phone)) {
      formErrors.phone = "Please enter a valid phone number with 10 digits";
    }

    setErrors(formErrors);

    const isValid = Object.values(formErrors).every((error) => error === "");
    setButtonDisabled(!isValid);

    setUserInput({
      firstName: firstName.trim(),
      lastName: formData.get("lastName")?.toString() || "",
      email: email.trim(),
      phone: phone.trim(),
    });
  };

  const onFormChange = () => {
    validateForm();
  };

  const handleComplete = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onClickComplete();
    }, 3000); // Simulate a 3 second delay for booking confirmation
  };

  return (
    <div className="relative flex flex-col items-left md:w-full pt-4">
      {isLoading && (
        <LoadingOverlay message="Hold on, confirming your booking..." />
      )}

      <div className="text-left">{`${
        session.name
      } ${date.toDateString()} ${time}`}</div>
      <div className="underline cursor-pointer" onClick={onClickBack}>
        {" "}
        <FaAngleDoubleLeft className="inline" /> Change
      </div>

      <form className="flex flex-col pt-10" onChange={onFormChange}>
        {/* Name */}
        <div
          className={`flex flex-col ${
            errors.firstName ? "bg-red-100 p-2 rounded my-1" : ""
          }`}
        >
          <label htmlFor="name">
            Name
            <span className="text-red-500 pl-1">*</span>
          </label>
          <div className="flex flex-col md:flex-row mb-4">
            <input
              required
              type="text"
              name="firstName"
              placeholder="First Name"
              className={`border p-2 rounded-md w-full md:w-1/3 md:mr-2 ${
                errors.firstName ? "border-red-500" : ""
              }`}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="border p-2 rounded-md w-full md:w-2/3 mt-2 md:mt-0"
            />
          </div>
          {errors.firstName && (
            <span className="text-red-500 text-sm">{errors.firstName}</span>
          )}
        </div>
        {/* Phone */}
        <div
          className={`flex flex-col ${
            errors.phone ? "bg-red-100 rounded p-2 my-1" : ""
          }`}
        >
          <label htmlFor="phone">Phone</label>
          <div className="flex flex-row">
            <input
              type="tel"
              name="phone"
              className={`border p-2 rounded-md w-full ${
                errors.phone ? "border-red-500" : ""
              }`}
            />
          </div>
          {errors.phone && (
            <span className="text-red-500 text-sm">{errors.phone}</span>
          )}
        </div>
        {/* Email */}
        <div
          className={`flex flex-col ${
            errors.email ? "bg-red-100 rounded p-2 my-1" : ""
          }`}
        >
          <label htmlFor="email">
            Email
            <span className="text-red-500 pl-1">*</span>
          </label>
          <div className="flex flex-row">
            <input
              required
              type="email"
              name="email"
              className={`border p-2 rounded-md w-full ${
                errors.email ? "border-red-500" : ""
              }`}
            />
          </div>
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email}</span>
          )}
        </div>
        {/* Complete Button */}
        <div className="my-4">
          <ContinueButton
            text="Complete Appointment"
            onClick={handleComplete}
            disabled={hasButtonDisabled}
          />
        </div>
      </form>
    </div>
  );
}
