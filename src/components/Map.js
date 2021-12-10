import React, {useState, useEffect} from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import LocationOnIcon from '@mui/icons-material/LocationOn';


function GoogleMap(props) {
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')
  
  useEffect(() => {
    async function getCurrentUser(){
     const user = await JSON.parse(localStorage.getItem('user'))
     setLatitude(user.location.coordinates.latitude);
     setLongitude(user.location.coordinates.longitude);
      } 
      getCurrentUser()
}, [])

 const mapContainerStyle = {
      width: '80vw',
      height: '60vh',
      margin: "30px"
  }
    return (
      <div className='map'>
      <h4>Location <LocationOnIcon/></h4> 
        <Map  
         style={mapContainerStyle} 
          google={props.google}
          initialCenter={{
            lat: Number(latitude),
            lng: Number(longitude)
          }}
          center={{
            lat: Number(latitude),
            lng: Number(longitude)
          }}
        >
          <Marker 
            position={{
              lat: Number(latitude),
              lng: Number(longitude)
            }} />
        </Map>
      </div>
    )
  }


export default GoogleApiWrapper({
  apiKey: ('AIzaSyC8ck_LqFs59JvoPbGwQ9YxWbWcadI2gLY')
})(GoogleMap)




















