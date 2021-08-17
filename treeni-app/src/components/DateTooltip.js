import React from 'react';
import {
    Link
  } from "react-router-dom";

// Date tooltip for calendar

export default function DateTooltip ({ tooltipStyles, tooltipContent }) {
    
    console.log(tooltipContent)

    return (
        <div id="date-tooltip" style={tooltipStyles}>
            <h4>{tooltipContent.date}</h4>
            <h3>{tooltipContent.excercise != '' ? tooltipContent.excercise : ''}</h3>
            <h5>{tooltipContent.set ? tooltipContent.set + '  ' + tooltipContent.resistance : ''}</h5>
            <Link className="add-link" to="/new">Add excercise</Link>
        </div>
    )
}