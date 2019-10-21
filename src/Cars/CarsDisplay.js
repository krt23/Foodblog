import React from "react";
import { CarsProfile } from "./CarsProfile";
import { CarsArray } from "./CarsArray";

class CarsDisplay extends React.Component {
  render() {
    return (
        CarsArray.map(car => (
        <CarsProfile
        key={car.id}
        carModel={car.carModel}
        carMaker={car.carMaker}
        carYear={car.carYear}
        isbn={car.isbn}
        />
        ))
    );
  }
}

export default CarsDisplay;
