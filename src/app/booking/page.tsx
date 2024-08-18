"use client";
import { useEffect, useState } from "react";
import TabGroup, { Tab } from "@/components/tab-group";
import { Session } from "@/types/session";
import SessionSelection from "@/components/booking/session-selection";

export default function Booking() {
  const [selectedTab, setSelectedTab] = useState<Tab>(Tab.ChooseAppointment);

  const [selectedSessionData, setSelectedSessionData] = useState<{
    session: Session;
    date: Date;
    time: string;
  } | null>(null);

  const onTabChange = (selectedTab: Tab) => {
    setSelectedTab(selectedTab);
  };

  useEffect(() => {
    if (selectedSessionData) {
      setSelectedTab(Tab.YourInfo);
    }
  }, [selectedSessionData]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-around p-1">
      <div className="flex flex-col items-center">
        <h1 className="text-8xl pt-20">Book a wellness session.</h1>
        <p className="text-lg pt-10">
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
          <div className="text-2xl">Your Info</div>
        )}
        {selectedTab === Tab.Confirmation && (
          <div className="text-2xl">Confirmation</div>
        )}
      </div>
    </div>
  );
}
