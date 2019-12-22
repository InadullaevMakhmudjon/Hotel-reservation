import React from 'react';
import { withRouter } from 'react-router-dom';
import './Hotel.css';

const Hotel = ({ id, name, desc, image, history }) => {
    const clicked = () => {
        history.push(`/hotels/${id}`);
    }
    return (
        <div className="box box2 hotel" onClick={clicked}>
            <div className='hotel-image-container'>
                <div className='hotel-image'>
                    <img alt='loading' src={image}/>
                </div>
            </div>
            <div className='hotel-description'>
                <h3>{name}</h3>
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default withRouter(Hotel);