<!-- src/components/BlogPost.vue -->

<template>
  <div class="post-item"> 
    <h4 v-text="post.title"></h4>
    <p v-text="post.content"></p>
    <span :class="['openCircle', {'openCircle--liked': post.liked}]" @click="likePost"></span>
    <input type="button" value="DELETE" @click="deletePost"/> 
  </div>
</template>

<script>
  export default {
    name: 'BlogPost',
    props: {
      post: {
        type: Object,
        default: () => ({ id: '', title: '', content: '', liked: false, active: true}),
      },
    },
    methods: {
      isActive() {
        return this.post.active
      },
      likePost() {
        this.$emit('like-post', this.post.id)
        this.post.liked = !this.post.liked
      },
      deletePost() {
        this.$emit('delete-post', this.post)
        this.post.active = false
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
    .openCircle--liked {
      background-color: rgb(233, 123, 123)
    }
    
</style>