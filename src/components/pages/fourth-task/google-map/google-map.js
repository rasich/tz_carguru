import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import Spinner from '../../../spinner'

export class GoogleMap extends Component {

  state = {
    markers: [
      {lat: 56.9519, lng: 24.1052269, count: 7},
      {lat: 56.95201, lng: 24.102799, count: 1},
      {lat: 56.953975, lng: 24.11046265, count: 1},
      {lat: 56.95192, lng: 24.11449, count: 1},
      {lat: 56.95283, lng: 24.11386, count: 13},
      {lat: 56.95652425, lng: 24.11158, count: 6},
      {lat: 56.957086, lng: 24.117114, count: 7},
    ]
  }
  
  displayMarkers = () => {
    return this.state.markers.map((marker, index) => {
      return (
        <Marker 
          key={index} 
          id={index} 
          position={{
            lat: marker.lat,
            lng: marker.lng
          }}
          icon={{
            url: (marker.count < 21) ? `img/map/${marker.count}.svg` : 'img/map/21.svg'
          }}
        />
      )
    })
  }
  
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={15}
        initialCenter={{ lat: 56.95509, lng: 24.103}}
        disableDefaultUI = {true}
      >
        {this.displayMarkers()}
       
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyB8Gvs77qsTmvcuBNdcvz1c8c2lp6gnINA'),
  LoadingContainer: Spinner
})(GoogleMap)