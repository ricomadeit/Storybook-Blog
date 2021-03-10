<!-- src/components/BlogFeed.vue -->

<template>
  <div class="blog-items">
    <template>
      <BlogPost v-for="post in activePosts" :key="post.id" :post="post" />
      <NewPost @upload-post="addPost" />
    </template>
  </div>
</template>

<script>
  import BlogPost from './BlogPost';
  import NewPost from './BlogCreation';
  export default {
    name: 'BlogFeed',
    components: { BlogPost, NewPost },
    props: {
      posts: { 
        type: Array, 
        default: () => [] },
    },
    computed: {
      activePosts() { 
        return this.posts.filter((post) => post.active) 
      },
      addPost() {
        // add post to feed
      }
    },
  };
</script>