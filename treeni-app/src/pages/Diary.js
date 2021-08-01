import React, { useState } from 'react';
import Calendar from '../components/Calendar';
import DateTooltip from '../components/DateTooltip';

export default function Diary () {
    
    const [ tooltipStyles, setTooltipStyles ] = useState({
      width: 0,
      top: 0,
      left: 0,
      display: 'none'
    })
  
    const [ tooltipContent, setTooltipContent ] = useState('')

    const [ calendarDate, calendarDateChange ] = useState(new Date());

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
      copy.left = target.offsetLeft + (target.offsetWidth - (target.offsetWidth * 1.2)) / 2 + 'px';
      copy.top = target.offsetTop + target.offsetHeight + 'px';
      copy.width = (target.offsetWidth * 1.2) + 'px';
      copy.display = 'block';
      setTooltipStyles(copy)
    }

    function handleDayClick(e, date){
      calendarDateChange(date)
      let target = e.target
      if (target.classList.length < 1) {
        target = e.target.parentElement;
      }
      handleTooltipStyleChange(target)
      console.log(date)
      setTooltipContent((date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + '.' + (date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth()) + '.' + date.getFullYear())
    }
      
    return(
        <div id="diary">
           <Calendar calendarDate={calendarDate} calendarDateChange={calendarDateChange} trainingData={trainingData} handleDayClick={handleDayClick} />
           <DateTooltip tooltipStyles={tooltipStyles} tooltipContent={tooltipContent} />
        </div>
    )
}