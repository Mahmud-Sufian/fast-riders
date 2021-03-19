import React, { useEffect, useState } from 'react';
import fakeData from '../data/fakeData.json';
import Vehicle from '../Vehicle/Vehicle';
import './Home.css';

const Home = () => {
    const [vehicles, setVehicles] = useState([]);
    useEffect(() => {
        setVehicles(fakeData);
    },[])
    return (
        <div className="vehicle-container">
            {
                vehicles.map(vehicle => <Vehicle vehicle={vehicle}></Vehicle> )
            }
        </div>
    );
};

export default Home;