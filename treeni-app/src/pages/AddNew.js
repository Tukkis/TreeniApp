import React, { useState } from 'react'

export default function AddNew ({ calendarDate }) {
    
    const [ value, setValue ] = useState({
        user: 'currentUser',
        date: (calendarDate.getDate() < 10 ? '0' + calendarDate.getDate() : calendarDate.getDate()) + '.' + (calendarDate.getMonth() < 10 ? '0' + calendarDate.getMonth() : calendarDate.getMonth()) + '.' + calendarDate.getFullYear(),
        trainings: []
    })

    function handleChange(e){
        let copy = {...value};
        console.log(copy)
        setValue(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(value)
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" id="" onChange={handleChange}/>
                </label>
                <label>
                    Bench:
                    <input type="text" name="bench" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}