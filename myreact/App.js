
import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  Button,
  useColorScheme,
  View,
  TextInput,
} from 'react-native';

import Weather from './component/weather';
/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
// componentDidMount = () => {
//   const weatherURL =
//   "http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=72456375f61f475833df3addc204f85b"
// fetch(weatherURL)
//   .then(res => res.json())
//   .then(data => console.log("Data List Loaded", data))
// }
function   _onPressButton({city}) {
  if (city!=null)
  return <Weather city={city}/>
  else return <Text>Waiting..</Text>
}
const App =() =>{
  // this.state = {
  //   city:'London'
  // }
  const [text, onChangeText] = React.useState();

  return (
    
    <SafeAreaView style={{flex:1}}>

      <TextInput
        style={styles.input}
        placeholder="Введите город"
        value={text}
        onChangeText={text=>onChangeText(text)}
      />
      <View>
      </View>
      <View>
        <Weather city={text}/>
      </View>
     </SafeAreaView>
  );
};

const styles = StyleSheet.create({
container:{
  width:"90%",
  display: 'flex',
  marginHorizontal:20,
  alignItems:'center',
  justifyContent:'center',
  textAlign:'center',
  marginVertical:0,
},
input: {
  height: 40,
  margin: 12,
  borderWidth: 1,
  padding: 10,
},
});

export default App;
