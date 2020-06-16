import React from "react";
import {client} from "../../api/client";
import loading from "../../images/loading.gif";
import RecipesComponentItem from "./RecipesComponentItem";
import "./style.scss";

class Recipes extends React.Component {
    state = {
        isLoading: true,
        data: [],
        error: false
    };

    componentDidMount() {
        setTimeout(() => {
            client
                .get("/receipts")
                .then(data => this.setState({isLoading: false, data: data.data}))
                .catch(error => this.setState({isLoading: false, error: true}));
        }, 1000);
    }

    render() {
        const {isLoading, data} = this.state;
        console.log(data);

        return (
            <React.Fragment>
                {isLoading && (
                    <div className="container text-center loader">
                        <img src={loading} alt="loading"/>{" "}
                    </div>
                )}
                {!isLoading && (
                    <div className="container pt-3">
                        <h2 className="collectionTitle">Recipes</h2>
                        <div className="row">
                            {data.map(item => (
                                <RecipesComponentItem
                                    id={item.id}
                                    name={item.name}
                                    img={item.img}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </React.Fragment>
        );
    }
}

export default Recipes;
