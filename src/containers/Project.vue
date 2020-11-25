<template>
  <div>
    <div v-if="isMobile()">
      <div class="uk-margin-top">
          <h1 class="project-title uk-align-center uk-text-center">{{ project.title }}</h1>
        <div
          class="uk-height-small uk-flex uk-flex-center uk-flex-middle uk-align-center uk-width-auto uk-background-contain uk-light uk-padding"
          v-if="project.image"
          :data-src="project.image.url"
          uk-img
        >
        </div>
      </div> 
    </div>
   <div v-else>
      <div
        v-if="project.image"
        id="banner"
        class="uk-height-small uk-flex uk-flex-center uk-flex-middle uk-align-center uk-width-auto uk-background-contain uk-light uk-padding"
        :data-src="project.image.url"
        uk-img
      >
        <h1 id="project-title" class="title">{{ project.title }}</h1>
      </div>
   </div>
    <div class="uk-section">
      <div class="uk-container uk-container-small">
        <div class="uk-margin">
          <span class="uk-label uk-margin-right-small"
                id="category"
                v-if="project.technology"
            >
                {{ project.technology.name }}
            </span>
            <span v-if="project.github_link">
              <a :href=project.github_link> View on GitHub </a>   
            </span>
          
            <span v-if="project.project_link">
            / <a :href=project.project_link> View Project Site </a>
            </span>
        </div>

        <vue-markdown-it
          v-if="project.content"
          :source="project.content"
          id="editor"
        />
        <div  id="top" uk-tooltip="Scroll Up">
          <a id="top-icon" uk-icon="icon:  arrow-up; ratio: 2" href="#banner" uk-scroll></a>
        </div>
      </div>
    </div>
    </div>
</template>

<script>

var moment = require("moment");
import isMobile from '../mixins/isMobile';
import VueMarkdownIt from "vue-markdown-it";
import gql from "graphql-tag";
export default {
  data() {
    return {
      project: {},
      moment: moment,
      api_url: process.env.VUE_APP_STRAPI_API_URL || "http://localhost:1337",
      routeParam: this.$route.params.id
    };
  },
  mixins: [isMobile],
  components: {
    VueMarkdownIt
  },
  apollo: {
    project: {
      query: gql`
        query Projects($id: ID!) {
          project(id: $id) {
            id
            title
            content
            created
            image {
              url
            }
            technology {
              id
              name
            }
              github_link
              project_link
          }
        }
      `,
      variables() {
        return {
          id: this.routeParam
        };
      }
    }
  }
};
</script>