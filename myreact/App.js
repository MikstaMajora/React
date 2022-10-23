import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, View, TextInput, Button} from 'react-native';
import Weather from './component/weather';
import {getCity} from './service/fetch';

const App = () => {
  const [city, setCity] = React.useState('London');
  const [weatherList, setWeatherList] = React.useState([]);

  const onPress = async city => {
    const res = await getCity(city);
    setWeatherList(prevState => [...prevState, res.data]);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <TextInput
        style={styles.input}
        placeholder="Введите город"
        value={city}
        onChangeText={setCity}
      />
      <View>
        <Button onPress={() => onPress(city)} title="submit" />
      </View>
      <View>
        {weatherList.length > 0 && <Weather weatherList={weatherList} />}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    display: 'flex',
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginVertical: 0,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default App;
