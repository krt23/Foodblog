import React from 'react';

export const UserListItem = ({ firstName, lastName, email, photo }) => (
    <div>
       <div>{firstName}</div>
       <div>{lastName}</div>
       <div>{email}</div>
       <div><img src={photo} alt="" /></div>
    </div>
);


// export const FirstName = ({ firstName }) => (
//     <div>{firstName}</div>
// );

// export const LastName = ({ lastName }) => (
//     <div>{lastName}</div>
// );

// export const Email = ({ email }) => (
//     <div>{email}</div>
// );

// export const Photo = ({ photo }) => (
//     <div><img src={photo} alt="" /></div>
// );

// export const UserList= ({ firstName, lastName, email, photo }) => (
//     <div>
//       <FirstName firstName={firstName} />
//       <LastName lastName={lastName} />
//       <Email email={email} />
//       <Photo photo={photo} />
//     </div>
// );

