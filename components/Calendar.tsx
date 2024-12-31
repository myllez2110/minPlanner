import React from 'react';
import { useState } from 'react';
import DayInfo from './DayInfo';
import CustomCalendar from '../LeftSection/CustomCalendar';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <div className="flex gap-4">
      <div className="w-1/2">
        <CustomCalendar
          onDateSelect={(date) => setSelectedDate(date)}
        />
        
        <DayInfo selectedDate={selectedDate} />
      </div>
    </div>
  );
}; 