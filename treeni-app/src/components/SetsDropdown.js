import React, { useEffect, useState } from 'react';

// Sets dropdown for Excewrcise dropdown

export default function SetsDropdown ({ excerciseIndex, setIndex, componentsExcercise, setResistance, setReps, handleExcercises }) {

    const [ possibleResistances, setPossibleResistances ] = useState([])

    const [ possibleReps, setPossibleReps ] = useState([])


    function handlePossibleResistances (){
        // get from backend based on componentsExcercise
        let got = ['2,5kg','5kg','7,5kg','10kg']
        setPossibleResistances(got)
    }

    function handlePossibleReps (){
        // get from backend based on componentsExcercise
        let got = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20']
        setPossibleReps(got)
    }

    useEffect(() => {
        handlePossibleResistances()
        handlePossibleReps()
    }, [])


    return(
        <div key={`${excerciseIndex}${setIndex}`} className="set-dropdown">
            <select defaultValue={setReps} onChange={(e) => handleExcercises(excerciseIndex,[setIndex, 'reps', e.target.value])}>
                <option value="" disabled>reps</option>
                {possibleReps.map(possible => <option value={possible}>{possible}</option>)}
            </select>
            <select defaultValue={setResistance} onChange={(e) => handleExcercises(excerciseIndex,[setIndex, 'resistance', e.target.value])}>
                <option value="" disabled>resistance</option>
                {possibleResistances.map(possible => <option value={possible}>{possible}</option>)}
            </select>
        </div>
    )
}