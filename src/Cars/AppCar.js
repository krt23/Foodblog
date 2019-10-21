import React from 'react';
import CarList from './CarList';
import {CarsArray} from './CarsArray';

class AppCar extends React.Component {
    state = {
        option: 'all'
    };

    changeFieldOption = event => this.setState({ option: event.target.value });

    render() {
        const { option } = this.state;
        return (
            <div className="App">
                <select value={option} onChange={this.changeFieldOption}>
                    <option value="all">Show all</option>
                    <option value="carModel">Car Model</option>
                    <option value="carMaker">Car Maker</option>
                    <option value="carYear">Year</option>
                    <option value="isbn">Isbn</option>
                </select>
                <CarList viewFieldName={option} />
            </div>
        );
    }
}

export default AppCar;
