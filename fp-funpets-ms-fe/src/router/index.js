import gql from "graphql-tag";
import { createRouter, createWebHashHistory } from 'vue-router'
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import Home from '../views/Home.vue'
import MainScreen from '../views/MainScreen.vue'
import RegisterScreen from '../views/RegisterScreen.vue'
import LoginScreen from '../views/LoginScreen.vue'
import Account from '../views/AccountRegisterScreen.vue'

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: MainScreen,
    meta: { requiresAuth: false }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterScreen,
    meta: { requiresAuth: false }
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginScreen,
    meta: { requiresAuth: false }
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: false }
  },
  {
    path: '/account',
    name: 'Account',
    component: Account,
    meta: { requiresAuth: false }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

const apolloClient = new ApolloClient({
  link: createHttpLink({ uri: '' }),
  cache: new InMemoryCache()
})

async function isAuth() {
  if (localStorage.getItem("token_access") === null || localStorage.getItem("token_refresh") === null) {
    return false;
  }

  try {
    var result = await apolloClient.mutate({
      mutation: gql `
        mutation ($refresh: String!) {
          refreshToken(refresh: $refresh) {
            access
          }
        }
      `,
      variables: {
        refresh: localStorage.getItem("token_refresh"),
      },
    })
    localStorage.setItem("token_access", result.data.refreshToken.access);
    return true;
  } catch {
    localStorage.clear();
    alert("Su sesión expiró, por favor vuelva a iniciar sesión");
    return false;
    }
}

router.beforeEach(async(to) => {
  var is_auth = await isAuth();
  if (is_auth == to.meta.requiresAuth) return true
  if (is_auth) return { name: "home" };
  return { name: "logIn" };
})

export default router
