import React, { Component } from 'react'
import { View,Text } from 'react-native'
import  MapComponent  from '../../Components/Map/MapComponent'
import  ListPositionsComponents  from '../../Components/List/ListPositionsComponents'



  export default class MapScreenContainer extends Component {

    constructor(props) {
           super(props);
            this.state = {
              destination : null
           }
    }

    handleDestination(destination){
      this.setState({destination})
    }

  render () {
    const {destination} = this.state;
    return (
      <View style={{flex : 1}}>
        <MapComponent goTo={destination} heightProps={2}/>
        <ListPositionsComponents getDestination={(destination)=>this.handleDestination(destination)} heightProps={1}/>
      </View>
    )
  }
}
