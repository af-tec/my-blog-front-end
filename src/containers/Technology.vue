<template>
  <div>
    <div class="uk-section">
      <div class="uk-container uk-container-large">
        <h1 class="uk-align-center uk-text-center">{{ technology.name }}</h1>
        <router-link :to="{ path:'/projects'}" class="uk-link-reset uk-text-center uk-align-center"> All Projects </router-link>
        <ProjectsList :projects="technology.projects || []"></ProjectsList>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectsList from "../components/ProjectsList";
import gql from "graphql-tag";

export default {
  data() {
    return {
      technology: [],
      routeParam: this.$route.params.id
    };
  },
  components: {
    ProjectsList
  },
  apollo: {
    technology: {
      query: gql`
        query Technology($id: ID!) {
          technology(id: $id) {
            name
            projects {
              id
              title
              content
              image {
                url
              }
              created
              technology {
                id
                name
              }
              github_link
              project_link
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
