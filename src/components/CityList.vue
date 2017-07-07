<template>
  <div class="city">
      <ul>
        <li v-for="name in cityList" class="listCell" @click="fn(name)">
            <span>{{name}}</span>
        </li>
      </ul>
  </div>
</template>

<script>

export default {
  data () {
    return {
      cityList:[],
    }
  },
methods:{
  fn(value){
    this.$root.city=value;
    this.$router.push(`/country?id=${this.$route.query.id}`)
  },
  getCityList(){
    var that=this;
    var province = this.$root.province;

    province=province.filter(function (item) {
      return item.i===that.$route.query.id
    })[0];

    this.$root.title=province.n;
    var citys = this.$root.citieslatlon.filter(function(item,index){
      return item.provinceZh === province.n;
    });
    var cityNames = citys.map(function(item,index){
      return item.leaderZh;
    });
    this.cityList= [...new Set(cityNames)];
    }
  },
  beforeRouteEnter (to, from, next) {
      next(function (vm) {
        vm.getCityList();
        vm.$root.ok=false
      })
  },
}
</script>
<style>
 .city ul{display:flex;flex-wrap: wrap}
</style>
