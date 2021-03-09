<!-- src/components/BlogFeed.vue -->

<template>
  <div class="blog-items">
    <template>
      <BlogPost v-for="post in activePosts" :key="post.id" :post="post" />
    </template>
  </div>
</template>

<script>
  import BlogPost from './BlogPost';
  export default {
    name: 'BlogFeed',
    components: { BlogPost },
    props: {
      posts: { 
        type: Array, 
        default: () => [] },
    },
    computed: {
      activePosts() { 
        return this.posts.filter((post) => post.active) 
      }
    },
  };
</script>