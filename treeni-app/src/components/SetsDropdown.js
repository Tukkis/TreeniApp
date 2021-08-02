import React, { useEffect, useState } from 'react';

export default function SetsDropdown ({ setIndex, componentsExcercise }) {

    const [ possibleResistances, setPossibleResistances ] = useState([])

    function handlePossibleResistances (){
        // get from backend based on excercise
        let got = ['2,5kg','5kg','7,5kg','10kg']
        let options = [];
        for(let i = 0; i < got.length; i++){
            options.push(<option value={got[i]}>{got[i]}</option>)
        }
        setPossibleResistances(options)
    }

    useEffect(() => {
        handlePossibleResistances()
    }, [])

    return(
        <>
            <select defaultValue="" key={`set${setIndex}`}>
                <option value="" disabled>reps</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
            </select>
            <select defaultValue="">
                <option value="" disabled>resistance</option>
                {possibleResistances}
            </select>
        </>
    )
}