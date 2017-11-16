
import React, { Component } from 'react'
import { View,Text,StyleSheet,TouchableHighlight } from 'react-native'
import PropTypes from 'prop-types';
import styles from './Style/RowStyles.js'


  export default class Row extends Component {


	render(){
		const {data} = this.props;
		return (
			<TouchableHighlight  underlayColor={'red'} onPress={()=>this.props.getDestination(data.latlong)}>
					<View style={styles.container}>
							<View style={{flex : 1}}>
									<Text style={styles.textTitleStyle}>{data.title}</Text>
							</View>
							<View style={{flex : 2}}>
									<Text>{data.description}</Text>
							</View>
					</View>
				</TouchableHighlight>


			)
	}


}
