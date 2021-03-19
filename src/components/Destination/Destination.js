import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Destination.css';
import image from '../../images/map.png';
import { useForm } from 'react-hook-form';
import HeightIcon from '@material-ui/icons/Height';
import fakeData from '../data/fakeData.json';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import SimpleMap from '../Map/SimpleMap';
 

const Destination = () => {
    const { vehicle } = useParams();  
    const [pick, setPick] = useState({});
    const [existingVehicle, setExistingVehicle] = useState({});
    
    
    useEffect(() => { 
        const existing = fakeData.find(data => data.name === vehicle);
        setExistingVehicle(existing); 
        // console.log(existing)
    },[])
    

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
    setPick(data);
    console.log(data);
  }

 

    return (
        <div>
            <div className="row">
                <div className="col-md-4">
                    <form className="pick-container" onSubmit={handleSubmit(onSubmit)}>   

                        {!pick.pickFrom ?  
                        <>
                        <label htmlFor="pickFrom">Pick From</label>
                         <input name="pickFrom" ref={register({ required: true })} /> 
                         </>
                         : <p>{pick.pickFrom}</p> }
                        {errors.pickFrom && <span>This Pick From is required</span>} 


                        {pick.pickFrom && <HeightIcon></HeightIcon>}

                        
                        {!pick.pickTo ?
                        <>
                        <label htmlFor="pickTo">Pick To</label>
                        <input name="pickTo" ref={register({ required: true })} />
                        </>
                        : <p>{pick.pickTo}</p> }
                        {errors.pickTo && <span>This Pick To is required</span>}

                        {!pick.date ?
                        <>
                        <label htmlFor="date">Date</label>
                        <input type="date" name="date" ref={register({ required: true })} />
                        </>
                        : <p>{pick.date}</p> } 
                        {errors.date && <span>This Date is required</span>}

                        {!pick.pickFrom && <input type="submit" value="Search" /> }

                        {pick.pickFrom && 
                            <>
                            <div className="result-dynamic-container">
                                <img className="search-img" src={existingVehicle?.img} alt=""/>
                                <p style={{marginLeft:'6px'}}>{existingVehicle?.name}</p>
                                <SupervisorAccountIcon style={{marginLeft:'6px'}}></SupervisorAccountIcon>4
                                <p style={{marginLeft:'6px'}}>$67</p>
                            </div>  
                            <div className="result-dynamic-container">
                                <img className="search-img" src={existingVehicle?.img} alt=""/>
                                <p style={{marginLeft:'6px'}}>{existingVehicle?.name}</p>
                                <SupervisorAccountIcon style={{marginLeft:'6px'}}></SupervisorAccountIcon>3
                                <p style={{marginLeft:'6px'}}>$67</p> 
                          </div>
                          <div className="result-dynamic-container">
                                <img className="search-img" src={existingVehicle?.img} alt=""/>
                                <p style={{marginLeft:'6px'}}>{existingVehicle?.name}</p>
                                <SupervisorAccountIcon style={{marginLeft:'6px'}}></SupervisorAccountIcon>2
                                <p style={{marginLeft:'6px'}}>$59</p>
                            </div>  
                            <div className="result-dynamic-container">
                                <img className="search-img" src={existingVehicle?.img} alt=""/>
                                <p style={{marginLeft:'6px'}}>{existingVehicle?.name}</p>
                                <SupervisorAccountIcon style={{marginLeft:'6px'}}></SupervisorAccountIcon>1
                                <p style={{marginLeft:'6px'}}>$57</p> 
                          </div>
                           </>
                        }

                    </form>
                </div>
                <div className="col-md-8">
                    <img style={{ width: '100%' }} src={image} alt="" /> 
                    {/* <SimpleMap></SimpleMap> */}
                </div>
            </div>
 

        </div>
    );
};

export default Destination;