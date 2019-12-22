import React, { useState, useEffect } from 'react';
import { EventEmitter } from '../../events/Events';
import User from '../../components/User/User';
import { useParams, useHistory } from 'react-router';
import './Hotel.css';

function Home() {
  const [users, setUsers] = useState([]);
  const { name } = useParams();
  const history = useHistory();

  useEffect(() => {
    let unmounted = false;
    
    EventEmitter.emit('requestUsers', name);
    EventEmitter.on('getUsers', hotels => {
      if(!unmounted) {
        setUsers(hotels.find(hotel => hotel.name === name ).forms)
      }
    });
    return () => { unmounted = true }
  }, [name]);

  const back = () => {
    history.push('/');
  }

  return (
    <div className="App">
      <div>
        <h1 className='back-form' onClick={back}>{`<-`}</h1>
        <h1>{`Welcome to ${name} hotel`}</h1>
      </div>
      <h1>------------------------------------------------</h1>
      <div className='user-container'>
        {
          users.map((user, index) => (
            <User key={index} { ...user }/>
          ))
        }
      </div>
    </div>
  );
}

export default Home;
