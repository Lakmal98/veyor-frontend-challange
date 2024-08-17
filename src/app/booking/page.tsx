"use client";

import Calendar from "@/components/calendar/calendar";
import SessionType from "@/components/session-type";
import TabGroup from "@/components/tab-group";
import TimeSlot from "@/components/time-slot";
import { SESSIONS } from "@/services/mock-data/session.mock";
import { AVAILABLE_TIME_SLOTS } from "@/services/mock-data/time.mock";
import { useEffect, useState } from "react";

export default function Booking() {
  const [selectedSessionId, setSelectedSessionId] = useState<number | null>(
    null
  );
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [availableTimeSlots, setAvailableTimeSlots] = useState<string[]>([]);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  useEffect(() => {
    console.log(`Selected session: ${selectedSessionId}`);
  }, [selectedSessionId]);

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

  return (
    <div className="flex min-h-screen flex-col items-center justify-around p-1">
      <div className="flex flex-col items-center">
        <h1 className="text-8xl">Book a wellness session.</h1>
        <p className="text-lg pt-10">
          Visit one of our expert consultants to get yourself feeling 100%
          again.
        </p>
      </div>
      <div className="flex flex-col items-center">
        <TabGroup />
        <div className="h-12"></div>
        {SESSIONS.map((session) => (
          <SessionType
            key={session.id}
            session={session}
            onClick={() => handleSessionClick(session.id)}
            isSelected={selectedSessionId === session.id}
          />
        ))}
        <Calendar onDateChange={handleDateChange} />
        <div className="w-full flex flex-col p-5">
          <div>Please select a time</div>
          {availableTimeSlots.length > 0 ? (
            availableTimeSlots.map((time) => (
              <TimeSlot
                key={time}
                time={time}
                isSelected={time === selectedTime}
                onClick={() => handleTimeClick(time)}
              />
            ))
          ) : (
            <div className="p-2 text-center text-red-500 font-bold">
              Sorry, no available time slots for this date. Please select
              another date.
            </div>
          )}
        </div>
        <div className="w-full justify-start p-5">
          {selectedTime && (
            <button className="p-2 px-4 bg-black text-white rounded-lg">
              Continue &gt;&gt;
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
