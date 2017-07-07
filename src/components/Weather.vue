<template>
  <div class="weather">
<transition name="fade" mode="out-in"><router-view></router-view></transition>
      <ul class="botmFilter">
        <li @click="fn1()">
          <img src="../assets/images/choose.png" v-show="bol">
          <img src="../assets/images/nochoose.png" v-show="!bol"><br>
          <span :class="{black:bol}">目前天气</span>
        </li>
        <li @click="fn2()">
          <img src="../assets/images/choose.png" v-show="!bol">
          <img src="../assets/images/nochoose.png" v-show="bol"><br>
          <span :class="{black:!bol}">7天天气</span>
        </li>
      </ul>
  </div>
</template>
<script>
export default {
    data(){
        return {
            bol:true
        }
    },
    methods:{
        fn1(){
          this.$router.push(`/weather/currentweather?id=${this.$route.query.id}`);
          this.bol=true;
        },
      fn2(){
          this.$router.push(`/weather/sevendayweather?id=${this.$route.query.id}`);
          this.bol=false;
      }
    },
  mounted(){
      this.$router.push(`/weather/currentweather?id=${this.$route.query.id}`)
  }
}
</script>
<style>

.weather .botmFilter{
  position:fixed;
  bottom:0;
  height:3.5rem;
  z-index:960;
  display:flex;
  width:100vw;
  background:url("../assets/images/timg4.gif");
}
.weather .botmFilter li{
  width:50%;
  height:3rem;
  padding-top:0.3rem;
  text-align:center;
  line-height:100%;
  font-weight: bold;
}
.weather .botmFilter img{
  width:1.8rem
}
.weather .botmFilter span{
  color:white;
  font-size:0.5rem
}
.weather .botmFilter .black{
  color:#666
}
</style>
