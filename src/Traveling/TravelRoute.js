import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import { Nav, NavLink } from "reactstrap";
import {TravelInfo} from "./TravelInfo";
import "./style.css"


export default function TravelRoute() {
  return (
    <Router>
      <div>
        <Nav className="Nav">
          <NavLink className="Nav-item" href="home">Home</NavLink> 
          <NavLink className="Nav-item" href="about">About</NavLink> 
          <NavLink className="Nav-item" href="countries">Countries</NavLink> 
          <NavLink className="Nav-item" href="contacts">Contact us</NavLink> 
          <NavLink className="Nav-item" href="author">About author</NavLink> 
        </Nav>

        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/countries">
            <Country />
          </Route>
          <Route path="/countries/:countryId">
            <Countries />
          </Route>
          <Route path="/contacts">
            <Contacts />
          </Route>
          <Route path="/author">
            <Author />
            </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Countries() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Countries</h2>

      <ul>
        {TravelInfo.map(item => (
          <li>
            <Link to={/countries/`${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Country(props) {
  let { countryId } = useParams();
  return <h3>Requested country ID: {TravelInfo[countryId].text}</h3>;
}

function Contacts() {
  return <h2>Contact us</h2>;
}

function Author() {
  return <h2>About author</h2>;
}
