import React, { useState, useEffect } from "react";

type IProps = {
  tab?: Tab;
  onTabChange: (selectedTab: Tab) => void;
};

export enum Tab {
  ChooseAppointment = "Choose Appointment",
  YourInfo = "Your Info",
  Confirmation = "Confirmation",
}

const TABS = Object.values(Tab);

export default function TabGroup({
  tab = Tab.ChooseAppointment,
  onTabChange,
}: IProps) {
  const handleTabClick = (tab: Tab) => {
    onTabChange(tab);
  };

  return (
    <div className="flex justify-center">
      {TABS.map((tabValue) => (
        <div
          key={tabValue}
          className={`py-2 px-4 border w-60 text-center cursor-pointer ${
            tab === tabValue ? "border-b-2 border-black" : "text-gray-400"
          }`}
        //   onClick={() => handleTabClick(tabValue)}
        >
          {tabValue}
        </div>
      ))}
    </div>
  );
}
