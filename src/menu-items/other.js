import { IconBrandChrome, IconHelp } from '@tabler/icons';
const icons = { IconBrandChrome, IconHelp };
const other = {
  id: 'sample-docs-roadmap',
  type: 'group',
  children: [
    {
      id: 'sample-page',
      title: 'Sample Page',
      type: 'item',
      url: '/sample-page',
      icon: icons.IconBrandChrome,
      breadcrumbs: false
    },
   
  ]
};

export default other;
