<template>
  <div>
    <div class="uk-section">
      <div class="uk-container uk-container-large">
        <h1 class="uk-align-center uk-text-center"> Projects </h1>
        <ProjectsList :projects="projects"></ProjectsList>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectsList from "../components/ProjectsList.vue";
import gql from "graphql-tag";

export default {
  components: {
    ProjectsList
  },
  data() {
    return {
      projects: []
    };
  },
    metaInfo() {
    return {
      title: `${this.project.title}`,
      meta: [
        { name: "og:image", content: `${this.project.image}`}
      ],
    }
  },
  apollo: {
    projects: gql`
      query Projects {
        projects {
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
    `
  }
};
</script>
