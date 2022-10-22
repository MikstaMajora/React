
export default{
  API(q){
    console.log("<<<<<<<"+q)
    return fetch('http://api.openweathermap.org/data/2.5/weather?q='+q+',uk&APPID=72456375f61f475833df3addc204f85b')
    .then((res)=>res.json())
    .catch((err)=>console.log(err))
  }
}
