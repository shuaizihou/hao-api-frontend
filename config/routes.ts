export default [
  { name: '主页', path: '/', icon: 'smile', component: './Index' },
  {
    path: '/interface_info/:id',
    name: '查看接口',
    icon: 'smile',
    component: './InterfaceInfo',
    hideInMenu: true,
  },
  {
    path: '/user',
    layout: false,
    routes: [
      { name: '登录', path: '/user/login', component: './User/Login' },
      { name: '注册', path: '/user/register', component: './User/Register' },
    ],
  },

  {
    path: '/admin',
    icon: 'crown',
    access: 'canAdmin',
    name: '管理页',
    routes: [
      {
        icon: 'table',
        path: '/admin/interface_info',
        component: './Admin/InterfaceInfo',
        name: '接口管理',
      },
      {
        icon: 'analysis',
        path: '/admin/interface_analysis',
        component: './Admin/InterfaceAnalysis',
        name: '统计分析',
      },
    ],
  },
  { path: '/user/info', name: '个人中心', icon: 'user', component: './User/UserInfo' },

  // {path: '/', redirect: '/welcome'},
  { path: '*', layout: false, component: './404' },
];
