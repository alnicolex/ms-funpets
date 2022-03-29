<template>
  <div class="post_date">
   <div class="row">
        <div class="col s12 m8 offset-m2 l6 offset-l3">
        <div class="card-panel white z-depth-1" style="height:70px;margin-top:-25px;">
          <div class="row valign-wrapper">
            <div class="col s12 m12">
                <span class="flow-text" id="date_post">
                {{now}}
                </span>
            </div>
          </div>
        </div>
      </div>
   </div> 
  </div>
</template>

<script>
import moment from 'moment';
export default {
  name: "Post_date",
  props: {
    msg: String,
    now: {
      type: String,
      default:function () { 
          let date_now=new Date();
          return new moment(date_now).format("YYYY-MM-DD"); }
    },
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
  font-family: 'Architects Daughter', cursive;
  color: #2C3E50;
}
.shadow_box{
  box-shadow: 2px 2px 2px 1px black;
}
span{
  font-family: 'Architects Daughter', cursive;
}
</style>
