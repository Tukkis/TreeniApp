import React, { useState } from 'react';
import Calendar from 'react-calendar';

export default function MyCalendar ({ trainingData }) {

    const [ value, onChange ] = useState(new Date());

    function datesAreOnSameDay (first, second) {
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
        let dateKey = date.date.getDate() + '.' + date.date.getMonth() + '.' + date.date.getFullYear()
        console.log(dateKey)
        if (datesAreOnSameDay(date.date, day)){
            returnValue = "today";
        }
        if(trainingData.hasOwnProperty((dateKey.toString()))){
            returnValue += " marked-date";
            console.log('!')
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