import {useState, useEffect} from 'react'
import axios from 'axios'


export const GetResources = (endpoint) => {
    const [items, setItems] = useState([])

    const getItems = async () =>{
        const response = await axios.get(`http://localhost:3001/${endpoint}`)
        setTimeout(()=>{ setItems(response.data); }, 2222)
    }


    useEffect(()=>{
        getItems()
    }, [])

    return items;
}