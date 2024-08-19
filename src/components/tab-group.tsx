"use client";
import CustomShape from "@/components/elements/image/svg/custom-shape";
import { useState } from "react";
type IProps = {
  tab?: Tab;
  onTabChange: (selectedTab: Tab) => void;
};

export enum Tab {
  ChooseAppointment = "Choose Appointment",
  YourInfo = "Your Info",
  Confirmation = "Confirmation",
}

export default function TabGroup({
  tab = Tab.ChooseAppointment,
}: Readonly<IProps>) {
  return (
    <div className="flex justify-center">
      <div key={Tab.Confirmation} className="py-2 absolute translate-x-40">
        <CustomShape
          text={Tab.Confirmation}
          width={200}
          height={40}
          fillColor={tab === Tab.Confirmation ? "#ffffff" : "#f3f3f3"}
          borderColor={tab === Tab.Confirmation ? "#000000" : "#e0e0e0"}
        />
      </div>
      <div key={Tab.YourInfo} className="py-2 absolute">
        <CustomShape
          text={Tab.YourInfo}
          width={200}
          height={40}
          fillColor={tab === Tab.YourInfo ? "#ffffff" : "#f3f3f3"}
          borderColor={tab === Tab.YourInfo ? "#000000" : "#e0e0e0"}
        />
      </div>

      <div
        key={Tab.ChooseAppointment}
        className="py-2 absolute -translate-x-40"
      >
        <CustomShape
          text={Tab.ChooseAppointment}
          width={200}
          height={40}
          fillColor={tab === Tab.ChooseAppointment ? "#ffffff" : "#f3f3f3"}
          borderColor={tab === Tab.ChooseAppointment ? "#000000" : "#e0e0e0"}
        />
      </div>
      <div
        className={`absolute w-10 h-[39px] bg-white m-2 transform translate-x-64 border-l-2 ${
          tab === Tab.Confirmation ? "border-black" : "border-gray-300"
        }`}
      ></div>
    </div>
  );
}
