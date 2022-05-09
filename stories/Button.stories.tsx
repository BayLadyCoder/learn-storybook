import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, Props } from '../src/Button';

const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    onClick: { action: 'click action' }, // Actions
    children: {
      defaultValue: 'Default Button',
    },
  },
};

export default meta;

// Controls
const Template: Story<Props> = (args) => <Button {...args} />;
// When create component using Template it will generate Control in StoryBook
// where user can modify props values in real time

export const Default = Template.bind({});
export const Secondary = Template.bind({});

Secondary.args = {
  variant: 'secondary',
  children: 'Secondary Button',
};
