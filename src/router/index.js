import Vue from 'vue'
import Router from 'vue-router'
import ProvinceList from '../components/ProvinceList.vue'
import cityList from '../components/cityList.vue'
import country from '../components/country.vue'
import Weather from '../components/Weather.vue'
import Current from '../components/CurrentWeather.vue';
import Sevenday from '../components/SevenDayWeather.vue';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component:ProvinceList
    },
    {
      path: '/home',
      name: 'Home',
      component:ProvinceList
    },
    {
      path: '/citylist',
      name: 'City',
      component:cityList
    },
    {
      path: '/country',
      name: 'Country',
      component:country
    },
    {
      path: '/weather',
      name: 'Weather',
      component:Weather,
      children:[
        {
          path: 'currentweather',
          name: 'Current',
          component:Current
        },
        {
          path: 'sevendayweather',
          name: 'Sevenday',
          component:Sevenday
        },
      ]


    }
  ]
})
