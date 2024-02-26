import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function calender() {
    const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div>
      <h1>Calendar</h1>
      <div>
        <Calendar
          onChange={onChange}
          value={date}
        />
      </div>
    </div>
  )
}

export default calender