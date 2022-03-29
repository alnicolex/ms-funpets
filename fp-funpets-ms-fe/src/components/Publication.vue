<template>
  <div class="publication">
    <div class="container">
      <div class="card-panel white z-depth-1 shadow_box">
        <div class="row">
          <div class="col s12 m8 offset-m2 l6 offset-l3">
            <div class="col s3 m3 l3 valign-wrapper">
              <a
                class="btn-floating btn-large waves-effect waves-light white"
                href="javascript:void(0);"
              >
                <img
                  alt=""
                  class="circle responsive-img"
                  v-bind:src="url_pet_info"
                  style="padding-top: 23%"
                />
                <!-- notice the "circle" class -->
              </a>
            </div>
            <div class="col s9 m9 l9 valign-wrapper">
              <div class="col s3 offset-s9 m3 offset-m7">
                <a type="button" class="flow-text" href="javascript:void(0);">
                  {{ nickname_info }}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col s12 m8 offset-m2 l6 offset-l3">
            <div class="col s12 m12">
              <span class="flow-text">
                {{ date_info }}
              </span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12 m12 l12">
            <span class="flow-text">
              {{ text_info }}
            </span>
          </div>
        </div>
        <div class="row">
          <div
            class="col s5 offset-s2 m5 offset-m2 l5 offset-l2"
            style="margin-top: 10px"
          >
            <div style="position: relative; height: 60px">
              <div
                class="fixed-action-btn horizontal"
                style="
                  position: absolute;
                  display: inline-block;
                  padding-right: 80%;
                "
              >
                <a class="btn-floating btn-large orange">
                  <i class="large material-icons">pets</i>
                </a>
                <ul>
                  <li>
                    <a class="btn-floating red">
                      <i class="material-icons">sentiment_dissatisfied</i>
                    </a>
                  </li>
                  <li>
                    <a class="btn-floating yellow darken-1">
                      <i class="material-icons">sentiment_neutral</i>
                    </a>
                  </li>
                  <li>
                    <a class="btn-floating green">
                      <i class="material-icons">sentiment_satisfied</i>
                    </a>
                  </li>
                  <li>
                    <a class="btn-floating blue">
                      <i class="material-icons">whatshot</i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col s6 m4 l3">
            <div
              class="card-panel white z-depth-1"
              style="height: 70px; margin-top: -10px"
            >
              <div style="valign-wrapper">
                <a href="#" class="waves-effect waves-light">Comentar</a>
              </div>
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
  name: "Publication",
  props: {
    msg: String,
    nickname_info: String,
    text_info: String,
    date_info: String,
    url_pet_info: {
      type: String,
      default: function () {
        return "https://cdn-icons-png.flaticon.com/512/64/64431.png";
      },
    },
  },
  mounted() {
    var elems = document.querySelectorAll(".fixed-action-btn");
    M.FloatingActionButton.init(elems, {
      direction: "right",
    });
  },
};
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
  font-family: "Architects Daughter", cursive;
  color: #2c3e50;
}
.shadow_box {
  box-shadow: 2px 2px 2px 1px black;
}
span {
  font-family: "Architects Daughter", cursive;
}
</style>
