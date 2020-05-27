import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    {
      exact: true,
      path: '/positionDetails',
      component: '@/pages/positionDetails',
    },
    {
      exact: true,
      path: '/aboutUs',
      component: '@/pages/aboutUs',
    },
    {
      exact: true,
      path: '/contact',
      component: '@/pages/contact',
    },
  ],
});
