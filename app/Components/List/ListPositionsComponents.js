import React, { Component } from 'react'
import { View, Text,FlatList, TouchableWithoutFeedback } from 'react-native'
import PropTypes from 'prop-types';
import Row from '../List/Row'
import markers from '../../Resources/list'
import styles from './Style/ListPositionComponentsStyles.js'

  export default class ListPositionsComponents extends Component {


  _renderItem = (item,index) => { return  <Row getDestination={this.props.getDestination} data={item}/> };

  _keyExtractor = (item, index) => { return (index ) };

  render () {

    const {heightProps} = this.props;

    return (
        <View style={[styles.container, {flex : heightProps}]}>

              <Text style={styles.titleStyle}>List Positions</Text>

              <FlatList
                style={{flex : 1}}
                data={markers}
                ItemSeparatorComponent={() => <View style={styles.rowSeparatorStyle} />}
                keyExtractor={this._keyExtractor}
                renderItem={({item,index}) => this._renderItem(item,index)}
              />

        </View>
      )
    }
  }

  ListPositionsComponents.propTypes = {
                        heightProps: PropTypes.number.isRequired,
   };

  ListPositionsComponents.defaultProps = {
                          heightProps: 1,
   };
