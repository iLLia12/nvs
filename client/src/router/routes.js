
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/tasks/List.vue') },
      { path: 'tasks/create', name: "CreateTask", component: () => import('pages/tasks/Create.vue') },
      { path: 'tasks/:id/edit', name: "EditTask", component: () => import('pages/tasks/Edit.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
