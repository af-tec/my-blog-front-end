<template>
  <div>

    <div
      v-if="article.image"
      id="banner"
      class="uk-height-small uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light"
      :data-src="article.image.url"
      uk-img
    >
      <h1>{{ article.title }}</h1>
    </div>

    <div class="uk-section">

      <div class="uk-container uk-container-small">
        <div class="uk-margin">
          <span class="uk-label"
                id="category"
                v-if="article.category"
            >
                {{ article.category.name }}
            </span>
          <span id="published-date" class="uk-text-meta" v-if="article.published_at">
              {{ moment(article.published_at).format("Do MMMM YYYY") }}
          </span>
        </div>
        <vue-markdown-it
          v-if="article.content"
          :source="article.content"
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
import VueMarkdownIt from "vue-markdown-it";
import gql from "graphql-tag";
export default {
  data() {
    return {
      article: {},
      moment: moment,
      api_url: process.env.VUE_APP_STRAPI_API_URL || "http://localhost:1337",
      routeParam: this.$route.params.id
    };
  },
  components: {
    VueMarkdownIt
  },
  apollo: {
    article: {
      query: gql`
        query Articles($id: ID!) {
          article(id: $id) {
            id
            title
            content
            image {
              url
            }
            category {
              id
              name
            }
            published_at
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