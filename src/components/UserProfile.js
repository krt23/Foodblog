import React from 'react';

export const UserProfile = ({ firstName, lastName, email, photo }) => (
    <div>
       <div>{firstName}</div>
       <div>{lastName}</div>
       <div>{email}</div>
       <div><img src={photo} alt='photo'/></div>
    </div>
  )
