import React, { useEffect, useState } from 'react';
import ExcercisesDropdown from '../components/ExcercisesDropdown';

// new Route

export default function AddNew ({ calendarDate }) {
    
    const [ value, setValue ] = useState({
        user: 'currentUser',
        date: (calendarDate.getDate() < 10 ? '0' + calendarDate.getDate() : calendarDate.getDate()) + '.' + (calendarDate.getMonth() < 10 ? '0' + calendarDate.getMonth() : calendarDate.getMonth()) + '.' + calendarDate.getFullYear(),
        trainings: []
    })

    const [ excercises, setExcercises ] = useState([
        {
            excerciseIndex: 0,
            componentsExcercise: '',
            componentsSets: [{
                setIndex: 0,
                reps: '',
                resistance: ''
            }]
        }
    ]);

    function handleChange(e){
        let copy = {...value};
        console.log(copy)
        setValue(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(value)
    }
    
    function handleExcercises(i, operation){
        let copy = [];
        if(excercises.length > 0){
            copy = [...excercises]
        }
        if (operation === 'remove'){
            // When removing an excerciseDropdown
            copy = copy.filter(excercise => excercise.excerciseIndex !== i)
        } else if (operation === 'add') {
            // When adding an excerciseDropdown
            copy.push({
                excerciseIndex: copy[copy.length - 1].excerciseIndex + 1,
                componentsExcercise: '',
                componentsSets: [{
                    setIndex: 0,
                    reps: '',
                    resistance: ''
                }]
            })
        } else if (operation === 'addSet') {
            // When adding a set to excerciseDropdown
            for (let index in copy){
                if (copy[index].excerciseIndex === i) {
                    copy[index].componentsSets.push({
                        setIndex: copy[index].componentsSets.length,
                        reps: '',
                        resistance: ''
                    })
                }
            }   
        } else if(operation.length === 2) {
            // When modifying an excerciseDropdown, operation is [key, value], where key is key in excercise states object and value is the new value assigned to that key
            for (let index in copy) {
                if (copy[index].excerciseIndex === i) {
                   copy[i][operation[0]] = operation[1];
                   break;
                }
            }
        } else {
            // When modifying an excerciseDropdowns set, operation is [setIndex, key, value], where key is key in excercise states object and value is the new value assigned to that key
            for (let exIndex in copy) {
                if (copy[exIndex].excerciseIndex === i) {
                    for (let seIndex in copy[exIndex].componentsSets) {
                        console.log(copy[exIndex].componentsSets[seIndex])
                        if (copy[exIndex].componentsSets[seIndex].setIndex === operation[0]) {
                            copy[exIndex].componentsSets[seIndex][operation[1]] = operation[2];
                            break;
                        }
                    }   
                }
            }
        }
        console.log(copy)

        setExcercises(copy)
    }


    return (
        <div className="left-component">
            <form id="add-excercises-form" onSubmit={handleSubmit}>
                <input type="date" name="add-date" onChange={(e) => handleChange(e)} value={calendarDate.getFullYear() + '-' + (calendarDate.getMonth() < 10 ? '0' + calendarDate.getMonth() : calendarDate.getMonth()) + '-' + (calendarDate.getDate() < 10 ? '0' + calendarDate.getDate() : calendarDate.getDate())}></input>
                {excercises.map(excercise => <ExcercisesDropdown componentsSets={excercise.componentsSets} componentsExcercise={excercise.componentsExcercise} excerciseIndex={excercise.excerciseIndex} key={excercise.excerciseIndex} handleExcercises={handleExcercises} />)}
            </form>
            <button onClick={() => handleExcercises(1,'add')}>Add excercise</button>
            <div className="confirm-add">
                <h3>Add to diary</h3>
                <button>confirm</button>
            </div>
        </div>
    )
}