import { IKpiCard } from './KpiCard';

const projects: IKpiCard = {
  image:
    'https://images.pexels.com/photos/15638791/pexels-photo-15638791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  title: 'projects',
  value: '1000',
  image_alt: 'projects',
  tag: 'projects',
};

const collaborations: IKpiCard = {
  image: '/mocks/kpis_2.png',
  title: 'collaborations',
  value: '200',
  image_alt: 'collaborations',
  tag: 'collaborations',
};

const collaborators: IKpiCard = {
  image: '/mocks/kpis_3.png',
  title: 'collaborators',
  value: '1200',
  image_alt: 'collaborators',
  tag: 'collaborators',
};

export const mockKpiCardProps = {
  projects,
  collaborations,
  collaborators,
};
