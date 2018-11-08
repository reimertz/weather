import React from 'react';
import { Dimensions, ScrollView } from 'react-native';
import styled from 'styled-components/native'

import { connectAppState } from '../AppState';

import WeatherCard from '../components/Weather.Card'

class WeatherCards extends React.PureComponent {

  renderCard = (weatherData) => {
    const { metric } = this.props
    return (
      <WeatherCard key={weatherData.city} metric={metric} {...weatherData} />
    )
  }
    
  render() {
    const { weatherData, currentLocationWeatherData, metric } = this.props

    return (
      <ScrollView 
        horizontal={true} 
        snapToInterval={Dimensions.get('window').width} 
        snapToAlignment={'center'}
        decelerationRate={'fast'}
        showsHorizontalScrollIndicator={false}
        contentContainer={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        { currentLocationWeatherData 
          ? this.renderCard({...currentLocationWeatherData, isCurrent: true})
          : null
        }
        { weatherData.map(this.renderCard) }
      </ScrollView>
    )
  }
}

export default connectAppState(WeatherCards)