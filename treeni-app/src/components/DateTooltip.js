import React from 'react';
import Parser from 'html-react-parser';
import {
    Link
  } from "react-router-dom";

// Date tooltip for calendar

export default function DateTooltip ({ tooltipStyles, tooltipContent }) {
    return (
        <div id="date-tooltip" style={tooltipStyles}>
            {Parser(tooltipContent)}
            <Link className="add-link" to="/new">Add excercise</Link>
        </div>
    )
}