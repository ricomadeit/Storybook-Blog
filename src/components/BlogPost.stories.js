// src/components/BlogPost.stories.js

import BlogPost from './BlogPost';

export default {
  title: 'BlogPost',
  component: BlogPost,
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

const Template = (args, { argTypes }) => ({
  components: { BlogPost },
  props: Object.keys(argTypes),
  template: '<BlogPost v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  post: {
    id: '1',
    title: 'First Post!!!',
    content: 'This is my first ever blog post!',
  },
};
