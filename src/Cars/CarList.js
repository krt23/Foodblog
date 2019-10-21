import React from 'react';
import {CarItem} from './CarListItem';
import {CarsArray} from './CarsArray';

export default ({ viewFieldName }) =>
    CarsArray.map(item =>
        <CarItem
            key={item.id}
            carModel={item.carModel}
            carMaker={item.carMaker}
            carYear={item.carYear}
            isbn={item.isbn}
            viewFieldName={viewFieldName}
        />
    );
