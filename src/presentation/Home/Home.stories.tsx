import React from 'react';
import { Story, Meta } from '@storybook/react';

import Home from './Home';

const TemplateStory: Story = (args) => <Home {...args} />;

export const Template = TemplateStory.bind({});

export default {
  title: 'Presentation/Home',
  component: Template,
} as Meta;
