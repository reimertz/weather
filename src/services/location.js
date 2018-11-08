import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';

const { geolocation } = navigator

export const getCurrentLocation = async () => {
  let status = await geolocation.requestAuthorization();
  
  try {
    const location = await new Promise((resolve, reject) => 
        geolocation.getCurrentPosition(resolve,reject))

    return location
  }
  catch (e) {
    alert(`Couldn't pinpoint your location.`)
  }
};