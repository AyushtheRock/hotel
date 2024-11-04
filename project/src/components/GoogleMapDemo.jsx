import React, { useCallback, useState } from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

    const containerStyle = {
        width: '400px',
        height: '400px'
    };
    const center = {
        lat: -3.745,
        lng: -38.523,
    }

const GoogleMapDemo = () => {

    const [map , setMap] = useState(null)
    const {isLoaded} = useJsApiLoader({
        id : 'google-map-script',
        googleMapsApiKey : ''
    })

    const onLoad = useCallback(function cb(map)  {

    })

  return (
    <div>GoogleMap</div>
  )
}

export default GoogleMapDemo