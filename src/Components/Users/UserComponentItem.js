import React from "react";
//import Book from "../../assets/Images/Book.png";


const UserComponentItem = ({id, username, password}) => (
    <div className="content">
              <div className="text-center text-muted">
                <h1 key={id}>User Name: {username}</h1>
                {/* <img src={Book}  /> */}
                <br />
                <p>
                  <h3 key={id}>Password: {password}</h3>
                </p>
              </div>
            </div>
    );

export default UserComponentItem;