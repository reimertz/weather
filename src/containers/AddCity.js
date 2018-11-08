import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native'

import { connectAppState } from '../AppState';

const ToggleTextButton = styled.TouchableOpacity`
  bottom: 10;
  right: 20;
  position: absolute;
  background-color: transparent;
`

const ToggleText = styled.Text`
  color: white;
  font-size: 37;
`


class AddCity extends React.PureComponent {    
  render() {
    const { actions, metric } = this.props

    return (
      <ToggleTextButton onPress={this.props.actions.addCity}>
        <ToggleText>+</ToggleText>
      </ToggleTextButton>
    )
  }
}

export default connectAppState(AddCity)