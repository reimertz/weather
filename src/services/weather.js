import tzlookup from 'tz-lookup'
import momentTz from 'moment-timezone'

import { iconMap } from './weatherIcons.js'

const API_KEY = '849338767c0e95025b5559533d26b7c4'
//const API_KEY = '341efb73f84fe031799229df7f5f6c1a'

const generateAPIURL = (lat, lon) => 
  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=imperial`

const getColor = (weatherId) => { 
  const firstInteger = String(weatherId)[0]

  if (weatherId == 800) return '#EAC831'

  switch (firstInteger) {
    case '2':
      return '#149BBB'
      break;
    case '3':
      return '#149BBB'
      break;
    case '4':
      return '#149BBB'
      break;
    case '5':
      return '#149BBB'
      break;
    case '6':
      return '#149BBB'
      break;
    case '7':
      return '#149BBB'
      break;
    case '8':
      return '#149BBB'
      break;
    default:
        'lightsteelblue'
  }
}

export const getWeatherFromCoordinates = async (lat, lon) => {
  try {
    const response = await fetch(generateAPIURL(lat, lon))
    const json = await response.json()

    const todaysWeather = json.weather[0]
    const tz = tzlookup(lat, lon)
    const localTime = momentTz().tz(tz)
    const icon = iconMap.get(todaysWeather.id);

    return {
      city: json.name,
      country: json.sys.country,
      weather: todaysWeather.main,
      temp: json.main.temp,
      color: getColor(todaysWeather.id),
      icon,
      localTime
    }

  } catch (e) {
    console.log(e)
    return false
  }
}