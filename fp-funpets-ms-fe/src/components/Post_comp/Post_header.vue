<template>
  <div class="post_header">
          <div class="row">
      <div class="col s12 m8 offset-m2 l6 offset-l3">
        <div class="card-panel white z-depth-1" style="height:90px;">
          <div class="row valign-wrapper">
            <div class="col s3 m3 l3 valign-wrapper">
               <a class="btn-floating btn-large waves-effect waves-light  white" id="link_pet" href="#">
              <img alt="" class="circle responsive-img" v-bind:src="url_pet"
               style="padding-top: 23%;"> <!-- notice the "circle" class -->
              </a>
            </div>
            <div class="col s9 m9 l9 valign-wrapper">
              <div class="col s3 offset-s9 m3 offset-m7">
                <a type="button" class="flow-text" id="link_profile" href="#">
                {{nickname}}
                </a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div> 
  </div>
</template>

<script>
export default {
  name: "Post_header",
  props: {
    msg: String,
    nickname:String,
    url_pet:{ type:String,default:"https://www.pngfind.com/pngs/m/83-831888_pawprint-in-a-circle-of-pet-hotel-sign.png"},
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
  box-shadow: 0px -5px 5px 1px orange;
}
</style>
