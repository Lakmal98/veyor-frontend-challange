import { useState } from "react";
import Calendar from "@/components/calendar/calendar";
import SessionType from "@/components/session-type";
import TimeSlot from "@/components/time-slot";
import { SESSIONS } from "@/services/mock-data/session.mock";
import { FaAngleDoubleRight } from "react-icons/fa";

interface SessionSelectionProps {
  selectedSessionId: number | null;
  onSessionClick: (id: number) => void;
  selectedDate: Date | null;
  onDateChange: (date: Date | null) => void;
  availableTimeSlots: string[];
  selectedTime: string | null;
  onTimeClick: (time: string) => void;
  onContinueSessionSelection: () => void;
}

export default function SessionSelection({
  selectedSessionId,
  onSessionClick,
  selectedDate,
  onDateChange,
  availableTimeSlots,
  selectedTime,
  onTimeClick,
  onContinueSessionSelection,
}: SessionSelectionProps) {
  const [collapsed, setCollapsed] = useState(false);

  const handleSessionClick = (id: number) => {
    if (selectedSessionId === id) {
      setCollapsed(!collapsed);
    } else {
      onSessionClick(id);
      setCollapsed(false);
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
        <Calendar onDateChange={onDateChange} />
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
                onClick={() => onTimeClick(time)}
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
          <button
            className="p-2 px-4 bg-black text-white rounded-lg"
            onClick={onContinueSessionSelection}
          >
            Continue <FaAngleDoubleRight className="inline" />
          </button>
        )}
      </div>
    </>
  );
}
