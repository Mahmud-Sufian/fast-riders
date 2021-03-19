import React from 'react';
import { useHistory } from 'react-router';
import './Vehicle.css';

const Vehicle = (props) => {
    const { name, img } = props.vehicle;
    const history = useHistory();

    const handleDestination = (name) => {
        history.push(`/destination/${name}`);
    }
    return (
        <div onClick={() => handleDestination(name)}>
            <img className="vehicle-img" src={img} alt="" />
            <p className="vehicle-p">{name}</p>
        </div>
    );
};

export default Vehicle;