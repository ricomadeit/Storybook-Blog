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
  task: {
    id: '1',
    title: 'post 1',
    info: 'This is some data',
  },
};