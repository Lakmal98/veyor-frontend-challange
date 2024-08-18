"use client";
import { useEffect, useState } from "react";
import TabGroup, { Tab } from "@/components/tab-group";
import { AVAILABLE_TIME_SLOTS } from "@/services/mock-data/time.mock";
import { SESSIONS } from "@/services/mock-data/session.mock";
import { Session } from "@/types/session";
import SessionSelection from "@/components/booking/session-selection";

export default function Booking() {
  const [selectedTab, setSelectedTab] = useState<Tab>(Tab.ChooseAppointment);
  const [selectedSessionId, setSelectedSessionId] = useState<number | null>(
    null
  );
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [availableTimeSlots, setAvailableTimeSlots] = useState<string[]>([]);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedSessionData, setSelectedSessionData] = useState<{
    session: Session;
    date: Date;
    time: string;
  } | null>(null);

  const onTabChange = (selectedTab: Tab) => {
    setSelectedTab(selectedTab);
  };

  useEffect(() => {
    if (selectedDate) {
      const now = new Date();
      const filteredTimeSlots = AVAILABLE_TIME_SLOTS.filter((time) => {
        const [hoursStr, minutesStr] = time.split(":");
        const [hours, minutes] = [parseInt(hoursStr), parseInt(minutesStr)];
        const timeDate = new Date(selectedDate);
        timeDate.setHours(hours, minutes);
        return timeDate.getTime() > now.getTime();
      });
      setAvailableTimeSlots(filteredTimeSlots);
    }
  }, [selectedDate]);

  const handleSessionClick = (id: number) => {
    setSelectedSessionId(id);
  };

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    setSelectedTime(null); // Reset the selected time when date changes
  };

  const handleTimeClick = (time: string) => {
    setSelectedTime(time);
  };

  const onContinueSessionSelection = () => {
    if (selectedDate && selectedTime) {
      const session = SESSIONS.find((s) => s.id === selectedSessionId);
      if (session) {
        setSelectedSessionData({
          session,
          date: selectedDate,
          time: selectedTime,
        });
      }
    }
  };

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
        <TabGroup onTabChange={onTabChange} />
        <div className="h-12"></div>
        {selectedTab === Tab.ChooseAppointment && (
          <SessionSelection
            selectedSessionId={selectedSessionId}
            onSessionClick={handleSessionClick}
            selectedDate={selectedDate}
            onDateChange={handleDateChange}
            availableTimeSlots={availableTimeSlots}
            selectedTime={selectedTime}
            onTimeClick={handleTimeClick}
            onContinueSessionSelection={onContinueSessionSelection}
          />
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
