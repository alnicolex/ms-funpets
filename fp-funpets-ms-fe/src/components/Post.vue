<template>
  <div class="post">
    <div class="container">
      <div class="card-panel white z-depth-1 shadow_box">
        <form v-on:submit.prevent="publish_post" id="creation_post">
          <div class="row">
            <div
              class="col s3 offset-s1 m3 offset-m1 l3 offset-l1 valign-wrapper"
            >
              <a
                class="btn-floating btn-large waves-effect waves-light white"
                id="link_pet" 
                href="javascript:void(0);"
              >
                <img
                  class="circle responsive-img"
                  alt=""
                  v-bind:src="url_pet"
                  style="padding-top: 23%"
                />
                <!-- notice the "circle" class -->
              </a>
            </div>
            <div class="col s7 m7 l7 valign-wrapper">
              <div class="col s3 offset-s9 m3 offset-m7">
                <a
                  type="button"
                  class="flow-text"
                  id="link_profile"
                  href="javascript:void(0);"
                >
                  <div style="margin-top: 20px"> {{ petcta }}</div>
                </a>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col s12 m8 offset-m2 l6 offset-l3">
              <div class="col s12 m12">
                <span class="flow-text" id="date_post">
                  {{ now }}
                </span>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12 m12 l12">
              <textarea
                placeholder="¿Qué estás pensando?"
                v-model="post.text"
                id="textarea1"
                class="materialize-textarea"
              >
              </textarea>
              <label for="textarea1" id="label_textarea1">
                <span style="color: orange">
                  {{ msg_post }}
                </span></label
              >
            </div>
          </div>
          <div class="row">
            <div class="col s4 m4 l4">
              <div class="file-field input-field col s6 offset-s2 l6 offset-l3">
                <div class="btn-floating btn-large pulse waves-effect waves-light orange">
                  <span class="material-icons">image</span>
                  <input
                    type="file"
                    v-on:click="showPreview"
                    accept="image/*"
                  />
                </div>
              </div>
            </div>
            <div class="col s4 m4 l4">
              <div class="file-field input-field col s6 offset-s2 l6 offset-l3">
                <div class="btn-floating btn-large pulse waves-effect waves-light orange">
                  <span class="material-icons">videocam</span>
                  <input
                    type="file"
                    v-on:click="showPreview"
                    accept="image/*"
                  />
                </div>
              </div>
            </div>
            <div class="col s4 m4 l4">
              <div class="file-field input-field col s6 offset-s2 l6 offset-l3">
                <div class="btn-floating btn-large pulse waves-effect waves-light orange">
                  <span class="material-icons">gif</span>
                  <input
                    type="file"
                    v-on:click="showPreview"
                    accept="image/*"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col s12 m8 offset-m2 l6 offset-l3">
              <div class="card-action">
                <button
                  class="btn btn-large waves-effect waves-light orange"
                  type="submit"
                  v-on:click="createPost"
                >
                  <span class="flow-text">Publicar</span>
                </button>
              </div>
            </div>
          </div>
          <a
            id="pass_post"
            href="javascript:void(0);"
            @click="send_post"
            style="display: none"
          ></a>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";
export default {
  name: "Post",

    data: function() {
      return {
        petcta: localStorage.getItem("petcta"),

        post: {
          account: localStorage.getItem("petcta"),
          text: "",
          image_ref: " ",
          video_ref: " ",
          git_ref: " "
        },

      };
    },

    methods: {
      createPost: async function() {
           await this.$apollo
            .mutate({
                mutation: gql`
                    mutation Mutation($post: PostInput!) {
                        createPost(post: $post) {
                            account
                            text
                            image_ref
                            video_ref
                            git_ref
                            dateCreation
                        }
                    }
                `,
                variables: {
                    post: this.post,
                },
            })
            .then(() => {
                alert("te ganaste una galletita!!");
                this.$router.push({name: "Home"});
            })
            .catch(() => {
                alert("ERROR: Fallo en el registro.")
            });
        },
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
  color: #006064;
  font-family: "Architects Daughter", cursive;
}
.bor_style {
  border-radius: 35px;
  border-style: dotted;
}

span {
  font-family: "Architects Daughter", cursive;
}

a {
  font-family: "Architects Daughter", cursive;
  color: #2c3e50;
}
.shadow_box {
  box-shadow: 2px 2px 2px 1px black;
}

</style>
