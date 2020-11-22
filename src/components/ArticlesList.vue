<template>
    <div class="uk-section">
        <div class="uk-container uk-container-xsmall">    
            <router-link
                v-for="article in articles"
                :to="{ path: '/blog-posts/' + article.id  }"
                class="uk-link-reset"
                :key="article.id">
                <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
                    <div class="uk-card-media-left uk-cover-container">
                        <img :src="article.image.url" class="uk-width-*" alt=""/>
                    </div>
                    <div class="uk-card-body">
                        <div class="uk-card-badge uk-label"
                            id="category"
                            v-if="article.category"
                        >
                            {{ article.category.name }}
                        </div>
                        <div class="uk-text-large"> <h3> {{ article.title }}  </h3> </div>
                        <div class="uk-align-center">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        </div>
                    </div>
                </div>
            </router-link>
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
        articles: Array
    }

}
</script>