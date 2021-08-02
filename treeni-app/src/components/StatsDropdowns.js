import React from 'react';

export default function StatsDropdowns ({ handleXFormat, handleYFormat }) {
    return(
        <div className="stats-dropdowns">
            <select defaultValue="week" name="stats-x" onChange={(e) => handleXFormat(e.target.value)}>
                <option value="week">week</option>
                <option value="month">month</option>
            </select>
            <select defaultValue="sets" name="stats-y" onChange={(e) => handleYFormat(e.target.value)}>
                <option value="sets">sets</option>
                <option value="excercises">excercises</option>
            </select>
        </div>
    )
}