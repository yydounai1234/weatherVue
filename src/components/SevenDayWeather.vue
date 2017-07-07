<template>
  <div class="sevenDay">
      <ul>
        <li v-for="weather in weatherList" >
            {{weather[0]}}<br>{{weather[1]}}<div class="weatherIcon"><img :src=weather[2]></div>
        </li>
<div style="height:3rem;clear:both"></div>
      </ul>
  </div>
</template>
<script>
var sun=require("../assets/images/sun.png");
var clouds=require("../assets/images/clouds.png");
var rain=require("../assets/images/rain.png");
export default {
  data () {
    return {
      weatherList:[],
    }
  },
  mounted(){
    this.loadSevenDayWeather()
  },
  methods:{
      loadSevenDayWeather(){
          var that=this;
        this.weatherList =[];
        var countyInfo = this.$root.contry;
        var url = "http://api.openweathermap.org/data/2.5/forecast?lat=" + countyInfo.lat + "&lon=" + countyInfo.lon + "&lang=zh_cn&appid=613b47c5a51043bd451b4c924f240fb5";
        this.axios.get(url).then((resolve) =>{
          that.operationData(resolve.data && resolve.data.list);
          that.$root.ok=false
        });
      },
      operationData(list){
        var that=this;
        var weatherList = [];
        for (var i = 0; i < list.length; i++) {
           var morning = list[i];
           var morningDesc ="时间:" + morning.dt_txt + " " + morning.weather[0].description + " 温度:" + Math.ceil(morning.main.temp - 273.15) + "度 湿度:" + morning.main.humidity + " 风力:" + Math.ceil(morning.wind.speed) + "级";
           var weather = {
            "morning":morningDesc,
           }
           weatherList.push(weather);
        }
        weatherList.forEach(function (item) {
            var a=item.morning;
            var b=a.indexOf("温");
            var top=a.substring(0,b);
            var bot=a.substring(b);
            var wW="";
            if(top.indexOf("晴")!==-1){wW=sun}else if(top.indexOf("雨")!==-1){
                wW=rain
            }else{
                wW=clouds
            }
          that.weatherList.push([top,bot,wW]);
        })
      },
  }

}
</script>
<style>
.sevenDay{background:url("../assets/images/timg.jpg")no-repeat;background-size:cover}
.sevenDay li{box-shadow: inset 0 0 0.1rem #bbb;padding:1rem;position:relative}
  .weatherIcon{position:absolute;right:5%;top:40%;height:2rem;width:2rem}
.weatherIcon img{height:100%}
</style>
