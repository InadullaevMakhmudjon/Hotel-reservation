import React from 'react';
import './User.css';

function User({ hotelId, name, surname, phone, gender, number, floor}) {
  return (
    <div className="User">
        <h3>{`Name: ${name}`}</h3>
        <h3>{`Surname: ${surname}`}</h3>
        <h3>{`Phone: ${phone}`}</h3>
        <h3>{`Gender: ${gender}`}</h3>
        <h3>{`Number: ${number}`}</h3>
        <h3>{`Floor: ${floor}`}</h3>
    </div>
  );
}

export default User;
