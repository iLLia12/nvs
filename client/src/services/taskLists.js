import { api } from '../plugins/axios'

export const getTaskLists = async () => await api.get('/api/task-lists')
export const getTaskListById = async (id) => await api.get(`/api/task-lists/${id}`)
export const storeTask = async task => await api.post('/api/tasks', task)
export const storeTaskList = async taskList => await api.post('/api/task-lists', taskList)
export const deleteTask = async (id, taskListId) => await api.delete(`/api/tasks/${id}-${taskListId}`)
