'use client';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './calendar.css';

interface IProps {
    onDateChange: (date: Date | null) => void;
}


export default function Calendar({ onDateChange }: IProps) {
    const [startDate, setStartDate] = useState<Date | null>(null);

    const handleDateChange = (date: Date | null) => {
        setStartDate(date);
        onDateChange(date);
    };


    return (
        <div className="flex flex-col items-center p-5">
            <DatePicker
                selected={startDate}
                onChange={handleDateChange}
                className="border p-2 text-center"
                dateFormat="MMMM d, yyyy"
                inline
                minDate={new Date()}
                placeholderText="Select a date"
            />
        </div>
    );
}
