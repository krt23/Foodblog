import React from 'react';

export UserList = ({ firstName, lastName, email, photo, viewFieldName }) =>
    <div>
        {(viewFieldName === 'first_name' || viewFieldName === 'all') &&
            <div>
                {firstName}
            </div>}
        {(viewFieldName === 'last_name' || viewFieldName === 'all') &&
            <div>
                {lastName}
            </div>}
        {(viewFieldName === 'email' || viewFieldName === 'all') &&
            <div>
                {email}
            </div>}
        {(viewFieldName === 'photo' || viewFieldName === 'all') &&
            <div>
                <img src={photo} alt="" />
            </div>}
    </div>;
