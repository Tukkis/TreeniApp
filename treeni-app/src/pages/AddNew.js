import React, { useEffect, useState } from 'react';
import ExcercisesDropdown from '../components/ExcercisesDropdown';

export default function AddNew ({ calendarDate }) {
    
    const [ value, setValue ] = useState({
        user: 'currentUser',
        date: (calendarDate.getDate() < 10 ? '0' + calendarDate.getDate() : calendarDate.getDate()) + '.' + (calendarDate.getMonth() < 10 ? '0' + calendarDate.getMonth() : calendarDate.getMonth()) + '.' + calendarDate.getFullYear(),
        trainings: []
    })

    const [ excercises, setExcercises ] = useState([]);

    function handleChange(e){
        let copy = {...value};
        console.log(copy)
        setValue(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(value)
    }
    
    function handleExcercises(num, operation){
        let copy = [];
        if(excercises.length > 0){
            copy = [...excercises]
        }
        if(operation === 'init'){
            for(let i = 0; i < num; i++){
                copy.push(<ExcercisesDropdown excerciseIndex={i} key={i} handleExcercises={handleExcercises}/>)
            }
        } else if (operation === 'add'){
            copy.push(<ExcercisesDropdown excerciseIndex={copy.length > 0 ? (copy[copy.length - 1].props.excerciseIndex + 1) : 1} key={copy.length > 0 ? (copy[copy.length - 1].props.excerciseIndex + 1) : 1} handleExcercises={handleExcercises}/>)
        } else if (operation === 'remove'){
            console.log(copy)
            /* console.log(copy)
            let arr = copy.map(elem => elem.props.excerciseIndex !== num ? elem : '');
            console.log(arr) */
        }
        setExcercises(copy)
    }

    
    useEffect(() => {
        handleExcercises(1, 'init')
    }, [])

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="date" name="add-date" onChange={(e) => handleChange(e)} value={calendarDate.getFullYear() + '-' + (calendarDate.getMonth() < 10 ? '0' + calendarDate.getMonth() : calendarDate.getMonth()) + '-' + (calendarDate.getDate() < 10 ? '0' + calendarDate.getDate() : calendarDate.getDate())}></input>
                {excercises}
            </form>
            <button onClick={() => handleExcercises(1,'add')}>+</button>
            <div className="confirm-add">
                <h3>Add to diary</h3>
                <button>confirm</button>
            </div>
        </div>
    )
}