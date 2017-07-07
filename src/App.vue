<template>
  <div id="app">
    <MyHeader></MyHeader>
          <transition name="fade" mode="out-in"><router-view></router-view></transition>
    <MyLoading :loadOptions="{loading:ok}"></MyLoading>
  </div>
</template>

<script>
import MyHeader from "./components/Header"
import MyLoading from "./components/Loading"
export default {
  name: 'app',
  components:{MyHeader,MyLoading},
  computed:{
    ok(){
        return this.$root.ok
    }
  }
}
</script>
<style>
  *{margin:0;padding:0}
  ul{list-style:none}
#app {
  font-famliy:"微软雅黑";
  color: #2c3e50;
  font-smoothing: antialiased;
  position:relative;
  height:100vh;
  background:url("assets/images/back.jpg");
  background-size:cover
}
.fade-enter-active,.fade-leave-active{
    transition:all 1s
}
.fade-enter,.fade-leave-to{
  opacity:0
}
</style>
