import { useState, useEffect } from 'react'
import axios from 'axios'

const useFetch = (endpoint, query) => {
    const [data, sendData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/estimated-salary/${endpoint}`,
        headers: {
            'x-rapidapi-key': '1bfb97edafmsh1dbdd5493725ceap1e966ajsn76eaec27cab1',
            'x-rapidapi-host': 'jsearch.p.rapidapi.com'
        },
        params: { ...query },

    };


    const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await axios.request
                (options);
            setData(response.data.data);
            setIsLoading(false);
        } catch (error) {
            setError(error);
            alert('There is an error')
        } finally {
            setIsLoading(false)
        }
    }


    useEffect(() => {
        fetchData();

    }
        , []);

    const reFetch = () => {
        setIsLoading(true);
        fetchData();
    }



    return { data, isLoading, error, reFetch };
}


export default useFetch;