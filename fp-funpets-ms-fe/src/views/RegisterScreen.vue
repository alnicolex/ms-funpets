<template>
    <div>
        <div id="wrapper">
            <div id="container">
                <div id="header">
                    <div id="rectangle">
                        <div id="inside">
                            <div id="A1">
                                <h1>Registro Usuario</h1>
                            </div>
                            <div id="formulario">
                                <div class="row">
                                    <div class="col s8">
                                        <div class="row">
                                            <div class="input-field col s12 offset-s3">
                                            <input type="text" id="autocomplete-input" class="autocomplete" v-model="user.email">
                                            <label for="autocomplete-input">Correo</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col s8">
                                        <div class="row">
                                            <div class="input-field col s12 offset-s3">
                                            <input type="text" id="autocomplete-input" class="autocomplete" v-model="user.username">
                                            <label for="autocomplete-input">Nombre de usuario</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col s8">
                                        <div class="row">
                                            <div class="input-field col s12 offset-s3">
                                            <input type="password" id="autocomplete-input" class="autocomplete" v-model="user.password">
                                            <label for="autocomplete-input">Contraseña</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col s8">
                                        <div class="row">
                                            <div class="input-field col s12 offset-s3">
                                            <input type="text" id="autocomplete-input" class="autocomplete" v-model="user.name">
                                            <label for="autocomplete-input">Nombre</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col s8">
                                        <div class="row">
                                            <div class="input-field col s12 offset-s3">
                                            <input type="text" id="autocomplete-input" class="autocomplete" v-model="user.last_name">
                                            <label for="autocomplete-input">Apellido</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col s8">
                                        <div class="row">
                                            <div class="input-field col s12 offset-s3">
                                            <input type="text" id="autocomplete-input" class="autocomplete" v-model="user.phone">
                                            <label for="autocomplete-input">Telefono(OPCIONAL)</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col s8">
                                        <div class="row">
                                            <div class="input-field col s12 offset-s3">
                                            <input type="text" id="autocomplete-input" class="autocomplete" v-model="user.description">
                                            <label for="autocomplete-input">Descripción(OPCIONAL)</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col s8">
                                        <div class="row">
                                            <div class="input-field col s12 offset-s3">
                                            <input type="date" id="autocomplete-input" class="autocomplete" v-model="user.birthdate">
                                            <label for="autocomplete-input">Fecha de nacimiento</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="buttons">
                                    <button type="submit" id="button_login" class="waves-effect waves-light btn orange darken-1" v-on:click="processSignUp">
                                    Guardar
                                    </button>
                                </div>
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
  name: "register",   
    data: function() {
        return {
            user: {
                username: "",
                password: "",
                name: "",
                last_name: "",
                email: "",
                phone: "",
                description: "",
                birthdate: "",
            }
        };
    },

    methods: {
        processSignUp: async function() {
           await this.$apollo
            .mutate({
                mutation: gql`
                    mutation($userInput: SignUpInput!) {
                        signUpUser(userInput: $userInput) {
                            refresh
                            access
                        }
                    }
                `,
                variables: {
                    userInput: this.user,
                },
            })
            .then((result) => {
                localStorage.setItem("usr", this.user.username);
                localStorage.setItem("token", result.data.signUpUser.access);

                let dataLogIn = {
                    username: this.user.username,
                    token_access: result.data.signUpUser.access,
                    token_refresh: result.data.signUpUser.refresh,
                };
                this.$emit("completedSignUp", dataLogIn);
                alert("Se creo el usuario");
                this.$router.push({name: "Account"});
            })
            .catch(() => {
                alert("ERROR: Fallo en el registro.")
            });
        },
    }    
}
</script>

<style scoped>
#wrapper {
    background: #fff;
    width: 100%;
    height: auto;
}
#container{
    width: 1340px;
    height: auto;
    margin: auto;
}
#header{
    height: 1800px;
    width: 1344px;
    padding: 50px 50px 0px 50px;
    background-image: url("../assets/wp2016066.jpg");
}
#rectangle{
    text-align: center;
    position: relative;
    width: 470px; 
    height: 1255px; 
    border: 3px solid #000;
    background-color: #fff;
    bottom: 15px;
    left: 350px;
    box-shadow: 2px 2px 2px 1px black;
}
#inside{
    position: center;
    top: 27px;
}
#A1 h1{
    font-family: 'Architects Daughter', cursive;
    font-size: 40px;
}
#formulario{
    font-family: 'Architects Daughter', cursive;
}
#email{
    font-family: 'Architects Daughter', cursive;
    width: 250px;
    border: 2px solid black;
    box-shadow: 2px 2px 2px 1px black;
}
#password{
    font-family: 'Architects Daughter', cursive;
    width: 250px;
    border: 2px solid black;
    box-shadow: 2px 2px 2px 1px black;
}
#button_register{
    position: relative;
    top: -15px;
    font-size: 16px;
    cursor: pointer;
}
#A2{
    position: relative;
    top: 5px;
    right: 16px;
    font-family: 'Architects Daughter', cursive;
}
.B1{
    position: relative;
    left: 139px;
    bottom: 37px;
    font-family: 'Architects Daughter', cursive;
}
#A3{
    position: relative;
    top: -15px;
    right: 20px;
    font-family: 'Architects Daughter', cursive;
}
.B2{
    position: relative;
    left: 115px;
    bottom: 37px;
    font-family: 'Architects Daughter', cursive;
}
</style>