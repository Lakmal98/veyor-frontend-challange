"use client";
import { useEffect, useState } from "react";
import { SessionData } from "@/types/session";
import SessionSelection from "@/components/booking/session-selection";
import YourInfo from "@/components/booking/your-info";
import Confirmation from "@/components/booking/confirmation";
import { UserInfo } from "@/types/user-info";
import { Tab } from "@/types/tabs";
import StepNavigation from "@/components/booking/step-navigation/step-navigation";

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
    <div className="flex min-h-screen flex-col items-center p-4 md:p-8">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl lg:text-8xl leading-tight">
          Book a wellness session.
        </h1>
        <p className="text-base md:text-lg py-4 md:py-6">
          Visit one of our expert consultants to get yourself feeling 100%
          again.
        </p>
      </div>
      <div className="flex flex-col items-center w-full max-w-2xl">
        <StepNavigation currentStep={selectedTab} />
        <div className="h-6 md:h-12"></div>
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
