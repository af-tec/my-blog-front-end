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
        </nav>
    </div>
</template>
