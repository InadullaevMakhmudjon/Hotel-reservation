import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router'
import { EventEmitter } from '../../events/Events';
import './Auth.css';

function Auth() {
  const [hotelId, setHotel] = useState([]);
    const history = useHistory();
    const { id } = useParams();

    useEffect(() => {
      let unmounted = false;
      
      EventEmitter.on('getError', error => {
        if(!unmounted) {
          alert(error);
        }
      });
      EventEmitter.on('Authorized', name => {
        if(!unmounted) {
          history.push(`/home/${name}`);
        }
      });
      return () => { unmounted = true }
    }, [id, history]); 


    const asUser = () => {
      history.push('/hotels');
    }

    const asHotel = () => {
      EventEmitter.emit('Authorize', hotelId);
    }

  return (
    <div className="Auth">
      <h1>Welcome to the app</h1>
      <div className="auth-container">
          <div className='hotel-container-auth'>
            <input onChange={e => setHotel(e.target.value)} type='text' placeholder='Hotel id'></input>
            <button onClick={asHotel}>Hotel</button>
          </div>
          <button onClick={asUser} className='box2 box'>User</button>
      </div>
    </div>
  );
}

export default Auth;
