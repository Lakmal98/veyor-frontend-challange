'use client';

import Calendar from "@/components/calendar/calendar";
import SessionType from "@/components/session-type";
import TabGroup from "@/components/tab-group";
import { Session } from "@/types/session";
import { useEffect, useState } from "react";

const sessions: Session[] = [
    {
        id: 1,
        name: "Physiotherapy",
        duration: "30 minutes",
        price: "$45.00",
    },
    {
        id: 2,
        name: "Chiro",
        duration: "30 minutes",
        price: "$100.00",
    },
    {
        id: 3,
        name: "Aroma Therapy",
        duration: "30 minutes",
        price: "$45.00",
    },
];

export default function Booking() {

    const [selected, setSelected] = useState<number>(0);

    useEffect(() => {
        console.log(`Selected tab: ${selected}`);
    }, [selected]);

    const handleTabClick = (id: number) => {
        setSelected(id);
    }

    return (
        <div className="flex min-h-screen flex-col items-center justify-around p-1">
            <div className="flex flex-col items-center">
                <h1 className="text-8xl">Book a wellness session.</h1>
                <p className="text-lg pt-10">Visit one of our expert consultants to get yourself feeling 100% again.</p>
            </div>
            <div className="flex flex-col items-center">
                <TabGroup />
                {/* Additional spacing  */}
                <div className="h-12"></div>
                {sessions.map((session) => (
                    <SessionType key={session.id} session={session} onClick={() => handleTabClick(session.id)}
                        isSelected={selected === session.id} />
                ))}
                <Calendar />
            </div>
        </div>
    );
}
