<!-- src/components/BlogFeed.vue -->

<template>
  <div class="blog-items">
    <template>
      <BlogPost v-for="post in activePosts" :key="post.id" :post="post" />
      <p></p>
      <CreationPost @upload-post="addPost"/>
    </template>
  </div>
</template>

<script>
  import BlogPost from './BlogPost';
  import CreationPost from './BlogCreation';

  export default {
    name: 'BlogFeed',
    components: { BlogPost, CreationPost },
    data: function () {
      return {
        newPosts: []
      }
    },
    props: {
      posts: { 
        type: Array, 
        default: () => [] 
        },
    },
    computed: {
      activePosts() { 
        console.log(this.allPosts)
        return this.allPosts.filter((post) => post.active)
      },
      allPosts() {
        return this.posts.concat(this.newPosts)
      },
    },
    methods: {
      addPost (newPost) {
        newPost.active = true
        newPost.liked = false
        this.newPosts.push(newPost)
      },
    },
  };
</script>