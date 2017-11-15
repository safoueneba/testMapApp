import React, { Component } from 'react'
import { View,Text } from 'react-native'
import MapView from 'react-native-maps';
import PropTypes from 'prop-types';
import markers from '../../Resources/list'
import MarkerComponent from '../Marker/MarkerComponent'



  export default class MapComponent extends Component {

    constructor(props) {
           super(props);
            this.state = {
              latitude : 49.607369,
              longitude: 6.1184546,
           }
    }

  componentWillReceiveProps (newProps) {

      if(newProps.goTo !== null ){
            this._map.animateToCoordinate(newProps.goTo)
      }

  }


  render () {
    const {heightProps} = this.props;

    return (
      <View style={{flex : heightProps}}>
              <MapView
                  ref={(map) => this._map = map}
                  style={{flex : 1}}
                  initialRegion={{
                    latitude : 49.607369,
                    longitude: 6.1184546,
                    latitudeDelta: 0.0052,
                    longitudeDelta: 0.0051,
                  }}
                >

                {
                  markers.map((marker,index) => (
                    <MarkerComponent
                        key={index}
                        latlng={marker.latlong}
                        title={marker.title}
                        description={marker.description}
                    />
                  ))
                }

                </MapView>

      </View>
    )
  }
}


MapComponent.propTypes = {
                      heightProps: PropTypes.number.isRequired,
                      goTo : PropTypes.objectOf(PropTypes.number)
 };

MapComponent.defaultProps = {
                        heightProps: 1,
 };
