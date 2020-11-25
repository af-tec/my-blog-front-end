<template>
  <div>
    <div id="home-background" class="uk-height-xlarge uk-background-cover uk-light uk-flex" >
      <div  class="uk-align-center uk-margin-auto uk-margin-auto-vertical">
        <img class="uk-margin-medium-top uk-align-center " data-src="https://res.cloudinary.com/alexpeebles/image/upload/v1603799480/profile_wczyeu.png"
              alt="profile photo" height="300" width="300" uk-img> 
          <h1 class="title uk-align-center uk-text-center"> Alex Peebles</h1>
      </div>
    </div>
    <div  class="uk-section uk-section-small">
      <div class="uk-container uk-container-xsmall">
            <h2 class="uk-align-center uk-text-center"> About me </h2>
            <div>
              <p>
                  Hi! My name is Alex Peebles and I am a 23 year old programmer, music producer and people person. I have made this site to share my personal 
                  programming projects, music as well as thoughts/reviews on all things tech, film, food and music related. Web development has always been something I enjoy
                  to experiment with so this site may change its look and feel from time to time whilst I mess about with new layouts, colour schemes and template engines.
              </p>
              <p>
                  I have made this site using Vue, Strapi, GraphQL and UiKit. I love trying out new languages, tools and frameworks to see how they work and
                  what I can build with them. All my projects can be found on my GitHub as well as on the Projects page where I also share my process and reflection on each project I complete.
              </p>
            </div>
            <h3 class="uk-align-center uk-text-center"> Favourite Technologies </h3>
            <div uk-slider v-if="isMobile()">
            <ul class="uk-slider-items uk-child-width-1-1">
                <div v-for="tech in technologies"
                :key="tech.name">
                  <li>
                    <div class="uk-card-default">
                      <div class="uk-card-media-top uk-cover-container uk-text-center uk-align-center">
                        <img  :src="getImgUrl(tech.img)" width="100" height="100" alt="">
                      </div>
                      <div class="uk-text-large uk-text-center uk-margin-top"> {{tech.name}} </div>
                    </div>
                  </li>
                </div>
            </ul>
            </div>
            <div v-else class="uk-grid uk-child-width-1-3@m uk-child-width-1-2@xs" uk-grid>
              <div v-for="tech in technologies"
              :key="tech.name">
                <div class="uk-card-default">
                  <div class="uk-card-media-top uk-cover-container uk-text-center uk-align-center">
                    <img  :src="getImgUrl(tech.img)" width="100" height="100" alt="">
                  </div>
                  <div class="uk-text-large uk-text-center uk-margin-top"> {{tech.name}} </div>
                </div>
              </div>
            </div>
        </div>
      </div>
  </div>
</template>
<script>
import isMobile from '../mixins/isMobile';

export default {
  name: "Home",
  data() {
    return {
      technologies: [
          {
            name: 'Node.js',
            img: 'node-js-brands.svg'
          },
          {
            name: 'Vue.js',
            img: 'vuejs-logo.svg'
          },
          {
            name: 'MongoDB',
            img: 'MongoDB-leaf.svg'
          },
          {
            name: 'Kotlin',
            img: 'Kotlin-logo.svg'
          },
          {
            name: 'Python',
            img: 'python-logo-generic.svg'
          },
          {
            name: 'Java',
            img: 'java-logo.svg'
          }
      ]
    }
  },
  mixins: [isMobile],
  methods: {
    getImgUrl(pic) {
      if (pic === undefined) {
        return;
      }
      return require('../assets/'+pic);
    },
    shuffle(array) {
      for(var i = 0; i < array.length - 1; i++) {
        var j = i + Math.floor(Math.random() * (array.length - i));
        var temp = array[j];
        array[j] = array[i];
        array[i] = temp;
      }
      return array

    }
  },
  created() {
    this.shuffle(this.technologies);
  }

}
</script>