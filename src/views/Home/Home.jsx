import React, { useState, useEffect } from 'react';
import { EventEmitter } from '../../events/Events';
import { useHistory } from 'react-router';
import Hotel from '../../components/Hotel/Hotel';
import './App.css';

function Home() {
  const [hotels, setHotels] = useState([]);
  const history = useHistory();

  useEffect(() => {
    let unmounted = false;

    EventEmitter.emit('requestAllHotels', 'Give me');
    EventEmitter.on('getAllHotels', allHotels => {
      if(!unmounted) {
        setHotels(allHotels);
      }
    });
    return () => { unmounted = true }
  }, []);

  const back = () => {
    history.push('/');
  }

  return (
    <div className="App">
      <div>
        <h1 className='back-form' onClick={back}>{`<-`}</h1>
        <h1>Welcome to the app</h1>
      </div>
      {
        hotels.map(hotel => <Hotel key={hotel.id} { ...hotel }/>)
      }
    </div>
  );
}

export default Home;
