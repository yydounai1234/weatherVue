<template>
  <div class="header">
      <h3><span @click="fn" v-show="bol" class="back"></span>{{title}}<span @click="goHome" class="home"></span></h3>
  </div>
</template>
<script>
  export default {
    name: 'header',
    computed:{
        title(){
            return this.$root.title
        },
        bol(){
            if (this.$route.path=="/"||this.$route.path=="/home"){return false}else{return true}
        }
    },
    methods:{
        fn(){
          if(this.$route.matched.length>1){this.$router.push(`/country?id=${this.$route.query.id}`);return};
          if(this.$route.path==="/country"){this.$router.push(`/citylist?id=${this.$route.query.id}`);return};
          if(this.$route.path==="/citylist"){this.$router.push(`/home`);return};
        },
        goHome(){
        this.$router.push("/")
        }
    }
  }
</script>
<style>
  .header .home{z-index:1000;position:absolute;right:1%;top:35%;font-size:2rem;padding:1;background:url("../assets/images/Home_27.166042446941px_1183345_easyicon.net.png")no-repeat 0 0;display:block;width:1.5rem;height:1.4rem;background-size:contain}
  .header .back{z-index:1000;position:absolute;left:2%;top:30%;font-size:2rem;padding:1;background:url("../assets/images/back_256px_1171612_easyicon.net.png")no-repeat -7px -5px;display:block;width:2.5rem;height:2.5rem;background-size:cover}
  .header h3{text-align: center;padding:1.5rem 0;position:relative;font-size:1.2rem;color:mediumvioletred;background:url("../assets/images/dong.gif");background-size:50%}
</style>
