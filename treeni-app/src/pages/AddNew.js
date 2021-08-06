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
            excerciseIndex:1,
            componentsExcercise: '',
            componentsSets: [{
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
            copy.push()
        } else {
            console.log(copy)
            /* console.log(copy)
            let arr = copy.map(elem => elem.props.excerciseIndex !== i ? elem : '');
            console.log(arr) */
        }
        setExcercises(copy)
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="date" name="add-date" onChange={(e) => handleChange(e)} value={calendarDate.getFullYear() + '-' + (calendarDate.getMonth() < 10 ? '0' + calendarDate.getMonth() : calendarDate.getMonth()) + '-' + (calendarDate.getDate() < 10 ? '0' + calendarDate.getDate() : calendarDate.getDate())}></input>
                {excercises.map(excercise => <ExcercisesDropdown excerciseIndex={excercise.excerciseIndex} key={excercise.excerciseIndex} handleExcercises={handleExcercises} />)}
            </form>
            <button onClick={() => handleExcercises(1,'add')}>+</button>
            <div className="confirm-add">
                <h3>Add to diary</h3>
                <button>confirm</button>
            </div>
        </div>
    )
}