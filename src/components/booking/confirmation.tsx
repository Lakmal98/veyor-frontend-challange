import { SessionData } from "@/types/session";
import { UserInfo } from "@/types/user-info";
import Link from "next/link";
import { FaAngleDoubleRight } from "react-icons/fa";

interface IProps {
  sessionData: SessionData;
  userInfo: UserInfo;
}

export default function Confirmation({ sessionData, userInfo }: IProps) {
  const { session, date, time } = sessionData;
  return (
    <div className="flex flex-row items-start w-2/4 p-8">
      <div className="flex flex-col w-9/12">
        <div className="text-4xl">{session.name}</div>
        <div className="text-4xl text-slate-500">
          {date.toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>

        <div className="text-4xl text-slate-500">
          {time.split(" ").join("").toLocaleLowerCase()}
        </div>
        <div className="py-4">
          <span>Veryor Wellness</span>
          <span className="pl-4">{session.price}</span>
        </div>
        <div>
          <button className="bg-black text-white p-2 rounded-md w-36 mr-1">
            Cancel
          </button>
          <button className="bg-black text-white p-2 rounded-md w-36">
            Reschedule
          </button>
        </div>
        <div>
          <Link href="/booking#">
            <button className="border-2 p-2 rounded-md mt-2 w-72">
              Schedule Another Appointment{" "}
              <FaAngleDoubleRight className="inline" />
            </button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col w-6/12 border-l-2 pl-12">
        <h1 className="text-4xl">
          Easily book and manage appointments with Veyor Wellness on your phone.
        </h1>
        <div className="py-4">
          <span className="text-lg">
            Get the mobile app by opening the camera on your phone, and scanning
            this QR code:
          </span>
        </div>
        <div className="flex justify-center w-10/12 m-auto">
          <img src="/mock/image/qr.png" alt="QR Code" />
        </div>
      </div>
    </div>
  );
}
