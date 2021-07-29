import React, { useState } from 'react';
import Calendar from '../components/Calendar';

export default function Diary () {

    const [ trainingData, setTrainingData ] = useState({
        "27.6.2021": {
          "Warm-up": {
            "20 min": "1x"
          },
          "Barbell-row": {
            "15x": "20kg",
            "10x": "25kg"
          }
        },
        "29.6.2021": {
          "Warm-up": {
            "15 min": "1x"
          },
          "Bench press": {
            "10x": "80kg",
            "5x": "90kg"
          }
        }
      })

    return(
        <div>
           <Calendar trainingData={trainingData} />
        </div>
    )
}