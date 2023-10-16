import  { useEffect, useState } from 'react'

import axios from 'axios'

const useFetch = (endpoint,query) => {
  const [data,setData] = useState([])
  const [isLoading,setIsLoading] = useState(false)
  const [error,setError] = useState(null)
  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      'X-RapidAPI-Key': 'e58fecc33fmsh3955e2c25430f10p1762c2jsn842fa9ab06df',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    },
    params: {
      ...query
    }
  };
  
  const fetchData = async() =>{
    setIsLoading(true)
    try {
        const response = axios.request(options)
        setData((await response).data.data)
        setIsLoading(false)
    } catch (error) {
        setError(error)
        alert("An error occured")
    }finally{
        setIsLoading(false)
    }
  }
  useEffect(()=>{
    fetchData()
  },[])

  const refetch = () =>{
    setIsLoading(true)
    fetchData()
  }
  return {data,isLoading,error,refetch}
}

export default useFetch
