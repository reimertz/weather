import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native'

import { connectAppState } from '../AppState';

const ToggleTextButton = styled.TouchableOpacity`
  bottom: 20;
  left: 20;
  position: absolute;
  background-color: transparent;
`


const TextWrapper = styled.Text`
  font-size: 17;
  color: white;
`

const ToggleText = styled.Text`
  font-weight: ${props => props.bold ? '700' : '400'};
  color: white;
`


class MetricToggle extends React.PureComponent {    
  render() {
    const { actions, metric } = this.props

    return (
      <ToggleTextButton onPress={this.props.actions.toggleMetricSystem}>
        <TextWrapper>
          <ToggleText bold={metric}>C°</ToggleText> / <ToggleText bold={!metric}>F°</ToggleText> 
        </TextWrapper>
      </ToggleTextButton>
    )
  }
}

export default connectAppState(MetricToggle)