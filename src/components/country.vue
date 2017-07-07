<template>
  <div class="city">
      <ul>
        <li v-for="countyInfo in countyList" class="listCell" @click="fn(countyInfo)">
            <span>{{countyInfo.cityZh}}</span>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      countyList:[],
    }
  },
  methods:{
    fn(value){
      this.$root.contry=value;
      this.$root.title=value.cityZh;
      this.$router.push(`/weather?id=${this.$route.query.id}`)
    },
    getCityList(){
      var city = this.$root.city;
      this.$root.title=city;
      var that=this;
      var citys = this.$root.citieslatlon.filter(function(item,index){
        return item.leaderZh ===city&&item.cityZh!==city;
      });
      this.countyList=citys;
    }
  },
  beforeRouteEnter (to, from, next) {
    next(function (vm) {
      vm.getCityList();
       vm.$root.ok=false
    })
  }
}
</script>
<style>

</style>
