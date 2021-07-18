const routes = [
  { path: '/', name: "TaskLists", component: () => import('pages/taskLists/Index.vue') },
  { path: '/task-lists/:id', name: "ShowTaksList", component: () => import('pages/taskLists/Show.vue') },
  { path: '/tasks/:id/edit', name: "EditTask", component: () => import('pages/tasks/Edit.vue') },,
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
