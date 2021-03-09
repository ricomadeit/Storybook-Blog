<!-- src/components/BlogPost.vue -->

<template>
  <div class="post-item"> 
    <h4 v-text="post.title"></h4>
    <p v-text="post.content"></p>
    <span class="openCircle" :style="postUnliked" @click="likePost"></span>
    <input type="button" value="DELETE" @click="deletePost"/> 
  </div>
</template>

<script>
  export default {
    name: 'BlogPost',
    data() {
      return {
        postLiked: {
          'background-color': 'rgb(233, 123, 123)',
        },
      }
    },
    props: {
      post: {
        type: Object,
        default: () => ({ id: '', title: '', content: '', liked: Boolean, state: ''}),
      },
    },
    methods: {
        likePost() {
          // change color of circle
          this.$emit('like-post', this.post.id)
          this.post.liked = !this.post.liked

          if (this.post.liked) {
            alert("liked")
            this.postLiked['background-color'] = 'rgb(233, 123, 123)'
          }
          // else {
          //   this.postLiked['background-color'] =  'rgb(233, 123, 123)'
          // }
        },
        deletePost() {
          // hide current post
          this.$emit('delete-post', this.post)
        }
    }
  };
</script>

<style>
    .post-item {
        background-color: lightblue;
        outline-style: solid;
        outline-color: black;
        padding: 10px;
        margin: 5px;
    }
    .openCircle {
        height: 25px;
        width: 25px;
        margin: 15px;
        background-color: white;
        border-radius: 50%;
        display: block;
    }
</style>