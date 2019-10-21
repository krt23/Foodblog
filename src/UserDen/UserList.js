import React from 'react';
import {UserItem} from './UserListItem';

export default ({ userList, viewFieldName }) =>
    userList.map(item =>
        <UserItem
            firstName={item.first_name}
            lastName={item.last_name}
            email={item.email}
            photo={item.photo}
            viewFieldName={viewFieldName}
        />
    );
