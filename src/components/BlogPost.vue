<!-- src/components/BlogPost.vue -->

<template>
  <div class="post-item">
    <h2 v-text="post.title"></h2>
    <p v-text="post.content"></p>
    <!-- <input type="text" readonly :value="post.title" />
    <input type="text" readonly :value="post.content" /> -->
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