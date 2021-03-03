<!-- src/components/BlogFeed.vue -->

<template>
  <div class="blog-items">
    <template v-if="loading">
      loading
    </template>
    <template v-else-if="isEmpty">
      empty
    </template>
    <template v-else>
      <BlogPost v-for="post in posts" :key="post.id" :post="post"/>
    </template>
  </div>
</template>

<script>
  import BlogPost from './BlogPost';
  export default {
    name: 'BlogFeed',
    components: { BlogPost },
    props: {
      posts: { type: Array, required: true, default: () => [] },
      loading: { type: Boolean, default: false },
    },
    computed: {
      isEmpty() {
        return this.posts.length === 0;
      },
    },
  };
</script>