import NewPost from './BlogCreation';
import { action } from '@storybook/addon-actions';

export default {
  title: 'PostCreation',
  component: NewPost,
  excludeStories: /.*Data$/,
};

export const actionsData = {
    uploadPost: action('upload-post'),
  };

const Template = (args, { argTypes }) => ({
  components: { NewPost },
  props: Object.keys(argTypes),
  methods: actionsData,
  template: '<NewPost v-bind="$props" @upload-post="uploadPost" />',
});

export const Default = Template.bind({});
Default.args = {
  NewPost: {
    id: '1',
    title: NewPost.title,
    content: NewPost.content,
    complete: NewPost.complete,
  },
};