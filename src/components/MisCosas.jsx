import { useEffect, useState } from "react";
import { getCosas } from "../services/cosas.service";

export default function MisCosas() {
  const [cosas, setCosas] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    getCosas(token, setCosas);
  }, []);

  return (
    <div>
      <h1>Mis cosas</h1>
      
          {cosas.map((cosa, index)=>{
            <ul key={index}>  
                 <li>{cosa.nombre}</li>
            </ul>            
          })}
      
     
    </div>
  )

}
