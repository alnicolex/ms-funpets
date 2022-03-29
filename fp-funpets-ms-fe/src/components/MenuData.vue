<template>
    <div class="Menu"></div>

    <nav class="nav-wrapper orange">
        <!--<div class="container">-->
            <div class="row">
                <div class="col s2">
                <a href="javascript:void(0);" class="brand-logo black-text"><i class="material-icons">pets</i>FUNPETS</a></div>
                <ul class="right">
                    <div class="col s2">
                        <li><a href="javascript:void(0);"><i class="material-icons black-text">search</i></a></li></div>
                    <div class="col s2">
                        <li><a href="javascript:void(0);"><i class="material-icons black-text">person</i></a></li></div>
                    <div class="col s2">
                        <li><a href="javascript:void(0);" class="dropdown-trigger" data-target="dropdown1">
                        <i class="material-icons right black-text">menu</i></a></li></div>
                </ul>
            </div>
        <!--</div>-->
    </nav>

    <ul id="dropdown1" class="dropdown-content">
        <li><a href="javascript:void(0);">Mi Perfil</a></li>
        <li><a href="javascript:void(0);">Mis Mascotas</a></li>
        <li><a href="javascript:void(0);">Configuración</a></li>
        <li><a href="javascript:void(0);">Crear Cuenta</a></li>
        <li><a class="modal-trigger" href="#modal1">Cambiar Cuenta</a></li>
        <li class="divider"></li>
        <li><a href="javascript:void(0);" v-on:click="end_session">Cerrar Sesión</a></li>
    </ul>  
     
    <div id="modal1" class="modal">
        <div class="modal-content">
            <form>
            <h4>Cambiar Cuenta</h4>
                <ul class="collection" ref="sel_funpet">
                      <li class="collection-item avatar" v-for="pet_elem in pet_list"
                      v-bind:key="pet_elem.account_id">
                        <img v-bind:src="pet_elem.account_image" alt="" class="circle">
                        <span class="title">{{pet_elem.account_nickname }}</span>
                        <p>
                            <label>
                            <input class="with-gap" name="group1" type="radio" 
                            v-bind:value="`${pet_elem.account_id}|${pet_elem.account_nickname}|${pet_elem.account_image}`" v-model="picked" />
                            <span></span>
                            </label>
                        </p>
                    </li>

                </ul>
        <div class="modal-footer">
            <a href="javascript:void(0);"  class="modal-close waves-effect waves-green btn-flat" @click="handlePetAcc">Aceptar</a>
            <a href="javascript:void(0);" class=" btn modal-close waves-effect waves-green btn-flat">Cancelar</a>
        </div>
        </form>
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

<style scoped>
.dropdown-content{
    position:relative;
}
</style>