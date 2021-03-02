<!-- src/components/BlogPost.vue -->

<template>
  <div class="post-item">
    <h4 v-text="post.title"></h4>
    <p v-text="post.content"></p>
  </div>
</template>

<script>
  export default {
    name: 'BlogPost',
    props: {
      post: {
        type: Object,
        default: () => ({ id: '', title: '', content: ''}),
      },
    },
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
</style>