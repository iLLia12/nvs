import { api } from '../plugins/axios'

export const getTaskLists = async () => await api.get('/api/task-lists')
