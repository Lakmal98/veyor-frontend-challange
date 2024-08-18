import { useEffect, useState } from "react";
import Calendar from "@/components/calendar/calendar";
import SessionType from "@/components/session-type";
import TimeSlot from "@/components/time-slot";
import { SESSIONS } from "@/services/mock-data/session.mock";
import { FaAngleDoubleRight } from "react-icons/fa";
import { AVAILABLE_TIME_SLOTS } from "@/services/mock-data/time.mock";
import { Session } from "@/types/session";
import ContinueButton from "../elements/continue-button";

interface SessionSelectionProps {
  onSessionSelect: (data: {
    session: Session;
    date: Date;
    time: string;
  }) => void;
}

export default function SessionSelection({
  onSessionSelect: setSelectedSessionData,
}: SessionSelectionProps) {
  const [selectedSessionId, setSelectedSessionId] = useState<number | null>(
    null
  );
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [availableTimeSlots, setAvailableTimeSlots] = useState<string[]>([]);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [collapsed, setCollapsed] = useState(false);

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

  const handleSessionClick = (id: number) => {
    if (selectedSessionId === id) {
      setSelectedSessionId(null);
      setSelectedDate(null);
      setSelectedTime(null);
    } else {
      setSelectedSessionId(id);
    }
  };

  return (
    <>
      {SESSIONS.map(
        (session) =>
          (!collapsed || selectedSessionId === session.id) && (
            <SessionType
              key={session.id}
              session={session}
              onClick={() => handleSessionClick(session.id)}
              isSelected={selectedSessionId === session.id}
              collapsed={collapsed}
            />
          )
      )}
      {selectedSessionId && !collapsed && (
        <Calendar onDateChange={handleDateChange} />
      )}
      {selectedSessionId && !collapsed && (
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
      )}
      <div className="w-full justify-start p-5">
        {selectedTime && (
          <ContinueButton
            text="Continue"
            onClick={onContinueSessionSelection}
          />
        )}
      </div>
    </>
  );
}
