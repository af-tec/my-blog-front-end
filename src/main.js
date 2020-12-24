import Vue from 'vue'


import VueApollo from "vue-apollo";
import apolloClient from "./vue-apollo";
import VueRouter from "vue-router";
import VueMeta from "vue-meta";
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(VueApollo);
Vue.use(VueRouter);
Vue.use(VueMeta);
const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      components: require("./containers/Home.vue")
    },
    {
      path: "/blog-posts",
      components: require("./containers/Articles.vue")
    },
    {
      path: "/blog-posts/:id",
      components: require("./containers/Article.vue")
    },
    {
      path: "/projects",
      components: require("./containers/Projects.vue")
    },
    {
      path: "/projects/:id",
      components: require("./containers/Project.vue")
    },
    {
      path: "/category/:id",
      components: require("./containers/Category.vue")
    },

    {
      path: "/tracks",
      components: require("./containers/Tracks.vue")
    },
    {
      path:"/contact",
      components: require("./containers/Contact.vue")

    },
    {
      path:"/technology/:id",
      components: require("./containers/Technology.vue")

    },
    {
      path: "*",
      components: require("./error/404.vue")
    }

  ]
});

new Vue({
  apolloProvider,
  router,
  render: h => h(App),
}).$mount('#app')
