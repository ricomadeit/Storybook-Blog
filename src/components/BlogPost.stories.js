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
    onLikedPost: action('liked-post'),
  };

const Template = (args, { argTypes }) => ({
  components: { BlogPost },
  props: Object.keys(argTypes),
  methods: actionsData,
  template: '<BlogPost v-bind="$props" @liked-post="onLikedPost"/>'
});

export const Default = Template.bind({});
Default.args = {
  post: {
    id: '1',
    title: 'First Post!!!',
    content: 'Here is my blog post!',
    state: 'NONE'
  },
};

export const Liked = Template.bind({});
Liked.args = {
    post: {
        ...Default.args.post,
        state: 'LIKED',
    }
}
