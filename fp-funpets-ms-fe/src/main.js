import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import { createApolloProvider } from '@vue/apollo-option'
import { setContext } from 'apollo-link-context'
import "materialize-css"; // It installs the JS asset only
import "materialize-css/dist/css/materialize.min.css";

const httpLink = createHttpLink({
    uri: 'https://funpets-orquestador-ms.herokuapp.com/',
})

const authLink = setContext((_, { headers }) => {
    return {
        headers: {
            ...headers,
            "Authorization": localStorage.getItem("token_access") || ""
            }
        }
})

const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
})

const apolloProvider = new createApolloProvider({
    defaultClient: apolloClient
})

createApp(App).use(router).use(apolloProvider).mount('#app')
