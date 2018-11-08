import React from 'react';
import { Dimensions } from 'react-native';
import SvgUri from 'react-native-svg-uri';
import styled from 'styled-components/native'

const PADDING = 20
const BORDER_RADIUS = 20
const ICON_SIZE = 170

const WeatherCardInner = styled.View`
  background-color: ${props => props.color};
  border-radius: ${BORDER_RADIUS}px;
  width: ${Dimensions.get('window').width - PADDING * 2}px;
  max-width: ${Dimensions.get('window').width - PADDING * 2}px;
  justify-content: center;
  align-items: center;
  margin: ${Dimensions.get('window').height * 0.1}px ${PADDING}px;
  justify-content: center;
  align-items: center;
  flex: 1;
`

const LocalTime = styled.Text`
  color: rgba(0,0,0,0.5);
  position: absolute;
  font-size: 23;
  top: ${PADDING};
  left: ${PADDING};
`

const LocalDate = styled.Text`
  color: rgba(255,255,255, 0.95);
  position: absolute;
  text-transform: uppercase;
  font-size: 23;
  top: ${PADDING};
  right: ${PADDING};
`

const IconWrapper = styled.View`
  min-height: ${ICON_SIZE};
`

const Temp = styled.Text`
  color: rgba(0,0,0,0.5);
  font-size: 40;
  font-weight: 500;
  text-transform: uppercase;
`

const Description = styled.Text`
  color: rgba(0,0,0,0.5);
  font-size: 23;
  font-weight: 600;
  text-transform: uppercase;
  margin-top: 4;
`

const Footer = styled.View`
  position: absolute;
  bottom: 0;
  height: 75;
  width: 100%;
  justify-content: center;
  border-top-color: white;
  border-top-width: 2px;
  border-bottom-left-radius: ${BORDER_RADIUS}px;
  border-bottom-right-radius: ${BORDER_RADIUS}px;

`
const City = styled.Text`
  position: absolute;
  color: white;
  font-size: 17;
  font-weight: 600;
  text-transform: uppercase;
  left: ${PADDING};
`

const Country = styled.Text`
  position: absolute;
  color: white;
  text-transform: uppercase;
  font-size: 17;
  font-weight: 700;
  right: ${PADDING};
`

const CurrentIndicator = styled.Text`
  position: absolute;
  color: white;
  text-transform: uppercase;
  font-size: 12;
  font-weight: 200;
  width: 100%;
  bottom: -25;
  text-align: center;
`

export default ({ metric, temp, color, localTime, icon, weather, city, country, isCurrent}) => {
  return (
    <WeatherCardInner color={color}>
      <LocalTime>{localTime.format(metric ? 'H:mm' :  'hh:mm A')}</LocalTime>
      <LocalDate>{localTime.format('D MMM')}</LocalDate>
      <IconWrapper>
        <SvgUri
          width={ICON_SIZE}
          height={ICON_SIZE}
          source={icon}
        />
      </IconWrapper>
      <Temp>{(metric ? (temp - 32) * 5 / 9: temp).toFixed(1)}°</Temp>
      <Description>{weather}</Description>

      <Footer>
        <City>{city}</City>
        <Country>{country}</Country>
      </Footer>

      {
        isCurrent && <CurrentIndicator>current location</CurrentIndicator>
      }
    </WeatherCardInner>
  )
}
  

