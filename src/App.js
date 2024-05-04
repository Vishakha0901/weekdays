import './App.css';
import { useEffect, useState } from 'react';
import ApplicationCard from './Components/ApplicationCard';
// import Filter from './Components/Filter';

function App() {

  const [data,setData]=useState({});
  const [count,setCount]=useState(15);
  function fetchData()
  {
   
    return new Promise((resolve,reject)=>{

  fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", 
    {method: "POST", 
    body:JSON.stringify({ "limit": count, "offset": count}),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
    }
  ).
  then((res)=> res.json()).
  then((res)=>
      // console.log(res),
      
      setData(res)

      ).catch((err)=>reject(err))
          
      })
    }

     const handleInfiniteScroll= ()=>{

      try{
        if (window.innerHeight + document.documentElement.scrollTop+1 >= document.documentElement.scrollHeight) {
          setCount(count+6)
      }      }
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
      <div >
       <ApplicationCard cardData={data}/>
      </div>
    );
}

export default App;
