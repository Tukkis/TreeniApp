import React, { useState } from 'react';
import Calendar from '../components/Calendar';
import DateTooltip from '../components/DateTooltip';

// Diary Route

export default function Diary ({ calendarDate, calendarDateChange }) {
    
    const [ tooltipStyles, setTooltipStyles ] = useState({
      height  : 0,
      width: 0,
      top: 0,
      left: 0,
      display: 'none'
    })
  
    const [ tooltipContent, setTooltipContent ] = useState({
      date: '',
      excercise:'',
      set:'',
      resistance:''
    })

    const [ trainingData, setTrainingData ] = useState({
      "2021-06-27": {
        "Warm-up": {
          "20 min": "1x"
        },
        "Barbell-row": {
          "15x": "20kg",
          "10x": "25kg"
        }
      },
      "2021-06-29": {
        "Warm-up": {
          "15 min": "1x"
        },
        "Bench press": {
          "10x": "80kg",
          "5x": "90kg"
        }
      }
    })

    function handleTooltipStyleChange(target){
      const copy = {...tooltipStyles};
      copy.left = target.classList.contains('marked-date') ? target.offsetLeft + (target.offsetWidth - (target.offsetWidth * 2.4)) / 2 + 'px' : target.offsetLeft + (target.offsetWidth - (target.offsetWidth * 1.2)) / 2 + 'px';
      copy.top = target.offsetTop + target.offsetHeight + 'px';
      copy.width = target.classList.contains('marked-date') ? (target.offsetWidth * 2.4) + 'px' : (target.offsetWidth * 1.2) + 'px';
      copy.height = target.classList.contains('marked-date') ? '200px' : '100px';
      copy.display = 'block';
      setTooltipStyles(copy)
    }

    function handleDayClick(e, date){
      calendarDateChange(date)
      let target = e.target
      if (target.classList.length < 1) {
        target = e.target.parentElement;
      }
      let dateKey = date.getFullYear() + '-' + (date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth()) + '-' + date.getDate();
      let copy = {
        date: dateKey,
        excercise:'',
        set:'',
        resistance:''
      }
      if(trainingData.hasOwnProperty((dateKey.toString()))){
        for (const [excercise, sets] of Object.entries(trainingData[dateKey])) {
          copy.excercise = excercise;
          for (const [set, resistance] of Object.entries(sets)) {
            copy.set = set;
            copy.resistance = resistance;
          }
        }
      } 
      setTooltipContent(copy)
      handleTooltipStyleChange(target)
    }
      
    return(
        <div id="diary">
           <Calendar calendarDate={calendarDate} calendarDateChange={calendarDateChange} trainingData={trainingData} handleDayClick={handleDayClick} />
           <DateTooltip tooltipStyles={tooltipStyles} tooltipContent={tooltipContent} />
        </div>
    )
}