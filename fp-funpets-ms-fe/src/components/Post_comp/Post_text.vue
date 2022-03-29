<template>
  <div class="post_text">
    <div class="row">
      <div class="col s12 m8 offset-m2 l6 offset-l3">
      <div class="card-panel white z-depth-1" style="margin-top:-25px;">
        <div class="row valign-wrapper">
        <div class="input-field col s12 m12 l12">
          <textarea v-model="text_post" id="textarea1" class="materialize-textarea">
          </textarea>
          <label for="textarea1" id="label_textarea1">
            <span style="color: orange;">
              {{msg_post}}
          </span></label>
        </div>
        </div>
      </div>
    </div>
  </div> 
  </div>
</template>

<script>
export default {
  name: "Post_text",
  props: {
    msg: String,
    msg_post:{ type:String,
        default: "Escribe aquí"
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

   
  /* label color */
   .input-field label {
     color: #2C3E50;
     font-family: 'Architects Daughter', cursive;
   }
   /* label focus color */
   .input-field input[type=text]:focus + label {
     color: #2C3E50;
   }
   /* label underline focus color */
   .input-field input[type=text]:focus {
     border-bottom: 1px solid #2C3E50;
     box-shadow: 0 1px 0 0 #2C3E50;
   }
   /* valid color */
   .input-field input[type=text].valid {
     border-bottom: 1px solid #2C3E50;
     box-shadow: 0 1px 0 0 #2C3E50;
   }
   /* invalid color */
   .input-field input[type=text].invalid {
     border-bottom: 1px solid #2C3E50;
     box-shadow: 0 1px 0 0 #2C3E50;
   }
   /* icon prefix focus color */
   .input-field .prefix.active {
     color: #2C3E50;
   }
</style>
