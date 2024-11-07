import React from "react";
import GoogleMapReact from 'google-map-react';


const apiKey = import.meta.env.GOOGLE_MAP_API;
const GoogleMapDemo = () =>{
  const defaultProps = {
    center: {
      lat:  28.7041,
      lng:  77.1025
    },
    zoom: 10
  };
   
 
  
  
  return (
    // Important! Always set the container height explicitly
    <div className="w-full h-full">
      <GoogleMapReact
        bootstrapURLKeys={{ key: apiKey }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {/* <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        /> */}
      </GoogleMapReact>
    </div>
  );
}

export default GoogleMapDemo