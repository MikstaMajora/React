import React from 'react';
import { View } from 'react-native';
class Card extends React.Component {

  render() {    
    const ms = this.props.day.dt * 1000;
    const weekdayName = new Date(ms).toLocaleString('ru', {weekday: 'long'});

    const imgURL = "owf owf-"+ this.props.day.weather[0].id +" owf-5x icon-style"

    return (
      <View className="col-auto">
        <View className="card bg-light">
          <Text className="card-title">{weekdayName}</Text>
          <Image className={imgURL}></Image>
          <Text>{Math.round(this.props.day.main.temp)} °C</Text>
          <View className="card-body">
            <View className="card-text">{this.props.day.weather[0].description}</View>
          </View>
        </View>
      </View>
    )
  }
}

export default Card

{"coord":{"lon":-0.1257,"lat":51.5085},
"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],
"base":"stations",
"main":{"temp":286.56,"feels_like":286.49,"temp_min":285.35,"temp_max":288.1,"pressure":1000,"humidity":97},"visibility":7000,"wind":{"speed":2.06,"deg":120},"clouds":{"all":40},"dt":1666335275,"sys":{"type":2,"id":2075535,"country":"GB","sunrise":1666334056,"sunset":1666371343},"timezone":3600,"id":2643743,"name":"London","cod":200}