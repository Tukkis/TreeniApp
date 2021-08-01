import React from 'react';
import Calendar from 'react-calendar';

export default function MyCalendar ({ trainingData, handleDayClick, calendarDate, calendarDateChange }) {

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
        let dateKey = date.date.getFullYear() + '-' + (date.date.getMonth() < 10 ? '0' + date.date.getMonth() : date.date.getMonth()) + '-' + date.date.getDate();
        if (datesAreOnSameDay(date.date, day)){
            returnValue = "today";
        }
        if(trainingData.hasOwnProperty((dateKey.toString()))){
            returnValue += " marked-date";
        }
        return returnValue
    }

    return(
        <div className="left-component">
            <Calendar
            className={"react-calendar"}
            onChange={calendarDateChange}
            value={calendarDate}
            view={"month"}
            tileClassName={(date) => markDays(date)}
            onClickDay={(date, e) => handleDayClick(e,date)}
             />
        </div>
    )
}