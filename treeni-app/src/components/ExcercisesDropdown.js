import React,{ useState, useEffect } from 'react';
import SetsDropdown from './SetsDropdown';

// Dropdown for Add new

export default function ExcercisesDropdown ({ excerciseIndex, handleExcercises }) {
    
    const [ sets, setSets ] = useState([]);

    const [ componentsExcercise, setComponentsExcercise ] = useState('')
    
    function handleSets(num, operation){
        let copy = [...sets];
        if(operation === 'init'){
            for(let i = 0; i < num; i++){
            copy.push(<SetsDropdown setIndex={i} key={i} componentsExcercise={componentsExcercise} />)
            }
        } else if (operation === 'add'){

        } else if (operation === 'remove'){

        }
        setSets(copy)
    }

    useEffect(() => {
        handleSets(1, 'init')
    }, [])


    return(
        <div id={`excercise${excerciseIndex}`} className="excercise-dropdown" key={`excercise${excerciseIndex}`}>
            <select defaultValue="" name={`excercise${excerciseIndex}`} onChange={(e) => setComponentsExcercise(e.target.value)}>
                <option value="" disabled>Select your excercise</option>
                <option value="Bench_press">Bench press</option>
                <option value="Pull_up">Pull up</option>
                <option value="Warm_up">Warm up</option>
            </select>
            {componentsExcercise !== '' ? sets : ''}
            <button onClick={() => handleExcercises(excerciseIndex, 'remove')}>X</button>
        </div>
    )
}