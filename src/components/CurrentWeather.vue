<template>
  <div class="current">
      <div class="bigWeather"><img :src="bigWeather"></div>
      <div class="temp" v-show="weatherInfo">
          <div class="deg">{{temp}}</div><div class="zero">0</div>
      </div>
      <div class="desc" v-show="weatherInfo">
          <p>{{description}}</p>
          <p>{{humidity}}</p>
      </div>
      <p class="context">{{context}}</p>
  </div>
</template>

<script>
var bsun=require("../assets/images/bsun.png");
var bclouds=require("../assets/images/bclouds.png");
var brain=require("../assets/images/brain.png");
export default {
  data () {
    return {
      weatherInfo:null,
      temp:null,
      description:null,
      humidity:null,
      bigWeather:null,
      context:""
    }
  },
  mounted(){
      this.loadCurrentWeather()
  },
  methods:{
      loadCurrentWeather(){
        var that=this;
        this.weatherInfo = null;
        var countyInfo = this.$root.contry;
        var url = "http://api.openweathermap.org/data/2.5/weather?lat=" + countyInfo.lat + "&lon=" + countyInfo.lon + "&lang=zh_cn&appid=613b47c5a51043bd451b4c924f240fb5";
        this.axios.get(url).then((resolve) =>{
        that.weatherInfo = resolve.data;
        that.operationData();
        that.$root.ok=false
        });
      },
      operationData(){
        this.temp = Math.ceil(this.weatherInfo.main.temp - 273.15);
        this.description = this.weatherInfo.weather[0].description;
        this.humidity = "湿度" + this.weatherInfo.main.humidity + "%" + " 风力" + Math.ceil(this.weatherInfo.wind.speed) + "级";
        if(this.description.indexOf("晴")!=-1){this.bigWeather=bsun;this.context="晴天里有阳光，阳光总是充满温馨，相信有这么多朋友的厚爱和鼓励，晴天会永远阳光灿烂。" ;return}
        if(this.description.indexOf("雨")!=-1){this.bigWeather=brain;this.context="雨如万条银丝从天上飘下来，屋檐落下一排排水滴，像美丽的珠帘";return}
        this.bigWeather=bclouds;this.context="天灰蒙蒙的，十分得冷，小草低下了头，树枝弯弯曲曲，抬起头，发现乌云密布，没想到雨竟已静悄悄地下了起来。"


      },
  }
}
</script>
<style>
  .current{padding:2rem 0;position:relative}
  .current .temp{
    padding-left: 2.5rem;
  }
  .current .temp .deg{
    float: left;
    line-height: 3rem;
    font-size:  2rem;
  }
  .current .temp .zero{
    font-size: 0.2rem;
  }
  .current .desc{
    font-size: 1.2rem;
    padding-left:2.5rem;
    margin-top: 2rem
  }
    .bigWeather{position:fixed;top:12%;right:0;height:10rem}
    .bigWeather img{height:100%}
      .context{margin-top:6rem;padding:0 3rem;font-size:0.8rem}
</style>
