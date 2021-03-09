// src/components/BlogFeed.stories.js

import BlogFeed from './BlogFeed';
import * as BlogStories from './BlogPost.stories';

export default {
  component: BlogFeed,
  title: 'BlogFeed',
  decorators: [() => '<div style="padding: 3rem;"><story /></div>'],
};

const Template = (args, { argTypes }) => ({
  components: { BlogFeed },
  props: Object.keys(argTypes),
  template: '<BlogFeed v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  posts: [
    { ...BlogStories.Default.args.post, id: '1', title: 'Post 1' },
    { ...BlogStories.Default.args.post, id: '2', title: 'Post 2' },
    { ...BlogStories.Default.args.post, id: '3', title: 'Post 3',liked: true },
    { ...BlogStories.Default.args.post, id: '4', title: 'Post 4',liked: true },
    { ...BlogStories.Default.args.post, id: '5', title: 'Post 5', active: false },
  ],
};