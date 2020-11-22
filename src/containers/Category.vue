<template>
  <div>
    <div class="uk-section">
      <div class="uk-container uk-container-large">
        <h1 class="uk-align-center uk-text-center">{{ category.name }}</h1>
        <router-link :to="{ path:'/blog-posts'}" class="uk-link-reset uk-text-center uk-align-center"> All Blog Posts </router-link>
        <ArticlesList :articles="category.articles || []"></ArticlesList>
      </div>
    </div>
  </div>
</template>

<script>
import ArticlesList from "../components/ArticlesList";
import gql from "graphql-tag";

export default {
  data() {
    return {
      category: [],
      routeParam: this.$route.params.id
    };
  },
  components: {
    ArticlesList
  },
  apollo: {
    category: {
      query: gql`
        query Category($id: ID!) {
          category(id: $id) {
            name
            articles {
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
            }
          }
        }
      `,
      variables() {
        return { id: this.routeParam };
      }
    }
  }
};
</script>
