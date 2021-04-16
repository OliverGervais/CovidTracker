import React, {useState, useEffect} from 'react'
import  { fetchcountries } from "../api/index"


function SelectCountry({handleCountrySwap}) {
    const [gotCountries, setGotCountries] = useState([]);
    useEffect(() => {
        const getCountries = async () => {
            setGotCountries(await fetchcountries());
        }
        getCountries();
    }, [setGotCountries])
    
    
    return (
        <div>
            <form className='flex justify-center '>
            <select defaultValue="" onChange={(e)=>handleCountrySwap(e.target.value)} className='flex  shadow-lg	 w-96 px-4 py-6 lg:mr-24  border-r-4 border-black rounded' >
                
                {gotCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
                
</select>

            </form>
        </div>
    )
}

export default SelectCountry
