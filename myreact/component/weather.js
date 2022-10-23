import React from 'react';
// import { useState } from 'react';
import {Text, View, ScrollView} from 'react-native';

const Weather = ({weatherList}) => {
  console.log('weatherList', weatherList);
  return weatherList.map((item, index) => (
    <ScrollView key={index}>
      <View
        style={{
          width: '100%',
          marginBottom: 10,
          flex: 1,
          flexDirection: 'row',
        }}>
        <Text>{item?.main?.temp}</Text>
      </View>
    </ScrollView>
  ));
};

// Weather.defaultProps = {
//   city: 'London',
// };

export default Weather;
