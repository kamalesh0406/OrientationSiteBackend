import React, { Component } from 'react';
import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import { FadeIn } from "animate-components";
import CurrentLocation from './CurrentLocation';
import './Maps.css';
import places from './placesInNITT';



export class Maps extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    return (
      <FadeIn duration="0.3s" timingFunction="ease-in" as="div">
        <div className="header">
          <p>YOUR LOCATION</p>
        </div>
        <CurrentLocation
          centerAroundCurrentLocation
          google={this.props.google}
        >
          <Marker
            onClick={this.onMarkerClick}
            name={'Iam Breathtaking!!'}
          />

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
            <div>
              <h6>{this.state.selectedPlace.name}</h6>
            </div>
          </InfoWindow>

          {/* Rendering all the markers */}

          {
            places.map((place) =>
              <Marker key={place.id}
                position={{ lat: place.lat, lng: place.lng }}
                name={place.name}
                onClick={this.onMarkerClick}
              />
            )}

          {/* Displaying information */}

          {
            places.map((place_details) =>
              <InfoWindow
                key={place_details.id}
                marker={this.state.activeMarker}
                visible={this.state.showingInfoWindow}
                onClose={this.onClose}
              >
                <div>
                  <h6>{this.state.selectedPlace.name}</h6>
                </div>
              </InfoWindow>
            )}

        </CurrentLocation>
      </FadeIn>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyDvd4nowkK0i1hLDJY5Auar7jy1FLzvyZw"
})(Maps);
