<!-- src/components/BlogPost.vue -->

<template>
  <div class="post-item" :class="post.state">
    <h4 v-text="post.title"></h4>
    <p v-text="post.content"></p>
    <span v-if="currentState==LIKED" class="closedCircle" @click="$emit('liked-post', post.id)"></span>
    <span v-else class="openCircle" ></span>
  </div>
</template>

<script>
  export default {
    name: 'BlogPost',
    props: {
      post: {
        type: Object,
        default: () => ({ id: '', title: '', content: '', state: ''}),
      },
    },
    computed: {
        currentState() {
            return this.post.state
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
        background-color: white;
        border-radius: 50%;
        display: inline-block;
    }
    .closedCircle {
        height: 25px;
        width: 25px;
        background-color: lightcoral;
        border-radius: 50%;
        display: inline-block;
    }
</style>