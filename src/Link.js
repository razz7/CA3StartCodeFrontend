import React, { useState,useEffect } from "react"
import ApiFacade from "./ApiFacade"

function Link() {
    const init = { 
        personName: "", 
        planetName: "",
        planetName2:"",
        planetName3:"",
        planetName4:""

        
       };

       const [swapiData, setSwapiData] = useState(init)

       useEffect(() => {
        ApiFacade().getSwapi().then(res => setSwapiData(res));
      }, []);

    return (
        <div>
            <p>SwapiAPI</p>
            <p>Best jedi: {swapiData.personName}</p>
            <p>Best planet: {swapiData.planetName}</p>
            <p>Some other planet: {swapiData.planetName2}</p>
            <p>Some other other planet: {swapiData.planetName3}</p>
            <p>Some other other planet: {swapiData.planetName4}</p>
            
        </div>
    )
}

export default Link

