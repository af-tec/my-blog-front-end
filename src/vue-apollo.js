import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";


// HTTP connection to API

const httpLink = createHttpLink({

    uri: process.env.VUE_APP_STRAPI_API_URL + "/graphql" || "http://localhost:1337/graphql"
});

// Cache impl

const cache = new InMemoryCache();


const apolloClient = new ApolloClient({
    link: httpLink,
    cache
});

export default apolloClient