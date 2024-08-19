"use client";
import { useEffect, useState } from "react";
import TabGroup from "@/components/tab-group";
import { SessionData } from "@/types/session";
import SessionSelection from "@/components/booking/session-selection";
import YourInfo from "@/components/booking/your-info";
import Confirmation from "@/components/booking/confirmation";
import { UserInfo } from "@/types/user-info";
import { Tab } from "@/types/tabs";

export default function Booking() {
  const [selectedTab, setSelectedTab] = useState<Tab>(Tab.ChooseAppointment);

  const [selectedSessionData, setSelectedSessionData] =
    useState<SessionData | null>(null);

  const [userInput, setUserInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  } as UserInfo);

  const onTabChange = (selectedTab: Tab) => {
    setSelectedTab(selectedTab);
  };

  // clear everything and book a new session
  const clearBooking = () => {
    setSelectedTab(Tab.ChooseAppointment);
    setSelectedSessionData(null);
    setUserInput({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    });
  };

  useEffect(() => {
    if (selectedSessionData) {
      setSelectedTab(Tab.YourInfo);
    }
  }, [selectedSessionData]);

  return (
    <div className="flex min-h-screen flex-col items-center p-8">
      <div className="flex flex-col items-center">
        <h1 className="text-8xl">Book a wellness session.</h1>
        <p className="text-lg py-6">
          Visit one of our expert consultants to get yourself feeling 100%
          again.
        </p>
      </div>
      <div className="flex flex-col items-center">
        <TabGroup onTabChange={onTabChange} tab={selectedTab} />
        <div className="h-12"></div>
        {selectedTab === Tab.ChooseAppointment && (
          <SessionSelection onSessionSelect={setSelectedSessionData} />
        )}
        {selectedTab === Tab.YourInfo && (
          <YourInfo
            sessionData={selectedSessionData!}
            onClickBack={() => setSelectedTab(Tab.ChooseAppointment)}
            onClickComplete={() => setSelectedTab(Tab.Confirmation)}
            setUserInput={setUserInput}
          />
        )}
        {selectedTab === Tab.Confirmation && (
          <Confirmation
            sessionData={selectedSessionData!}
            userInfo={userInput}
            clearBooking={clearBooking}
          />
        )}
      </div>
    </div>
  );
}
