import React, { Component } from 'react'
import { View } from 'react-native'
import MapView from 'react-native-maps';
import PropTypes from 'prop-types';


  export default class MarkerComponent extends Component {

  render () {
    const { latlng,title,description } = this.props;
    return (
      <View>
            <MapView.Marker
               coordinate={latlng}
               title={title}
               description={description}
              />
      </View>
    )
  }
}

  MarkerComponent.propTypes = {
                        latlng: PropTypes.objectOf(PropTypes.number).isRequired,
                        title: PropTypes.string.isRequired,
                        description :  PropTypes.string
   };

  MarkerComponent.defaultProps = {
                          description : null
   };
