<template>
  <nav>
    <div class="nav-wrapper">
      <ul class="left hide-on-med-and-down">
        <a class="brand-logo">¡Bienvenido
          <span>{{userDetailById.name}}
                  {{userDetailById.last_name}}</span>
          !!  
        </a> 
      </ul>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <button id="Account_button" 
          v-on:click="createAccount">
          Crear cuenta</button>
        <li><a href="collapsible.html"
          class="Account_button"
          >Cerrar Sesión</a></li>
      </ul>
    </div>
  </nav>
  <div class="wall">
    <div class="container">
      <Post
        ref="post_box"
        v-bind:nickname="this.petcta"
        v-bind:url_pet="url_pet_post"
        v-bind:account_id="pet_id"
        msg_post="Escribe aquí"
        class="section"
        @click="send_post"
      ></Post>
      <h3 class="section">¿Qué hacen los funpets hoy?</h3>
      <Publication
        ref="publication_wall"
        v-for="post_elem in getPosts"
        v-bind:text_info="post_elem.text"
        v-bind:date_info="post_elem.dateCreation"
        v-bind:url_pet_info="post_elem.image_ref"
        v-bind:nickname_info="post_elem.account"
        v-bind:key="post_elem.dateCreation"
        @click="handlePetAcc"
      >
      </Publication>
    </div>
  </div>
  <footer class="page-footer">
    <div class="container">
      <div class="row">
        <div class="col l6 s12">
          <h5 class="white-text">FUNPETS MS</h5>
          <p class="grey-text text-lighten-4">
            Un gran sitio para tus pequeños amigos.
          </p>
        </div>
        <div class="col l4 offset-l2 s12">
          <h5 class="white-text">Nuestras redes</h5>
          <ul>
            <li><a class="grey-text text-lighten-3" href="#!">Facebook</a></li>
            <li><a class="grey-text text-lighten-3" href="#!">Twitter</a></li>
            <li><a class="grey-text text-lighten-3" href="#!">Instagram</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="container">© 2021 Copyright Grupo #8 Mision Tic 2021</div>
    </div>
  </footer>
</template>

<script>
import Post from "@/components/Post.vue";
import Publication from "@/components/Publication.vue";
import gql from "graphql-tag";
import jwt_decode from "jwt-decode";

export default {
  name: "Home",
  components: {
    Post,
    Publication,
  },

    data: function() {
      return {
        user: localStorage.getItem("usr"),
        petcta: localStorage.getItem("petcta"),
        userId: jwt_decode(localStorage.getItem("token")).user_id,

        getPosts: {
          account: "",
          text: "",
          image_ref: "",
          video_ref: "",
          git_ref: "",
          dateCreation: ""
        },
        
        userDetailById: {
          username: "",
          name: "",
          last_name: "",
        },

      };
    },

    apollo: {
      getPosts: {
        query: gql`
          query ($account: String) {
            getPosts(account: $account) {
              account
              text
              image_ref
              video_ref
              git_ref
              dateCreation
            }
          }
        `,
        variables() {
          return {
            account: null,
          };
        },
      },

      userDetailById: {
        query: gql`
          query ($userDetailByIdId: Int!) {
            userDetailById(id: $userDetailByIdId) {
              username
              name
              last_name
            }
          }
        `,
        variables() {
          return {
            userDetailByIdId: this.userId,
          };
        }
      },


    },

    created: function () {
      this.$apollo.queries.getPosts.refetch();
    },

  
};

</script>

<style scoped>
nav {
  background-color: black;
  font-family: "Architects Daughter", cursive;
}
#brand-logo {
  position: relative;
  left: 50px;
}

#Account_button {
  font-family: "Architects Daughter", cursive;
  background-color: black;
  color: white;
  position: relative;
  right: 230px;
  bottom: 1px;
  border: black;
  cursor: pointer;
}

#main_text_01 h1 {
  font-family: "Architects Daughter", cursive;
  font-size: 40px;
}

#New_Post {
  text-align: center;
  position: relative;
  width: 664px;
  height: 310px;
  border: 3px solid #000;
  background-color: #fff;
  bottom: -16px;
  left: 330px;
  box-shadow: 2px 2px 2px 1px black;
}

#main_text_02 h1 {
  font-family: "Architects Daughter", cursive;
  font-size: 40px;
}

.container_wall {
  width: 900px;
  height: auto;
  margin: auto;
}
.muro {
  background-image: url("../assets/wp2016066.jpg");
  /* Full height */
  height: 100%;
  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

h3 {
  margin: 40px 0 0;
  font-family: "Architects Daughter", cursive;
  color: #2c3e50;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  font-family: "Architects Daughter", cursive;
  color: #2c3e50;
}
.shadow_box {
  box-shadow: 2px 2px 2px 1px black;
}
span {
  font-family: "Architects Daughter", cursive;
}

footer {
  background-color: black;
  font-family: "Architects Daughter", cursive;
}
</style>
