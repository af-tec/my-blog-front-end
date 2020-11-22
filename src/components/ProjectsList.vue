<template>
    <div class="uk-section">
        <div class="uk-container uk-container-medium">
            <div class="uk-grid-medium uk-child-width-1-2@m" uk-grid>
                <router-link
                    v-for="project in projects"
                    :to="{ path: '/projects/' + project.id  }"
                    class="uk-link-reset"
                    :key="project.id">
                    <div class="uk-card uk-card-default">
                        <div class="uk-card-badge uk-label"
                            id="category"
                            v-if="project.technology"
                        >
                            {{ project.technology.name }}
                        </div>
                        <div class="uk-card-media-top uk-cover-container">
                            <img :src="project.image.url" class="uk-height-medium uk-align-center" alt=""/>

                        </div> 
                        <div class="uk-card-footer">
                            <div class="uk-text-large uk-text-center"> <h3> {{ project.title }}  </h3> </div>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data: function() {
        return {
            api_url: process.env.VUE_APP_STRAPI_API_URL || "http://localhost:1337",
      state: process.env.NODE_ENV
        };
    },
    props: {
        projects: Array
    },

}

</script>