<template>
  <div class="post_reaction">
 
    <div class="row">
     <div class="col s6 m4 offset-m2 l3 offset-l3 "> 
    <div class="card-panel white z-depth-1" style="height:70px;margin-top:-30px;margin-right:-15px;">     
     <div class="col s6 offset-s5 m4 offset-m3 l6 offset-l4 xl6 offset-xl2">
           <div style="position: relative; height:60px; ">
          <div class="fixed-action-btn horizontal direction-top direction-right" style="position: absolute; display: inline-block; right: 24px;padding-right:80%;">
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
    </div>
    </div>
    <div class="col s6 m4 l3">
        <div class="card-panel white z-depth-1" style="height:70px;margin-top:-30px;">
        <div style="valign-wrapper">
          <a href="#" class="waves-effect waves-light">Comentar</a>
        </div>
        </div>

    </div>


   </div>
  </div>
</template>

<script>
import M from 'materialize-css'
export default {
  name: "Post_reaction",
  props: {
    msg: String,
    nickname:String,
    url_pet:String,
  },
    mounted() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    M.FloatingActionButton.init(elems, {
      direction: 'right'
    });
    var elems_sel = document.querySelectorAll('select');
     M.FormSelect.init(elems_sel);
    }
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
  font-family: 'Architects Daughter', cursive;
  color: #2C3E50;
}
.shadow_box{
  box-shadow: 0px -2px 2px 1px black;
}
</style>
