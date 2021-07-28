import React from 'react';
import Calendar from '../components/Calendar';

export default function Diary ({ trainingData }) {

    console.log(trainingData)
    return(
        <div>
           <Calendar trainingData={trainingData} />
        </div>
    )
}