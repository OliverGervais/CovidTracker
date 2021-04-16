import axios from 'axios';

const urlData = "https://covid19.mathdro.id/api";

export const fetchData = async(country) => {
    let newurl = urlData;
    if(country){
        newurl = `${urlData}/countries/${country}`
    }

    try {
        const { data: {
            confirmed,
            recovered,
            deaths,
            lastUpdate,
            
        } } = await axios.get(newurl);

        const newData = {
            confirmed,
            recovered,
            deaths,
            lastUpdate,
           
        }

        return newData;
    } catch (error) {

        
    }
}

export const fetchDailySummary = async () => {
    try {
        const {data} = await axios.get(`${urlData}/daily`);
        const newData = data.map((dailySummary) => ({
            confirmed: dailySummary.confirmed.total,
            deaths: dailySummary.deaths.total,
            date: dailySummary.reportDate,

        }));
        return newData;
    } catch (error) {
        
    }
}

export const fetchcountries = async () =>{
    try {
        const {data: {countries}} = await axios.get(`${urlData}/countries`);
        return countries.map((country)=> country.name);
        
    } catch (error) {
        
    }
}




