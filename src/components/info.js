import React from 'react'
import {useState} from 'react'
function Info() {
   const [onOff, setOnOff] = useState(false)
    return (
        <div className=" flex">
            <div className="flex justify-center 	">
            <button onClick={()=> setOnOff(!onOff)} className="py-2 px-4 border-l-4 shadow-lg	 border-black text-xl font-bold font-serif underline italic bg-gray-300  rounded lg:ml-24 mr-4 my-2">Resources</button>
           
            </div>
            { onOff ?
            <div className=" bg-gray-200 p-2 rounded shadow-lg	 ">
                <div>
                <a target="_blank" rel="noopener noreferrer" className="text-center text-lg font-serif font-bold hover:text-blue-500" href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html" >
                    How To Protect Yourself And Others</a></div>
                    <div>
                <a target="_blank" rel="noopener noreferrer" className="text-center text-lg font-serif font-bold hover:text-blue-500" href="https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/quarantine.html">
                    When To Quarantine</a></div>
                    <div>
                <a target="_blank" rel="noopener noreferrer" className="text-center text-lg font-serif font-bold hover:text-blue-500" href="https://www.irs.gov/coronavirus/get-my-payment">
                    Your Stimulus Check Status</a></div>
            </div>
            :null}
        </div>
    )
}

export default Info
