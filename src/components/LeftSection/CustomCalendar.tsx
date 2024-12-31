import React, { useState } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  isSameDay,
  isSameMonth,
  isToday,
} from "date-fns";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "../../components/ui/context-menu";
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";

type DateClickHandler = (date: Date) => void;

const CustomCalendar: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const addMonths = (date: Date, months: number): Date => {
    const result = new Date(date);
    result.setMonth(result.getMonth() + months);
    return result;
  };

  const renderHeader = (): JSX.Element => {
    return (
      <div className="flex justify-between items-center mb-4 px-2">
        <button
          className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-400 transition-colors"
          onClick={() => setCurrentMonth(addMonths(currentMonth, -1))}
        >
          Previous
        </button>
        <h2 className="text-lg font-medium text-zinc-100">
          {format(currentMonth, "MMMM yyyy")}
        </h2>
        <button
          className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-400 transition-colors"
          onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
        >
          Next
        </button>
      </div>
    );
  };

  const renderDays = (): JSX.Element => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return (
      <div className="grid grid-cols-7 text-center mb-2">
        {days.map((day, index) => (
          <div key={index} className="text-sm font-medium text-zinc-400">
            {day}
          </div>
        ))}
      </div>
    );
  };

  const renderCells = (): JSX.Element => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const rows: JSX.Element[] = [];
    let days: JSX.Element[] = [];
    let day: Date = startDate;

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const cloneDay: Date = day;
        days.push(
          <ContextMenu modal={false}>
            <ContextMenuTrigger>
              <div
                key={day.toString()}
                className={`p-2 text-center cursor-pointer transition-colors
                  ${!isSameMonth(day, monthStart) ? "text-zinc-700" : "text-zinc-300"}
                  ${
                    selectedDate && isSameDay(day, selectedDate)
                      ? "bg-zinc-400 text-black rounded-full hover:bg-zinc-500"
                      : isToday(day)
                      ? "border-2 border-zinc-400 text-zinc-400 rounded-full hover:bg-zinc-800"
                      : "hover:bg-zinc-800 hover:text-zinc-100 rounded-full"
                  }`}
                onClick={() => handleDateClick(cloneDay)}
              >
                {format(day, "d")}
              </div>
            </ContextMenuTrigger>
            <ContextMenuContent>
              <ContextMenuItem>Add Event</ContextMenuItem>
              <ContextMenuItem>See Details</ContextMenuItem>
              <ContextMenuItem>Mark as Important</ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="grid grid-cols-7" key={day.toString()}>
          {days}
        </div>
      );
      days = [];
    }

    return <div>{rows}</div>;
  };
  
  const handleDateClick: DateClickHandler = (date) => {
    if (selectedDate && isSameDay(date, selectedDate)) {
      setSelectedDate(null);
    } else {
      setSelectedDate(date);
    }
  };

  return (
    <div className="flex items-center justify-center w-full aspect-[16/10]">
      <div className="w-full h-[95%] p-4 border border-zinc-800 rounded-xl bg-zinc-900 shadow-xl">
        {renderHeader()}
        {renderDays()}
        {renderCells()}
      </div>
    </div>
  );
};

export default CustomCalendar;
