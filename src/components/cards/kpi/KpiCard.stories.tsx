import { ComponentMeta, ComponentStory } from '@storybook/react';
import KpiCard, { IKpiCard } from './KpiCard';
import { mockKpiCardProps } from './KpiCard.mocks';

export default {
  title: 'cards/KpiCard',
  component: KpiCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof KpiCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof KpiCard> = (args) => (
  <KpiCard {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockKpiCardProps.projects,
} as IKpiCard;
