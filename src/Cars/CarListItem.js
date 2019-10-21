import React from 'react';

export const CarItem = ({ carModel, carMaker, carYear, isbn, viewFieldName }) => {
    switch(viewFieldName) {
        case "all": return <div>
        <div>{carModel}</div>
        <div>{carMaker}</div>
        <div>{carYear}</div>
        <div>{isbn}</div>
        </div>;
        case "carModel": return <div>{carModel}</div>;
        case "carMaker": return <div>{carMaker}</div>;
        case "carYear": return <div>{carYear}</div>;
        case "isbn": return <div>{isbn}</div>
    }

}; 