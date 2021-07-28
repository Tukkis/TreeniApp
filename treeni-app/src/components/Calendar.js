import React, { useState } from 'react';
import Calendar from 'react-calendar';

export default function MyCalendar ({ trainingData }) {

    const [ value, onChange ] = useState(new Date());

    function datesAreOnSameDay (first, second) {
        first = first.date
        let returnValue = false;
        if(first.getFullYear() === second.getFullYear() &&
        first.getMonth() === second.getMonth() &&
        first.getDate() === second.getDate()){
            returnValue = true
        }
        return returnValue
    }

    function markDays(date){
        let returnValue = '';
        const day = new Date();
        if (datesAreOnSameDay(date, day)){
            returnValue = "today"
        }
        return returnValue
    }

    return(
        <div className="left-component">
            <Calendar
            className={"react-calendar"}
            onChange={onChange}
            value={value}
            view={"month"}
            tileClassName={(date) => markDays(date)}
             />
        </div>
    )
}