<template>
  <div class="post_file">
  <div class="row">
      <img class="responsive-img" src="#" id="image_preview" style="display:none">
  </div>
  <div class="row">
    <div class="col s12 m8 offset-m2 l6 offset-l3">
      <div class="card-panel white z-depth-1" style="height:120px;margin-top:-45px;">
        <div class="row valign-wrapper">
        <div class="col s4 m4 offset-m2 l4 offset-l1 ">
            <div class="file-field input-field">
                <div class="btn btn-large waves-effect waves-light orange ">
                    <i class="material-icons">image</i>
                    <input type="file" v-on:click="showPreview" accept="image/*">
                </div>
            </div>
        </div>
        <div class="col s4 m4 l4">
            <div class="file-field input-field">
                <div class="btn btn-large waves-effect waves-light orange ">
                    <i class="material-icons ">videocam</i>
                    <input type="file" v-on:click="showPreview" accept="image/*">
                </div>
            </div>
        </div>
        <div class="col s4 m4 l4">
                        <div class="file-field input-field">
                <div class="btn btn-large waves-effect waves-light orange ">
                    <i class="material-icons valign-wrapper">gif</i>
                    <input type="file" v-on:click="showPreview" accept="image/*">
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
export default {
  name: "Post_file",
  props: {
    msg: String,
  },
  methods: {
     showPreview: function(event){
  if(event.target.files.length > 0){
    var src = URL.createObjectURL(event.target.files[0]);
    var preview = document.getElementById("image_preview");
    preview.src = src;
    preview.style.display = "block";
  }
}
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
  box-shadow: 2px 2px 2px 1px black;
}
span{
  font-family: 'Architects Daughter', cursive;
}
</style>