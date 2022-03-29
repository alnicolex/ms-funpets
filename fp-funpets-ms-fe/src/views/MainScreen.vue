<template>
  <div id="wrapper">
    <div id="container">
      <div id="header">
        <div id="rectangle">
          <div id="inside">
            <div id="main_text">
              <h2 id="B1">Welcome</h2>
              <h2 id="B2">to</h2>
              <h1 id="B3">FUNPETS</h1>
              <h1 id="B7">MS</h1>
            </div>
            <div class="buttons">
              <button
                id="login"
                class="waves-effect waves-light btn orange darken-1"
                v-on:click="enter_login"
              >
                Entrar
              </button>
            </div>
            <div id="Extra_text">
              <p class="Extext01">La mejor red social</p>
              <p class="Extext02">para tus pequeños amigos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import M from "materialize-css";
export default {
  mounted() {
    M.AutoInit();
    
  },
  methods: {
      enter_login:function(){
        this.$router.push({name: "Login"});
      }
  }
};


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
  background-image: url("../assets/MainScreen.jpg");
}

#rectangle {
  width: 470px;
  height: 570px;
  border: 3px solid #000;
  background-color: #fff;
  box-shadow: 2px 2px 2px 1px black;
  position: relative;
}

#inside {
  position: relative;
  top: 60px;
}

#B1 {
  font-family: "Architects Daughter", cursive;
  position: relative;
  left: 5px;
  font-size: 40px;
}

#B2 {
  font-family: "Architects Daughter", cursive;
  position: relative;
  left: 6px;
  bottom: 25px;
  font-size: 30px;
}

#B3 {
  font-family: "Architects Daughter", cursive;
  position: relative;
  left: 6px;
  bottom: 60px;
  font-size: 45px;
}

#B4 {
  font-family: "Architects Daughter", cursive;
  position: relative;
  left: 17px;
  bottom: -10px;
}

#B5 {
  font-family: "Architects Daughter", cursive;
  position: relative;
  left: -2px;
  bottom: -5px;
}

#B6 {
  font-family: "Architects Daughter", cursive;
  position: relative;
  left: 49px;
  bottom: 32px;
}

#B7 {
  font-family: "Architects Daughter", cursive;
  position: relative;
  left: 6px;
  bottom: 92px;
  font-size: 30px;
}

#Extra_text .Extext01{
  font-family: "Architects Daughter", cursive;
  position: relative;
  font-size: 20px;
  right: -10px;
  bottom: 50px;
}

#Extra_text .Extext02{
  font-family: "Architects Daughter", cursive;
  position: relative;
  font-size: 20px;
  right: -10px;
  bottom: 50px;
}

.buttons #login {
  width: 130px;
  height: 40px;
  position: relative;
  left: 8px;
  bottom: 59px;
  font-family: "Architects Daughter", cursive;
  font-size: 16px;
  cursor: pointer;
}
</style>
