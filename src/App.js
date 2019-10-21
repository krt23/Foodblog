import React from "react";
//import logo from './logo.svg';
//import DisplayUsers from './components/DisplayUsers';
import "./App.css";
import {default} from "./Traveling";
import TravelRoute from "./TravelRoute";
import TravelPagination from "./TravelPagination";



const App = () => {
  
  return (
    <div className="Cars">
      <TravelRoute />
      <TravelPagination />
    </div>
  );
};

export default App;
