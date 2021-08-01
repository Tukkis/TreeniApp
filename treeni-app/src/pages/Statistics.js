import React, { useState } from 'react';
import {
    ResponsiveContainer,
    XAxis,
    YAxis,
    CartesianGrid,
    LineChart,
    Tooltip,
    Line
  } from "recharts";

export default function Stats () {

    const [ chartXFormat, setChartXFormat ] = useState('week');

    const [ chartYFormat, setChartYFormat ] = useState('sets'); 

    const [ chartData, setChartData ] = useState([
      {date:"2021-06-26", sets:14},
      {date:"2021-06-27", sets:12},
      {date:"2021-06-28", sets:2},
      {date:"2021-06-29", sets:0},
      {date:"2021-06-30", sets:0},
      {date:"2021-06-31", sets:8},
      {date:"2021-07-1", sets:0}
    ])

    return(
        <div className="left-component">
            <ResponsiveContainer width="100%" aspect={3}>
              <LineChart
                width={500}
                height={300}
                data={chartData}
              >
                <CartesianGrid  horizontal="true" vertical="" stroke="#243240"/>
                <XAxis dataKey="date" tick={{fill:"#fff"}}/>
                <YAxis tick={{fill:"#fff"}} />
                <Tooltip contentStyle={{ backgroundColor: "white", color: "red" }} itemStyle={{ color: "red" }} cursor={false}/>
                <Line type="monotone" dataKey="sets" stroke="red" strokeWidth="5" dot={{fill:"#2e4355",stroke:"red",strokeWidth: 2,r:5}} activeDot={{fill:"#2e4355",stroke:"#8884d8",strokeWidth: 5,r:10}} />
                
              </LineChart>
            </ResponsiveContainer>
        </div>
    )
}