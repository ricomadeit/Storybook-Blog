import NewPost from './BlogCreation';

// import { action } from '@storybook/addon-actions';

export default {
  title: 'Post',
  component: NewPost,
  excludeStories: /.*Data$/,
};

const Template = (args, { argTypes }) => ({
  components: { NewPost },
  props: Object.keys(argTypes),
//   methods: actionsData,
  template: '<NewPost v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  NewPost: {
    id: '1',
    title: NewPost.title,
    info: NewPost.info,
  },
};