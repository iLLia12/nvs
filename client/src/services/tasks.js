import { api } from '../plugins/axios'

export const getTasks = async () => await api.get('/api/tasks')
export const storeTask = async task => await api.post('/api/tasks', task)
export const updateTask = async task => await api.put(`/api/tasks/${task.id}`, task)
export const deleteTask = async id => await api.delete(`/api/tasks/${id}`)
export const toggleTaskDone = async task => await api.put(`/api/tasks/${task.id}`, {...task, is_finished: !task.is_finished})

