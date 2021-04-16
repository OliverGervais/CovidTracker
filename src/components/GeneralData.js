import React from 'react'
import CountUp from 'react-countup'
import Chart from "react-google-charts";




function GeneralData({data:{confirmed, recovered, deaths, lastUpdate}}) {
  



    if(!confirmed){
        return "Please wait";
        
    }
    const barData = [["",'recovered', 'deaths',"confirmed"],["", recovered.value, deaths.value,confirmed.value]]
    return (
        <>
        <div className='lg:flex justify-center bg-gray-300 lg:mx-24 border-l-8  border-black  rounded rounded-b-none rounded-r-none '>

            <article className='lg:flex   	 '>
                    <main>
                        <h1 className='font-medium text-lg bg-gray-300 px-16 lg:px-10 xl:px-30 font-serif text-black rounded rounded-r-none rounded rounded-b-none'>Infected</h1>
                        <div className=' bg-white xl:px-30  px-16 lg:px-10 lg:rounded lg:rounded-b-none'>
                        <CountUp  className='font-medium text-lg font-serif text-black  'start={0}
                        end={confirmed.value} duration={0.7} separator="'"/></div>
                    </main>
            </article>

            <article className='lg:flex '>
                    <main>
                        <h1  className='font-medium text-lg font-serif text-black  bg-gray-300 px-16  xl:px-30  lg:px-10 '>Recovered</h1>
                        <div className=' bg-white  xl:px-30  px-16 lg:px-10'>
                        <CountUp  className='font-medium text-lg font-serif text-black 'start={0}
                        end={recovered.value} duration={0.7} separator="'"/></div>
                    </main>
            </article>

            <article className='lg:flex  '>
                    <main>
                        <h1 className='font-medium text-lg font-serif text-black   bg-gray-300 px-16 xl:px-30  lg:px-10  '>Deaths</h1>
                        <div className=' bg-white  xl:px-30  px-16 lg:px-10'>
                        <CountUp  className='font-medium text-lg font-serif text-black 'start={0}
                        end={deaths.value} duration={0.7} separator="'"/></div>
                      </main>
            </article>
            <article className='lg:flex  	'>
                    <main>
                        <h1 className='font-medium text-lg font-serif text-black  bg-gray-300 xl:px-30 rounded rounded-l-none	  px-14 lg:px-10 rounded-b-none  '>Update</h1>
                        <div className=' bg-white  xl:px-30  px-14 lg:px-10 lg:rounded lg:rounded-b-none'>
                        <h1  className='font-medium text-lg font-serif text-black'>{new Date(lastUpdate).toDateString()}</h1></div>
                      </main>
            </article>
            
            </div>
            <div className=" mx-0 lg:mx-24  border-black shadow-lg border-l-8	rounded rounded-t-none ">
            { confirmed !== null ? (
                
                <Chart 
                
        width={'100%'}
        height={'500px'}
        chartType="BarChart"
        loader={<div>Loading Chart</div>}
        data={barData}
        options={{
          hAxis: {
            title: 'Number Of People',
          },
          vAxis: {
            title: 'Amout infected',
          },
        }}
        rootProps={{ 'data-testid': '1' }}
      />): null}
     



            
          </div>
          </>
            
        
    )
}

export default GeneralData
