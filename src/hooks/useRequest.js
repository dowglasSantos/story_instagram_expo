import {useState, useEffect} from 'react';
import axios from 'axios';

export const useRequest = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        (async () => {
            const data = await axios.get('https://api.github.com/users')
            setData(data.data)
            
        })();
    }, []);


    return {data};
};