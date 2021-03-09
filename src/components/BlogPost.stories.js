// src/components/BlogPost.stories.js

import BlogPost from './BlogPost';
import { action } from '@storybook/addon-actions';

export default {
  title: 'BlogPost',
  component: BlogPost,
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const actionsData = {
    likePost: action('liked-post'),
    deletePost: action('delete-post'),
  };

const Template = (args, { argTypes }) => ({
  components: { BlogPost },
  props: Object.keys(argTypes),
  methods: actionsData,
  template: '<BlogPost v-bind="$props" @liked-post="likePost" @delete-post="deletePost" />'
});

export const Default = Template.bind({});
Default.args = {
  post: {
    id: '1',
    title: 'First Post!!!',
    content: 'Here is my blog post!',
    liked: false,
    state: 'ACTIVE',
  },
};

// export const Liked = Template.bind({});
// Liked.args = {
//     post: {
//         ...Default.args.post,
//         liked: true,
//     }
// }

export const Deleted = Template.bind({});
Deleted.args = {
    post: {
        ...Default.args.post,
        liked: false,
        state: 'DELETED',
    }
}