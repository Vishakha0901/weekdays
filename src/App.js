import './App.css';
import { useEffect, useState } from 'react';
import ApplicationCard from './Components/ApplicationCard';
import Filter from './Components/Filter';

function App() {

  const [data,setData]=useState([]);
  const [count,setCount]=useState(0);
  const [filteredData, setFilteredData] = useState([]);
  function fetchData()
  {
   
    return new Promise((resolve,reject)=>{

  fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", 
    {method: "POST", 
    body:JSON.stringify({ "limit": 15, "offset": count}),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
    }
  ).
  then((res)=> res.json()).
  then((res)=>      
      setData(prev => [...prev, ...res.jdList])
      ).catch((err)=>reject(err))
          
      })
    }

     const handleInfiniteScroll= ()=>{

      try{
        if (window.innerHeight + document.documentElement.scrollTop+1 >= document.documentElement.scrollHeight) {
          setCount(count+1)
      }      
    }
      catch(error){
        console.log(error)
      }
     };

    useEffect(()=>{
      fetchData()
    },[count])

    useEffect(()=>{
      window.addEventListener("scroll",handleInfiniteScroll);
      return ()=> window.removeEventListener("scroll",handleInfiniteScroll);
    })

    return (
      <div>
       <Filter cardData={data} setFilterData={setFilteredData}/>
       <ApplicationCard cardData={filteredData?.length > 0 ? filteredData : data}/>
      </div>
    );
}

export default App;
