<template>
  <div>
    <div class="uk-section">
      <div class="uk-container uk-container-large">

        <h1 class="uk-align-center uk-text-center"> My Blog</h1>
        <div uk-grid class="uk-text-center uk-align-center">
          <router-link 
          v-for="category in categories"
          :to="{ path: '/category/' +category.id }"
          class="uk-link-reset uk-text-center"
          :key="category.id">
          {{ category.name }}
          </router-link>
        </div>
        <ArticlesList :articles="articles"></ArticlesList>
      </div>
    </div>
  </div>
</template>

<script>
import ArticlesList from "../components/ArticlesList.vue";
import gql from "graphql-tag";

export default {
  components: {
    ArticlesList
  },
  data() {
    return {
      articles: [],
      categories: []
    };
  },
  apollo: {
    articles: gql`
      query Articles {
        articles {
          id
          title
          content
          image {
            url
          }
          category {
            name
          }
          published_at
        }
      }
    `,
    categories: gql`
    query Categories {
        categories {
            id
            name
        }
    }
`
  }
};
</script>
