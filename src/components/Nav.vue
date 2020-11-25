<template>
    <div id="nav">
        <nav class ="uk-navbar-container" uk-navbar>
            <div class="uk-navbar-left">
                <ul class="uk-navbar-nav">
                    <li>
                        <router-link to="/"> Alex Peebles </router-link>
                    </li>
                </ul>
            </div>
            <div class="uk-navbar-right">
                <div v-if="isMobile()">
                    <a href="#off-nav" class="uk-margin-right" uk-icon="menu" uk-toggle></a>
                    <div id="off-nav" uk-offcanvas="flip: true">
                        <div class="uk-offcanvas-bar">
                            <ul class="uk-offcanvas-close uk-nav uk-nav-center uk-text-center uk-align-center">
                                <li class="uk-nav-header">
                                    <router-link to="/projects"> Projects </router-link>                        
                                </li>
                                <li class="uk-nav-header">
                                    <router-link to="/blog-posts"> Blog </router-link>
                                </li>
                                <li class="uk-nav-header">
                                    <router-link to="/tracks"> Music </router-link>
                                </li>
                                <li class="uk-nav-header">
                                    <router-link to="/contact"> Contact </router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div v-else>
                    <ul class="uk-navbar-nav">
                        <li>
                            <router-link to="/projects"> Projects </router-link>                        
                        </li>
                        <li>
                            <router-link to="/blog-posts"> Blog </router-link>
                        </li>
                        <li>
                            <router-link to="/tracks"> Music </router-link>
                        </li>
                        <li>
                            <router-link to="/contact"> Contact </router-link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>
<script>
import isMobile from '../mixins/isMobile'
export default {
    name: 'Nav',
    mixins: [isMobile],
    data() {
        return {
        menu: false
        }
    },


    
}
</script>