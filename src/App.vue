<template>  
  <div id="app">
    <Nav />
    <router-view :key="$route.fullPath"></router-view>
    <Footer v-if="loaded" />
  </div>
</template>

<script>  
import Nav from "./components/Nav.vue"
import Footer from "./components/Footer.vue"
import '../style/site.css'

export default {  
  name: "App",
  data () {
    this.loaded
  },
  components: { Nav, Footer },
  created: function() {
    this.loaded = true
  }
};
</script>