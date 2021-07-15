import { getTasks, toggleTaskDone, storeTask, updateTask, deleteTask } from 'src/services/tasks'
import { Notify } from 'quasar'
import { handleError } from "../../services/helpers"

export function fetchTasks ({ commit }) {
  getTasks()
    .then(res => res.data)
    .then(tasks => {
      commit('SET_TODO', tasks.filter(item => !item.isFinished))
      commit('SET_FINISHED', tasks.filter(item => item.isFinished))
    })
    .catch(error => handleError(error))
}
export function toggleDone ({ commit }, task) {
  toggleTaskDone(task)
    .then(res => res.data)
    .then(task => commit('TOGGLE_TASK_DONE', task))
    .catch(error => handleError(error))
}
export function deleteTaskAction ({ commit }, id) {
  deleteTask(id)
    .then(res => res.data)
    .then(tasks => {
      commit('SET_TODO', tasks.filter(item => !item.isFinished))
      commit('SET_FINISHED', tasks.filter(item => item.isFinished))
      Notify.create({ message: "Deleted", type: 'positive', position: 'top' })
    })
    .catch(error => handleError(error))
}
export function storeTaskAction ({ commit }, task) {
  storeTask(task)
    .then(res => res.data)
    .then(tasks => commit('SET_TASKS', tasks))
    .then(res => Notify.create({ message: 'Created', type: 'positive', position: 'top' }))
    .catch(error => handleError(error))
}
export function updateTaskAction ({ commit }, task) {
  updateTask(task)
    .then(res => res.data)
    .then(tasks => {
      commit('SET_TODO', tasks.filter(item => !item.isFinished))
      commit('SET_FINISHED', tasks.filter(item => item.isFinished))
      Notify.create({ message: "Updated", type: 'positive', position: 'top' })
    })
    .catch(error => handleError(error))
}
