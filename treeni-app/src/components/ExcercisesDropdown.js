import React,{ useState, useEffect } from 'react';
import SetsDropdown from './SetsDropdown';

// Dropdown for Add new

export default function ExcercisesDropdown ({ componentsSets ,componentsExcercise, excerciseIndex, handleExcercises }) {
    
    return(
        <div id={`excercise${excerciseIndex}`} className="excercise-dropdown" key={`excercise${excerciseIndex}`}>
            <select defaultValue={componentsExcercise} name={`excercise${excerciseIndex}`} onChange={(e) => handleExcercises(excerciseIndex,e.target.value)}>
                <option value="" disabled>Select your excercise</option>
                <option value="Bench_press">Bench press</option>
                <option value="Pull_up">Pull up</option>
                <option value="Warm_up">Warm up</option>
            </select>
            {componentsExcercise !== '' ? componentsSets.map(set => ) : ''}
            <button onClick={() => handleExcercises(excerciseIndex, 'remove')}>X</button>
        </div>
    )
}