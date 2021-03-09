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
  template: '<BlogFeed v-bind="$props @" />',
});

export const Default = Template.bind({});
Default.args = {
  // Shaping the stories through args composition.
  // The data was inherited from the Default story in task.stories.js.
  posts: [
    { ...BlogStories.Default.args.post, id: '1', title: 'Post 1' },
    { ...BlogStories.Default.args.post, id: '2', title: 'Post 2' },
    { ...BlogStories.Default.args.post, id: '3', title: 'Post 3' },
    { ...BlogStories.Default.args.post, id: '4', title: 'Post 4' },
    { ...BlogStories.Default.args.post, id: '5', title: 'Post 5' },
    { ...BlogStories.Default.args.post, id: '6', title: 'Post 6' },
  ],
};

export const Loading = Template.bind({});
Loading.args = {
  posts: [],
  loading: true,
};

export const Empty = Template.bind({});
Empty.args = {
  // Shaping the stories through args composition.
  // Inherited data coming from the Loading story.
  ...Loading.args,
  loading: false,
};