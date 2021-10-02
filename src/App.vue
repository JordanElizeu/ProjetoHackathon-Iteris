<template>
  <v-app>
    <HelloWorld/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components:{
    HelloWorld    
  }
};
</script>
