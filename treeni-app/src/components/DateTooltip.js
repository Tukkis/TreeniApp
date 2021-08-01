import React from 'react';

export default function DateTooltip ({ tooltipStyles, tooltipContent }) {
    return (
        <div id="date-tooltip" style={tooltipStyles}>
            {tooltipContent}
        </div>
    )
}