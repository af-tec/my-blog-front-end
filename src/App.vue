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
  metaInfo: {
    title: "Alex Peebles's Blog"
  },
  meta: [
    { charset: 'utf-8' },
    { name: "og:site_name", content: "Alex Peebles's Blog"},
    { name: 'description', content: 'Personal site with projects, blog posts and more!'},
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }

  ]

  ,
  data () {
    this.loaded
  },
  components: { Nav, Footer },
  created: function() {
    this.loaded = true
  }
};
</script>