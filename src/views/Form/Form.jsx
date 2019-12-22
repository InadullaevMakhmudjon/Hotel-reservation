import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router';
import { EventEmitter } from '../../events/Events';
import './Form.css';

const Form = () => {
  const [hotel, setHotel] = useState({});
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [number, setNumber] = useState('');
  const [floor, setFloor] = useState('');
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    let unmounted = false;
    
    EventEmitter.emit('requestAHotel', id);
    EventEmitter.on('getAHotel', Ahotel => {
      if(!unmounted) {
        setHotel(Ahotel);
      }
    });
    return () => { unmounted = true }
  }, [id]);

  const back = () => {
    history.push('/');
  }

  const submit = () => {
    const user = {
      hotelId: hotel.id,
      name,
      surname,
      phone,
      gender,
      number,
      floor,
    }
    EventEmitter.emit('formSubmit', user)
    history.push('/hotels');
  }

  return (
    <div className="App">
      <div>
        <h1 className='back-form' onClick={back}>{`<-`}</h1>
        <h1>{`Welcome to ${hotel ? hotel.name : '-'}`}</h1>
      </div>
      <div className='form-group'>
          <h3>Please fill the form</h3>
          <input onChange={e => setSurname(e.target.value)} className='box2 box' type='text' placeholder='Name'></input>
          <input onChange={e => setName(e.target.value)} className='box2 box' type='text' placeholder='Surname'></input>
          <input onChange={e => setPhone(e.target.value)} className='box2 box' type='text' placeholder='Phone'></input>
          <input onChange={e => setGender(e.target.value)} className='box2 box' type='text' placeholder='Gender'></input>
          <input onChange={e => setNumber(e.target.value)} className='box2 box' type='text' placeholder='Room number'></input>
          <input onChange={e => setFloor(e.target.value)} className='box2 box' type='text' placeholder='floor'></input>
          <button className='box2 box' onClick={submit}>Submit</button>
      </div>
    </div>
  );
}

export default Form;
