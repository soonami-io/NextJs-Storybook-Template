import { ComponentMeta, ComponentStory } from '@storybook/react';
import LandingLayout, { ILandingLayout } from './Landing';
import { mockLandingLayoutProps } from './Landing.mocks';

export default {
  title: 'layouts/LandingLayout',
  component: LandingLayout,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof LandingLayout>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LandingLayout> = (args) => (
  <LandingLayout {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockLandingLayoutProps.base,
} as ILandingLayout;
