import React, { useEffect, useState } from 'react'
import { fetchDailySummary } from '../api/'
import Chart from "react-google-charts";


function Graf({data, country}) {
    const [dailySummary, setDailySummary] = useState([]);
    
    const dailyconfirmed = dailySummary.map((data) => [new Date(data.date), data.confirmed, data.deaths])
    const deathWdate = dailySummary.map((data) => [new Date(data.date), data.deaths])
        const title = [['x', 'confirmed', "deaths"]]
        const newdata = title.concat(dailyconfirmed)
        const title2 = [['x', "deaths"]]
        const newdata2 = title2.concat(deathWdate)

        

       

       
    useEffect(() => {
        const getAPI = async () => {
            const initialDailyData = await fetchDailySummary();
            setDailySummary(initialDailyData)
          }
          getAPI();
        }, []);
        

   
    return (  
      <>
      <div className="text-center rounded rounded-b-none text-xl font-serif underline italic front-bold bg-white lg:mx-24 border-l-8 border-black mt-4 pt-4 ">
            <h1>Global Chart</h1>
          </div>
        <div className=" mx-0 lg:mx-24 border-l-8 border-black  shadow-lg	">
          
          { dailyconfirmed !== null ? (
          <Chart 
          
  width={'100%'}
  height={'500px'}
  chartType="LineChart"
  loader={<div>Loading Chart</div>}
  data={newdata}
  options={{
    hAxis: {
      title: 'Time',
    },
    vAxis: {
      title: 'Amout infected',
    },
  }}
  rootProps={{ 'data-testid': '1' }}
/>
): null}
</div>
<div className=" mx-0 lg:mx-24 border-l-8 border-black  shadow-lg	 rounded rounded-t-none">
          { dailyconfirmed !== null ? (
          <Chart 
          
  width={'100%'}
  height={'500px'}
  chartType="LineChart"
  loader={<div>Loading Chart</div>}
  data={newdata2}
  options={{
    hAxis: {
      title: 'Time',
    },
    vAxis: {
      title: 'Amout infected',
    },
  }}
  rootProps={{ 'data-testid': '1' }}
/>
): null}
</div>

          
    


</>
         
        
    )
}

export default Graf
