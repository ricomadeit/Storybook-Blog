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
        return this.posts.filter((post) => post.active) 
      },
      allPosts() {
        return this.allPosts.filter((post) => post.active)
      }
    },
    methods: {
      addPost (newPost) {
        newPost.id = this.posts.length
        this.posts.push(newPost)
        console.log(this.posts)
      },
    },
  };
</script>