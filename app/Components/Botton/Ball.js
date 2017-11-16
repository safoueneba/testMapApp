import React, { Component } from 'react'
import { View,TouchableHighlight } from 'react-native'
import styles from './BallStyles.js'




  export default class Ball extends Component {

    constructor(props) {
           super(props);
            this.state = {
                animate : false
           }
    }


  triggerAnimation(){
    this.setState((prevState, props) => {
      return {animate: !prevState.animate};
    });
    this.props.handleAnimation(this.state.animate)
  }


  render () {

    return (
            <View style={styles.blackHolder}>
                    <TouchableHighlight   onPress={()=>this.triggerAnimation()}>
                      <View style={styles.redHolder}>
                      </View>
                    </TouchableHighlight>
            </View>

    )
  }
}
