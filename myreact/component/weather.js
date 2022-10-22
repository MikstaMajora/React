import React, {Component, useEffect,useState} from 'react';
// import { useState } from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import Service from "../service/fetch";

function getWeather(city){
  const [weatherList, renderWeather] = useState([]);
  useEffect(()=>{
    Service.API(city).then((json)=>{
              console.log(json);
              renderWeather([json])
              console.log(weatherList);
          });
  },[])
    return weatherList
}
const Weather=({city})=>{
  
    return <ScrollView>{getWeather(city).map((val,key)=>(
    <View key={key} style={{width:'100%',marginBottom:10,flex:1,flexDirection:'row'}}>
    <Text>{val.main.temp}</Text>
    </View>
    ))}</ScrollView>
  }


Weather.defaultProps={
    city:'London'
  }

export default Weather;
