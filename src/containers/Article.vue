<template>
  <div>
    <div>
      <div
        v-if="article.image"
        id="banner"
        class="uk-background-cover"
        :data-src="article.image.url"
        uk-img
      >

      </div>
    </div>
    <div class="uk-section">
      <div class="uk-container uk-container-small">
        <h2 class="article-title">{{ article.title }}</h2>
        <div class="uk-margin-small-bottom">
          <h4
            v-if="article.category"
          >
              {{ article.category.name }}
          </h4>
          <h5> {{ moment(article.published_at).format("Do MMMM YYYY") }} </h5>

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
import isMobile from '../mixins/isMobile';
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
  metaInfo() {
    return {

    
      title: `${this.article.title}`,
      meta: [
        { property: "description", content: `${this.article.description}`},
        { property: "og:image", content: `${this.article.image}`}
      ],
    }
  },
  mixins: [isMobile],
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
            description
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