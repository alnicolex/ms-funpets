<template>
  <div id="wrapper">
      <div id="container">
        <div id="header">
          <div id="rectangle">
            <div id="inside">
              <div id="A1">
                <h1>Iniciar Sesión</h1>
              </div>
              <div id="formulario">
                <div class="row">
                  <div class="col s8">
                    <div class="row">
                      <div class="input-field col s12 offset-s3">
                        <input
                          type="text"
                          id="usuario"
                          class="autocomplete"
                          v-model="user.username"
                        />
                        <label for="usuario">Usuario</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col s8">
                    <div class="row">
                      <div class="input-field col s12 offset-s3">
                        <input
                          type="password"
                          id="password"
                          class="validate"
                          v-model="user.password"
                        />
                        <label for="password">Contraseña</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="buttons">
                  <button
                    type="submit"
                    id="button_login"
                    class="waves-effect waves-light btn orange darken-1"
                    v-on:click="processLogInUser"
                  >
                  Entrar
                </button>
              </div>
              <div id="A2">
                <p>Aún no tienes cuenta? Registrate</p>
                <a class="B1" v-on:click="enter_register">Aquí</a>
              </div>
            </div>
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
          localStorage.setItem("usr", this.user.username);
          localStorage.setItem("token", result.data.logIn.access);
          
          let dataLogIn = {
            username: this.user.username,
            token_access: result.data.logIn.access,
            token_refresh: result.data.logIn.refresh,
          };
                    
          this.$emit("completedLogIn", dataLogIn);
          this.$router.push({name: "Home"});
        })
        .catch(() => {
          alert("ERROR 401: Credenciales Incorrectas.");
        });
      },
      enter_register: function() {
        this.$router.push({name: "Register"});
      }
    },
  }
</script>

<style scoped>
#wrapper {
  background: #fff;
  width: 100%;
  height: auto;
}

#container {
  width: 1340px;
  height: auto;
  margin: auto;
}

#header {
  height: 645px;
  width: 1344px;
  padding: 50px 50px 0px 50px;
  background-image: url("../assets/wp2016066.jpg");
}

#rectangle {
  text-align: center;
  position: relative;
  width: 470px;
  height: 570px;
  border: 3px solid #000;
  background-color: #fff;
  bottom: 15px;
  left: 350px;
  box-shadow: 2px 2px 2px 1px black;
}

#inside {
  position: relative;
  top: 27px;
}

#A1 h1 {
  font-family: "Architects Daughter", cursive;
  font-size: 40px;
}

#formulario {
  font-family: "Architects Daughter", cursive;
}

#email {
  font-family: "Architects Daughter", cursive;
  width: 250px;
  border: 2px solid black;
  box-shadow: 2px 2px 2px 1px black;
}

#password {
  font-family: "Architects Daughter", cursive;
}

#button_login {
  position: relative;
  top: -15px;
  font-size: 16px;
  cursor: pointer;
}

#A2 {
  position: relative;
  top: 5px;
  right: 16px;
  font-family: "Architects Daughter", cursive;
}

.B1 {
  position: relative;
  left: 139px;
  bottom: 37px;
  font-family: "Architects Daughter", cursive;
  color:blue;
  cursor: pointer;
}

#A3 {
  position: relative;
  top: -29px;
  right: 20px;
  font-family: "Architects Daughter", cursive;
}

.B2 {
  position: relative;
  left: 115px;
  bottom: 37px;
  font-family: "Architects Daughter", cursive;
}
</style>
