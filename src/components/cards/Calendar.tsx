import React, { useState } from 'react';

// Helper functions
function getDaysInMonth(year: number, month: number): number[] {
  const date = new Date(year, month, 1);
  const days: number[] = [];
  while (date.getMonth() === month) {
    days.push(date.getDate());
    date.setDate(date.getDate() + 1);
  }
  return days;
}

function getMonthName(monthIndex: number, locale: string): string {
  return new Date(2000, monthIndex).toLocaleString(locale, { month: 'long' });
}

interface CalendarProps {
  locale?: string; // Optional locale (default: system locale)
}

const Calendar: React.FC<CalendarProps> = ({ locale = navigator.language }) => {
  const today = new Date();
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const adjustedFirstDay = (firstDayOfMonth === 0) ? 6 : firstDayOfMonth - 1;

  const prevMonthDays: number[] = [];
  if (adjustedFirstDay > 0) {
    const prevMonth = currentMonth === 0 ? 11 : currentMonth - 1;
    const prevYear = currentMonth === 0 ? currentYear - 1 : currentYear;
    const prevMonthDaysCount = getDaysInMonth(prevYear, prevMonth).length;
    for (let i = prevMonthDaysCount - adjustedFirstDay + 1; i <= prevMonthDaysCount; i++) {
      prevMonthDays.push(i);
    }
  }

  const totalCells = 42;
  const nextMonthCells = totalCells - (prevMonthDays.length + daysInMonth.length);
  const nextMonthDays: number[] = [];
  for (let i = 1; i <= nextMonthCells; i++) {
    nextMonthDays.push(i);
  }

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentYear(currentYear - 1);
      setCurrentMonth(11);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentYear(currentYear + 1);
      setCurrentMonth(0);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  // Styles
  const containerStyle: React.CSSProperties = {
    width: '300px',
    backgroundColor: '#9BC7AF', // Outer background color
    borderRadius: '8px',
    padding: '16px',
    fontFamily: 'sans-serif',
    color: '#000', // Text color
  };

import React, { useState } from 'react';

// Helper functions
function getDaysInMonth(year: number, month: number): number[] {
  const date = new Date(year, month, 1);
  const days: number[] = [];
  while (date.getMonth() === month) {
    days.push(date.getDate());
    date.setDate(date.getDate() + 1);
  }
  return days;
}

function getMonthName(monthIndex: number, locale: string): string {
  return new Date(2000, monthIndex).toLocaleString(locale, { month: 'long' });
}

interface CalendarProps {
  locale?: string; // Optional locale (default: system locale)
}

const Calendar: React.FC<CalendarProps> = ({ locale = navigator.language }) => {
  const today = new Date();
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const adjustedFirstDay = (firstDayOfMonth === 0) ? 6 : firstDayOfMonth - 1;

  const prevMonthDays: number[] = [];
  if (adjustedFirstDay > 0) {
    const prevMonth = currentMonth === 0 ? 11 : currentMonth - 1;
    const prevYear = currentMonth === 0 ? currentYear - 1 : currentYear;
    const prevMonthDaysCount = getDaysInMonth(prevYear, prevMonth).length;
    for (let i = prevMonthDaysCount - adjustedFirstDay + 1; i <= prevMonthDaysCount; i++) {
      prevMonthDays.push(i);
    }
  }

  const totalCells = 42;
  const nextMonthCells = totalCells - (prevMonthDays.length + daysInMonth.length);
  const nextMonthDays: number[] = [];
  for (let i = 1; i <= nextMonthCells; i++) {
    nextMonthDays.push(i);
  }

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentYear(currentYear - 1);
      setCurrentMonth(11);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentYear(currentYear + 1);
      setCurrentMonth(0);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  // Styles
  const containerStyle: React.CSSProperties = {
    width: '300px',
    backgroundColor: '#9BC7AF', // Outer background color
    borderRadius: '8px',
    padding: '16px',
    fontFamily: 'sans-serif',
    color: '#000', // Text color
  };

   const headerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
    color: '#000',
    fontWeight: 'bold',
    fontSize: '20px'
  };

  const gridContainerStyle: React.CSSProperties = {
    backgroundColor: '#fff', // White background for the grid
    borderRadius: '15px',
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    textAlign: 'center',
    gap: '4px',
    padding: '8px',
  };

  const dayCellStyle: React.CSSProperties = {
    width: '33px',
    height: '36px',
    lineHeight: '36px',
    borderRadius: '50%',
    margin: '0 auto',
    textAlign: 'center',
  };

  const inactiveDayStyle: React.CSSProperties = {
    color: '#999',
  };

  const todayStyle: React.CSSProperties = {
    backgroundColor: '#49796b', // Highlight for today's date
    color: '#fff',
  };

  return (
    <div style={containerStyle}>
      {/* Header */}
     <div style={headerStyle} className='mx-2'>
        <div >
          {getMonthName(currentMonth, locale)} {currentYear}
        </div>
        <div className='flex gap-2'>
        <button onClick={handlePrevMonth}>&lt;</button>
        <button onClick={handleNextMonth}>&gt;</button>
        </div>
      </div>

      {/* Combined Grid Container */}
      <div style={gridContainerStyle}>
        {/* Day Names */}
        {dayNames.map((d) => (
          <div key={d} style={{ fontWeight: 'bold', color: '#7EB698', }}>
            {d}
          </div>
        ))}

        {/* Days */}
        {prevMonthDays.map((d, i) => (
          <div key={`prev-${i}`} style={{ ...dayCellStyle, ...inactiveDayStyle }}>{d}</div>
        ))}
        {daysInMonth.map((d) => {
          const isToday =
            d === today.getDate() &&
            currentMonth === today.getMonth() &&
            currentYear === today.getFullYear();
          return (
            <div
              key={`curr-${d}`}
              style={isToday ? { ...dayCellStyle, ...todayStyle } : dayCellStyle}
            >
              {d}
            </div>
          );
        })}
        {nextMonthDays.map((d, i) => (
          <div key={`next-${i}`} style={{ ...dayCellStyle, ...inactiveDayStyle }}>{d}</div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;

  const gridContainerStyle: React.CSSProperties = {
    backgroundColor: '#fff', // White background for the grid
    borderRadius: '15px',
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    textAlign: 'center',
    gap: '4px',
    padding: '8px',
  };

  const dayCellStyle: React.CSSProperties = {
    width: '33px',
    height: '36px',
    lineHeight: '36px',
    borderRadius: '50%',
    margin: '0 auto',
    textAlign: 'center',
  };

  const inactiveDayStyle: React.CSSProperties = {
    color: '#999',
  };

  const todayStyle: React.CSSProperties = {
    backgroundColor: '#49796b', // Highlight for today's date
    color: '#fff',
  };

  return (
    <div style={containerStyle}>
      {/* Header */}
      <div style={headerStyle}>
        <div >
          {getMonthName(currentMonth, locale)} {currentYear}
        </div>
        <div/>
        <div/><div/>
        <div/>
        <div/>
        <div/>
        <button onClick={handlePrevMonth}>&lt;</button>
        
        <button onClick={handleNextMonth}>&gt;</button>
      </div>

      {/* Combined Grid Container */}
      <div style={gridContainerStyle}>
        {/* Day Names */}
        {dayNames.map((d) => (
          <div key={d} style={{ fontWeight: 'bold', color: '#7EB698', }}>
            {d}
          </div>
        ))}

        {/* Days */}
        {prevMonthDays.map((d, i) => (
          <div key={`prev-${i}`} style={{ ...dayCellStyle, ...inactiveDayStyle }}>{d}</div>
        ))}
        {daysInMonth.map((d) => {
          const isToday =
            d === today.getDate() &&
            currentMonth === today.getMonth() &&
            currentYear === today.getFullYear();
          return (
            <div
              key={`curr-${d}`}
              style={isToday ? { ...dayCellStyle, ...todayStyle } : dayCellStyle}
            >
              {d}
            </div>
          );
        })}
        {nextMonthDays.map((d, i) => (
          <div key={`next-${i}`} style={{ ...dayCellStyle, ...inactiveDayStyle }}>{d}</div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
