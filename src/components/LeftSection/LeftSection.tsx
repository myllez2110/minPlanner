import React from 'react';
import CustomCalendar from './CustomCalendar';

const LeftSection: React.FC = () => {
  return (
    <div className="w-[35%] min-h-screen p-6 pt-20 border-r border-zinc-800">
      <CustomCalendar />
    </div>
  );
};

export default LeftSection;
