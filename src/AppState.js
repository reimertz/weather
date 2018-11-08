import React from 'react';

import { getCurrentLocation } from './services/location'
import { getWeatherFromCoordinates } from './services/weather'

const initialState = {
  metric: true,
  locations: [[59.3293, 18.0686], [62.0355,  129.6755]],
  currentLocationWeatherData: false,
  weatherData: []
}

export const AppStateContext = React.createContext(initialState);

export class AppStateProvider extends React.Component {
  state = initialState;

  toggleMetricSystem = () => {
    this.setState(oldState => {
      return { 
        metric: !oldState.metric, 
      }
    });
  }

  addCity = () => {
    alert('Not implemented yet.')
  }

  fetchWeatherData = async () => {
    const { locations, currentLocation } = this.state

    const weatherData = await Promise.all(locations.map(l => 
      getWeatherFromCoordinates(l[0], l[1])
    ))

    this.setState({
      weatherData
    })
  }

  fetchCurrentLocationWeatherData = async () => {
    try {
      const { coords } = await getCurrentLocation()
      const currentLocationWeatherData 
        = await getWeatherFromCoordinates(coords.latitude, coords.longitude)  

      this.setState({
        currentLocationWeatherData
      })
    }
    catch (e) {
      return false
    }
  }

  updateWeatherData() {
    this.fetchWeatherData()
    this.fetchCurrentLocationWeatherData()
    
    // Super hacky way to keep data updated :)
    setTimeout(() => {
      this.updateWeatherData()
    }, 1000 * 30)
  }

  componentDidMount() {
    this.updateWeatherData()
  }

  render() {
    return (
      <AppStateContext.Provider
        value={{
          ...this.state,
          actions: {
            addCity: this.addCity,
            toggleMetricSystem: this.toggleMetricSystem,
            updateWeatherData: this.updateWeatherData
          }
        }}
      >
        {this.props.children}
      </AppStateContext.Provider>
    );
  }
}

export const connectAppState = Component =>
  class GetAppState extends React.Component {
    render() {
      return (
        <AppStateContext.Consumer>
          { 
            appState => <Component { ...this.props } { ...appState } /> 
          }
        </AppStateContext.Consumer>
      );
    }
  }