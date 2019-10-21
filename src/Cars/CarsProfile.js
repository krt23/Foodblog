import React from 'react';
import "./styles.css"

export const CarsProfile = ({ carMaker, carModel, carYear, isbn }) => (
    <div className="Cars">
        
        <div className="Cars-column">{carMaker}</div>
       
        <div className="Cars-column"> {carModel} </div>
       
        <div className="Cars-column">{carYear}</div>
    
        <div className="Cars-column">{isbn}</div>
       
    </div>
  )