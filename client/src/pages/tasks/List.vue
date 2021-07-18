<template>
  <div class="m-w-1500px q-pt-md m-auto bordered-default">
    <div class="flex justify-center">
      <q-btn round color="primary" @click="redirectToCreateTaskPage()">Add</q-btn>
    </div>
    <div class="q-pt-md flex justify-center">
      <div class="q-pa-md w-50 bordered-default">
        <h3>TODO</h3>
        <draggable  group="tasks" v-model='taskListTodo' @change="droppedOnTODO">
          <transition-group>
            <q-card flat bordered class="my-card q-mb-xs" v-for="element in taskListTodo" :key="element.id">
              <q-card-section class="flex justify-between">
                <div class="text-h6">{{element.name}}</div>
                  <div>
                    <q-btn
                      color="secondary"
                      size="xs"
                      class="q-mr-xs"
                      label="Edit"
                      @click.native="showEditTaskPage(element.id)"
                    />
                    <q-btn
                      color="primary"
                      size="xs"
                      class="q-mr-xs"
                      label="Done"
                      @click.native="updateTaskAction({...element, isFinished: true})"
                    />
                    <q-btn
                      color="red"
                      size="xs"
                      label="Delete"
                      @click.native="deleteTask(element.id)"
                    />
                  </div>
              </q-card-section>
              <q-card-section class="q-pt-none">
                is finished: {{element.isFinished}}
              </q-card-section>
            </q-card>
          </transition-group>
        </draggable>
      </div>
      <div class="q-pa-md w-50 bordered-default">
        <h3>FINISHED</h3>
        <draggable  group="tasks" v-model='taskListFinished' @change="droppedOnFinished">
          <transition-group>
            <q-card flat bordered class="my-card q-mb-xs" v-for="element in taskListFinished" :key="element.id">
              <q-card-section class="flex justify-between">
                <div class="text-h6">{{element.name}}</div>
                <div>
                  <q-btn
                      color="secondary"
                      size="xs"
                      class="q-mr-xs"
                      label="Edit"
                      @click.native="showEditTaskPage(element.id)"
                    />
                  <q-btn
                      color="amber"
                      size="xs"
                      class="q-mr-xs"
                      label="todo"
                      @click.native="updateTaskAction({...element, isFinished: false})"
                    />
                    <q-btn
                      color="red"
                      size="xs"
                      label="Delete"
                      @click.native="deleteTask(element.id)"
                    />
                  </div>
              </q-card-section>
              <q-card-section class="q-pt-none">
                is finished: {{element.isFinished}}
              </q-card-section>
            </q-card>
          </transition-group>
        </draggable>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import draggable from 'vuedraggable'
export default {
  name: 'PageIndex',
  components: {
    draggable,
  },
  data() {
    return {
      finished: [],
      columns: [
        { name: 'task_id', label: 'ID', field: 'id', sortable: false, align: 'left', },
        { name: 'task_name', label: 'Name', field: 'name', sortable: false, align: 'left', },
        { name: 'is_finished', label: 'Finished', field: 'is_finished', sortable: false, align: 'left', },
        { name: 'actions', label: '', field: '', sortable: false, align: 'left', },
      ],
    }
  },
  computed: {
    taskListTodo: {
      get() {
        return this.$store.getters['tasks/taskListTodo']
      },
      set(value) {
        value.is_finished = false;
        this.$store.commit('tasks/SET_TODO', value)
        this.updateTaskAction(value)
      }
    },
    taskListFinished: {
      get() {
        return this.$store.getters['tasks/taskListFinished']
      },
      set(value) {
        value.is_finished = true;
        this.$store.commit('tasks/SET_FINISHED', value)
        this.updateTaskAction(value)
      }
    }
  },
  methods: {
    ...mapActions('tasks', [
      'fetchTasks',
      'toggleDone',
      'storeTaskAction',
      'deleteTaskAction',
      'updateTaskAction'
    ]),
    ...mapActions('taskLists', [
      'fetchTaskLists',
    ]),
    showEditTaskPage(id) {
      this.$router.push({name: "EditTask", params: { id }})
    },
    redirectToCreateTaskPage() {
      this.$router.push({ name: 'CreateTask' })
    },
    deleteTask(id) {
      this.deleteTaskAction(id)
    },
    droppedOnFinished(a) {
      if (a.hasOwnProperty("added")) {
        this.updateTaskAction({...a.added.element, isFinished: true})
      }
    },
    droppedOnTODO(a) {
      if (a.hasOwnProperty("added")) {
        this.updateTaskAction({...a.added.element, isFinished: false})
      }
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.fetchTasks();
      vm.fetchTaskLists();
    })
  }
}
</script>
