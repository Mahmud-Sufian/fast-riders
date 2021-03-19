import React from 'react';

// const SimpleMap = () => {
 


const SimpleMap = () => {
  
  return (
    <div className="google-map" ref="mapCanvas">
        LOADING MAP...
      </div>
    );
  }
  const streetViewConfig = {
    type: 'street',
    mapOptions: {
      position: {
        lat: 41.8916, 
        lng: -87.6079
      },
      pov: {
        heading: 200,
        pitch: 0
      },
      scrollwheel: false
    }
  };
  
  const mapViewConfig = {
    mapOptions: {
      center: {
        lat: 41.8916, 
        lng: -87.6079,
      },
      zoom: 13,
      streetViewControl: true, 
      scrollwheel: true 
    },
    type: 'map',
    allowClusters: false,
    locations: [
      { 
        lat: 41.8789, 
        lng: -87.6359, 
        infoWindowContent: { 
          title: 'Willis Tower', 
          text: 'The new Willis Tower will provide one of the most compelling and dynamic work, dining, shopping and entertainment environments available in any city.', 
          imgUrl: 'http://static.thousandwonders.net/Willis.Tower.original.1014.jpg'
        } 
      },
      { 
        lat: 41.8916, 
        lng: -87.6079,
        infoWindowContent: { 
          title: 'Navy Pier', 
          text: 'Navy Pier is a 3,300-foot-long (1,010 m) pier on the Chicago shoreline of Lake Michigan. It is located in the Streeterville neighborhood of the Near North Side',
          imgUrl: 'http://www.ncmahq.org/images/default-source/default-album/ev/wc17/wc17_navypier.jpg?sfvrsn=0'
        } 
      },
      { 
        lat: 41.8988, 
        lng: -87.6229,
        infoWindowContent: { 
          title: 'John Hancock Center', 
          text: 'The John Hancock Center is a 100-story, 1,128-foot supertall skyscraper at 875 North Michigan Avenue, Chicago, Illinois.',
          imgUrl: 'https://aptamigo-production.s3.amazonaws.com/uploads/property/profile_photo/1032/a486a78b-54ca-4961-a403-5ea5c05a10be.jpg'
        } 
      }
    ]
  };
  
//   return (
//     <div className="page">
      
//       <div className="flexbox">
//         <div className="map-container u-vr">
//           <GoogleMap config={ mapViewConfig } />
//         </div>
//         <div className="map-container">
//           <GoogleMap config={ streetViewConfig } />
//         </div>
//       </div>

//     </div>
//   );
// };

export default SimpleMap;