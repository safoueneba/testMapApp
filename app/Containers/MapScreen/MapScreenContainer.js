import React, { Component } from 'react'
import { View,Text,  LayoutAnimation,Platform,UIManager } from 'react-native'
import  MapComponent  from '../../Components/Map/MapComponent'
import  ListPositionsComponents  from '../../Components/List/ListPositionsComponents'
import  Ball  from '../../Components/Botton/Ball'

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental(true)
}

  export default class MapScreenContainer extends Component {

    constructor(props) {
           super(props);
            this.state = {
              destination : null,
              animate : false,
           }
    }

    handleDestination(destination){
      this.setState({destination})
    }
    handleAnimation(animate){
      LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
      this.setState({animate})
    }

  render () {

    const {destination,animate} = this.state;
    let styleMap = animate ? 10 : 2
    return (
      <View style={{flex : 1}}>
        <MapComponent goTo={destination} heightProps={styleMap}/>
        <ListPositionsComponents getDestination={(prop)=>this.handleDestination(prop)} heightProps={1}/>
        <Ball handleAnimation={(prop)=>this.handleAnimation(prop)}/>
      </View>
    )
  }
}
