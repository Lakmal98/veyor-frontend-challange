import React, { useState, useEffect } from "react";

type IProps = {
  initialTab?: string;
  onTabChange: (selectedTab: Tab) => void;
};

export enum Tab {
  ChooseAppointment = "Choose Appointment",
  YourInfo = "Your Info",
  Confirmation = "Confirmation",
}

const TABS = Object.values(Tab);

export default function TabGroup({
  initialTab = "Choose Appointment",
  onTabChange,
}: IProps) {
  const [selectedTab, setSelectedTab] = useState<Tab>(initialTab as Tab);

  useEffect(() => {
    if (onTabChange) {
      onTabChange(selectedTab);
    }
  }, [selectedTab, onTabChange]);

  useEffect(() => {
    setSelectedTab(initialTab as Tab);
  }, [initialTab]);

  const handleTabClick = (tab: Tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="flex justify-center">
      {TABS.map((tab) => (
        <div
          key={tab}
          className={`py-2 px-4 border w-60 text-center cursor-pointer ${
            selectedTab === tab ? "border-b-2 border-black" : "text-gray-400"
          }`}
          onClick={() => handleTabClick(tab)}
        >
          {tab}
        </div>
      ))}
    </div>
  );
}
