<template>
  <div class="post_publish">
    <div class="row">
        <div class="col s12 m8 offset-m2 l6 offset-l3"> 
            <div class="card-panel white z-depth-1 shadow_box orange lighten-2" style="margin-top:-30px;">
                <div class="card-action">
                    <a href="#" v-on:click=" publish_post"><span class="flow-text">Publicar</span></a>
                </div>
            </div>
        </div>
    </div> 
  </div>
</template>

<script>
import gql from "graphql-tag";
export default {
  name: "Login",
    data: function() {
      return {
        user: {
          username: "",
          password: "",
        },
      };
    },
    methods: {
      processLogInUser: async function() {
        await this.$apollo
        .mutate({
          mutation: gql`
            mutation($credentials: CredentialsInput!) {
              logIn(credentials: $credentials) {
                refresh
                access
              }
            }
          `,
          variables: {
            credentials: this.user,
          },
        })
        .then((result) => {
          let dataLogIn = {
            username: this.user.username,
            token_access: result.data.logIn.access,
            token_refresh: result.data.logIn.refresh,
          };
          this.$emit("completedLogIn", dataLogIn);
        })
        .catch(() => {
          alert("ERROR 401: Credenciales Incorrectas.");
        });
      },
    },
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
  font-family: 'Architects Daughter', cursive;
  color: #2C3E50;
}
.shadow_box{
  box-shadow: 0px 5px 5px 1px orange;
}
span{
  font-family: 'Architects Daughter', cursive;
}
</style>
