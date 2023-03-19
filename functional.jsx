import React,  { useState, useEffect} from "react"; 


export default function FunctionalClock(props) {

    const PersonalData = {
        fecha: new Date(),
         edad: 0,
         nombre: "Joha",
         apellidos: "Lopez D"
    }

    const [data, setData] = useState(PersonalData); 
    
    useEffect(()=>{
        const intervalId = setInterval(() => {
            setData(prevState => {
              const edad = prevState.edad + 1;
              return {
                ...prevState,
                fecha: new Date(),
                edad
              };
            });
          }, 2000);
          console.log(intervalId)
          return () => clearInterval(intervalId);
    }, []);
        
  
  return (
    <div>
      <h2>
         Hora Actual:
         {data.fecha.toLocaleTimeString()}
         </h2>
         <h3>{data.nombre} {data.apellidos}</h3>
         <h1>Edad: {data.edad}</h1>
    </div>
  )
}
