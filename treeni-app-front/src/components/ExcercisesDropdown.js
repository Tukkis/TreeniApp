import React,{ useState, useEffect } from 'react';
import SetsDropdown from './SetsDropdown';

// Dropdown for Add new

export default function ExcercisesDropdown ({ componentsSets ,componentsExcercise, excerciseIndex, handleExcercises }) {
    
    return(
        <div id={`excercise${excerciseIndex}`} className="excercise-dropdown" key={`excercise${excerciseIndex}`}>
            <div className="excercise-dropdown-top">
            <select defaultValue={componentsExcercise} name={`excercise${excerciseIndex}`} onChange={(e) => handleExcercises(excerciseIndex, ['componentsExcercise',  e.target.value])}>
                <option value="" disabled>Select your excercise</option>
                <option value="Bench_press">Bench press</option>
                <option value="Pull_up">Pull up</option>
                <option value="Warm_up">Warm up</option>
            </select>
            <button className="delete-excercise-button" onClick={function(e) {
                e.preventDefault()  
                handleExcercises(excerciseIndex, 'remove')
                }
            }>X</button>
            </div>
            {componentsExcercise !== '' ? componentsSets.map(set => <SetsDropdown excerciseIndex={excerciseIndex} setIndex={set.setIndex} componentsExcercise={componentsExcercise} setReps={set.reps} setResistance={set.resistance} handleExcercises={handleExcercises} />) : ''} 
            {componentsExcercise !== '' ?  <button onClick={function(e) {
                e.preventDefault()  
                handleExcercises(excerciseIndex, 'addSet')
                }
            }>Add set</button>
            : ''}
        </div>
    )
}