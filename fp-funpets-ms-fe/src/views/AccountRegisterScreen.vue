<template>
    <div>
        <div id="wrapper">
            <div id="container">
                <div id="header">
                    <div id="rectangle">
                        <div id="inside">
                            <div id="A1">
                                <h1>Registro Mascota</h1>
                            </div>
                            <div id="formulario">
                                <div class="row">
                                    <div class="col s8">
                                        <div class="row">
                                            <div class="input-field col s12 offset-s3">
                                            <input type="text" id="autocomplete-input" class="autocomplete" v-model="pet.nickname">
                                            <label for="autocomplete-input">Nickname de la mascota</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col s8">
                                        <div class="row">
                                            <div class="input-field col s12 offset-s3">
                                            <input type="text" id="autocomplete-input" class="autocomplete" v-model="pet.nombre">
                                            <label for="autocomplete-input">Nombre</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col s8">
                                        <div class="row">
                                            <div class="input-field col s12 offset-s3">
                                                <select v-model="pet.tipo">
                                                    <option value="" disabled selected>Seleccione especie</option>
                                                        <option value="1">Roedor</option>
                                                        <option value="2">Minino</option>
                                                        <option value="3">Canino</option>
                                                        <option value="4">Ave</option>
                                                </select>
                                                <label>Especie mascota</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col s8">
                                        <div class="row">
                                            <div class="input-field col s12 offset-s3">
                                            <input type="text" id="autocomplete-input" class="autocomplete" v-model="pet.description">
                                            <label for="autocomplete-input">Descripción(OPCIONAL)</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col s8">
                                        <div class="row">
                                            <div class="input-field col s12 offset-s3">
                                            <input type="date" id="autocomplete-input" class="autocomplete" v-model="pet.fechaNacimiento">
                                            <label for="autocomplete-input">Fecha de nacimiento</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="buttons">
                                    <button type="submit" id="button_login" class="waves-effect waves-light btn orange darken-1" v-on:click="petSignUp">
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
import M from 'materialize-css';
import gql from "graphql-tag";

export default {
    name: "Account",
    mounted(){
        var elems_sel = document.querySelectorAll('select');
        M.FormSelect.init(elems_sel);
    },

    data: function() {
        return {
            pet: {
                nickname: "",
                nombre: "",
                fechaNacimiento: "",
                tipo: "",
                description: "",
                username:  localStorage.getItem("usr"),
            },
        };
    },

    methods: {
        petSignUp: async function() {
           await this.$apollo
            .mutate({
                mutation: gql`
                    mutation($account: AccountInput!) {
                        createAccount(account: $account) {
                            nickname
                            nombre
                            fechaNacimiento
                            tipo
                            description
                            username
                        }
                    }
                `,
                variables: {
                    account: this.pet,
                },
            })
            .then(() => {
                alert("Se creo la cuenta de mascota!");
                localStorage.setItem("petcta", this.pet.nickname);
                this.$router.push({name: "Home"});
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