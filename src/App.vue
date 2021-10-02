<template>
  <v-app>
    <AppTopBar/>
    <v-main>
      <router-view></router-view>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import AppTopBar from './components/shared/AppTopBar.vue'
import Footer from './components/shared/Footer.vue'

export default {
  name: 'App',
  components:{
    AppTopBar,
    Footer   
  }
};
</script>
