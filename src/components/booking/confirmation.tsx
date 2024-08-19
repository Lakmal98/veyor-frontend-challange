import { useState } from "react";
import { SessionData } from "@/types/session";
import { UserInfo } from "@/types/user-info";
import Link from "next/link";
import { FaAngleDoubleRight } from "react-icons/fa";
import ConfirmationDialog from "./cancellation-confirmation";

interface IProps {
  sessionData: SessionData;
  userInfo?: UserInfo;
  clearBooking: () => void;
}

export default function Confirmation({
  sessionData,
  clearBooking,
}: Readonly<IProps>) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { session, date, time } = sessionData;

  const handleCancel = () => {
    setIsDialogOpen(true); // Open the confirmation dialog
  };

  const handleConfirmCancel = () => {
    clearBooking();
    setIsDialogOpen(false);
  };

  const scheduleAnotherAppointment = () => {
    clearBooking();
  };

  const rescheduleAppointment = () => {
    alert("Cannot reschedule at this time.");
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false); // Close the dialog without performing cancellation
  };

  return (
    <div className="flex flex-col md:flex-row w-full pt-8 items-center md:item-start">
      <div className="flex flex-col md:w-7/12 lg:w-2/4">
        <div className="text-2xl md:text-4xl">{session.name}</div>
        <div className="text-xl md:text-4xl text-slate-500">
          {date.toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>

        <div className="text-xl md:text-4xl text-slate-500">
          {time.split(" ").join("").toLocaleLowerCase()}
        </div>
        <div className="py-4">
          <span>Veryor Wellness</span>
          <span className="pl-4">{session.price}</span>
        </div>
        <div className="flex flex-wrap">
          <button
            onClick={handleCancel}
            className="bg-black text-white p-2 rounded-md w-36 mr-1 mb-2 hover:bg-red-500"
          >
            Cancel
          </button>
          <button
            className="bg-black text-white p-2 rounded-md w-36 mb-2 hover:bg-blue-500"
            onClick={rescheduleAppointment}
          >
            Reschedule
          </button>
        </div>
        <div>
          <Link href="/booking#">
            <button
              className="border-2 p-2 rounded-md mt-2 w-full md:w-72 hover:bg-blue-500 hover:text-white"
              onClick={scheduleAnotherAppointment}
            >
              Schedule Another Appointment{" "}
              <FaAngleDoubleRight className="inline" />
            </button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col md:w-5/12 lg:w-2/4 border-t-2 md:border-t-0 md:border-l-2 pt-8 md:pt-0 md:pl-12 mt-8 md:mt-auto">
        <h1 className="text-2xl md:text-4xl text-center md:text-left">
          Easily book and manage appointments with Veyor Wellness on your phone.
        </h1>
        <div className="py-4 text-center md:text-left">
          <span className="text-lg">
            Get the mobile app by opening the camera on your phone, and scanning
            this QR code:
          </span>
        </div>
        <div className="flex justify-center w-8/12 md:w-10/12 m-auto">
          <img src="/mock/image/qr.png" alt="QR Code" />
        </div>
      </div>
      <ConfirmationDialog
        isOpen={isDialogOpen}
        onConfirm={handleConfirmCancel}
        onCancel={handleDialogClose}
        message="Are you sure you want to cancel?"
      />
    </div>
  );
}
