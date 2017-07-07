<template>
  <div class="province">
      <ul>
        <li v-for="province in provinceList" class="listCell" @click="fn(province)">
            <span>{{province.n}}</span>
        </li>
        <li class="listCell" style="width:66.6666vw;font-size:0.5rem;color:white;text-align:right"><span @click="aboutMe" style="text-decoration:underline;margin-right:5%">about Me</span></li>
      </ul>
    <div class="aboutMe" v-show="about">
      <div>
        <span>author:<small>&nbsp;&nbsp;&nbsp;kokoTong</small></span><br>
        <span>wechat:<small>&nbsp;&nbsp;&nbsp;yydounai1234</small></span><br>
        <span>github:<small>&nbsp;&nbsp;&nbsp;yydounai1234</small></span><br>
        <span>qq:<small>&nbsp;&nbsp;&nbsp;794095300</small></span><br>
        <span class="x" @click="aboutMe">x</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      provinceList:this.$root.province,
      about:false
    }
  },
  methods:{
    aboutMe(){
      this.about=!this.about
    },
    fn(value){
        this.$router.push("/citylist"+`?id=${value.i}`)
    }
  },
  beforeRouteEnter (to, from, next) {
    next(function (vm) {
      vm.$root.title='天气查询';
      vm.$root.ok=false
    })
  }
}
</script>
<style>
  .province ul{display:flex;flex-wrap: wrap}
  .listCell{
    box-sizing: border-box;
    text-align: center;
    width:33.3333vw;
    height: 2.3rem;
    line-height: 2.5rem;
    font-size: 0.9rem;
  }
.aboutMe{position:fixed;height:100vh;background:none;width:100vw;top:0;z-index:10000}
.aboutMe div{position:absolute;top:30%;padding:2rem 4rem;background:white;left:12%;border-radius:0.5rem}
.aboutMe .x{position:absolute;top:5%;right:5%}
</style>
