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
import StatsDropdowns from '../components/StatsDropdowns';

export default function Stats () {

    const [ chartXFormat, setChartXFormat ] = useState('week');

    const [ chartYFormat, setChartYFormat ] = useState('sets'); 

    const [ chartData, setChartData ] = useState([
      {date:"2021-06-26", activity:14},
      {date:"2021-06-27", activity:12},
      {date:"2021-06-28", activity:2},
      {date:"2021-06-29", activity:0},
      {date:"2021-06-30", activity:0},
      {date:"2021-06-31", activity:8},
      {date:"2021-07-1", activity:0}
    ])

    function handleXFormat (format) {
      //Get from backend based on format
      let placeHolder = [...chartData]
      if (format === "week"){
        if(chartYFormat === "sets"){
          placeHolder = [
            {date:"2021-06-26", activity:14},
            {date:"2021-06-27", activity:12},
            {date:"2021-06-28", activity:2},
            {date:"2021-06-29", activity:0},
            {date:"2021-06-30", activity:0},
            {date:"2021-06-31", activity:8},
            {date:"2021-07-1", activity:0}
          ]
        } else if (chartYFormat === "excercises"){
          placeHolder = [
            {date:"2021-06-26", activity:2},
            {date:"2021-06-27", activity:1},
            {date:"2021-06-28", activity:1},
            {date:"2021-06-29", activity:0},
            {date:"2021-06-30", activity:0},
            {date:"2021-06-31", activity:1},
            {date:"2021-07-1", activity:0}
          ]
        }
      } else if(format === "month"){
        if(chartYFormat === "sets"){
          placeHolder = [
            {date:"January", activity:120},
            {date:"February", activity:100},
            {date:"April", activity:167},
            {date:"May", activity:214},
            {date:"June", activity:265},
            {date:"July", activity:245},
            {date:"August", activity:76},
            {date:"September", activity:80},
            {date:"October", activity:147},
            {date:"November", activity:123},
            {date:"December", activity:198}
          ]
        } else if (chartYFormat === "excercises"){
          placeHolder = [
            {date:"January", activity:12},
            {date:"February", activity:10},
            {date:"April", activity:14},
            {date:"May", activity:22},
            {date:"June", activity:25},
            {date:"July", activity:20},
            {date:"August", activity:9},
            {date:"September", activity:5},
            {date:"October", activity:14},
            {date:"November", activity:13},
            {date:"December", activity:18}
          ]
        }
      }
      setChartXFormat(format)
      setChartData(placeHolder)
    }

    function handleYFormat (format) {
      console.log(format, chartXFormat)
      //Get from backend based on format
      let placeHolder = [...chartData]
      if (format === "sets"){
        if(chartXFormat === "week"){
          placeHolder = [
            {date:"2021-06-26", activity:14},
            {date:"2021-06-27", activity:12},
            {date:"2021-06-28", activity:2},
            {date:"2021-06-29", activity:0},
            {date:"2021-06-30", activity:0},
            {date:"2021-06-31", activity:8},
            {date:"2021-07-1", activity:0}
          ]
        } else if (chartXFormat === "month"){
          placeHolder = [
            {date:"January", activity:120},
            {date:"February", activity:100},
            {date:"April", activity:167},
            {date:"May", activity:214},
            {date:"June", activity:265},
            {date:"July", activity:245},
            {date:"August", activity:76},
            {date:"September", activity:80},
            {date:"October", activity:147},
            {date:"November", activity:123},
            {date:"December", activity:198}
          ]
        }
      } else if(format === "excercises"){
        if(chartXFormat === "week"){
          placeHolder = [
            {date:"2021-06-26", activity:2},
            {date:"2021-06-27", activity:1},
            {date:"2021-06-28", activity:1},
            {date:"2021-06-29", activity:0},
            {date:"2021-06-30", activity:0},
            {date:"2021-06-31", activity:1},
            {date:"2021-07-1", activity:0}
          ]
        } else if (chartXFormat === "month"){
          placeHolder = [
            {date:"January", activity:12},
            {date:"February", activity:10},
            {date:"April", activity:14},
            {date:"May", activity:22},
            {date:"June", activity:25},
            {date:"July", activity:20},
            {date:"August", activity:9},
            {date:"September", activity:5},
            {date:"October", activity:14},
            {date:"November", activity:13},
            {date:"December", activity:18}
          ]
        }
      }
      setChartYFormat(format)
      setChartData(placeHolder)
    }

    return(
        <div id="statistics-component">
          <div className="line-component">
              <ResponsiveContainer aspect={3}>
                <LineChart
                  width={500}
                  height={300}
                  data={chartData}
                >
                  <CartesianGrid  stroke="#eee" strokeDasharray="5 5"/>
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip contentStyle={{ backgroundColor: "white", color: "red" }} itemStyle={{ color: "red" }} cursor={false}/>
                  <Line type="monotone" dataKey="activity" stroke="red" strokeWidth="5" dot={{fill:"#2e4355",stroke:"red",strokeWidth: 2,r:5}} activeDot={{fill:"#2e4355",stroke:"#8884d8",strokeWidth: 5,r:10}} />
                  
                </LineChart>
              </ResponsiveContainer>
          </div>
          <StatsDropdowns handleXFormat={handleXFormat} handleYFormat={handleYFormat} />
        </div>
    )
}