<!-- src/components/BlogFeed.vue -->

<template>
  <div class="blog-items">
    <template>
      <BlogPost v-for="post in activePosts" :key="post.id" :post="post" />
      <p></p>
      <CreationPost @upload-post="addPost" />
    </template>
  </div>
</template>

<script>
  import BlogPost from './BlogPost';
  import CreationPost from './BlogCreation';

  export default {
    name: 'BlogFeed',
    components: { BlogPost, CreationPost },
    props: {
      posts: { 
        type: Array, 
        default: () => [] 
        },

    },
    computed: {
      activePosts() { 
        return this.posts.filter((post) => post.active) 
      },
    },
    methods: {
      addPost (newPost) {
        this.posts.push(newPost)
      },
    },
  };
</script>