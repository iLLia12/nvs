<template>
  <div class="m-w-1500px q-pt-md m-auto">
    <q-btn 
      flat
      label="Back"
      type="button"
      color="primary"
      @click="showTaskListsPage()"
    />
    <div class="flex justify-between">
      <h2 style="color:white" class="q-my-none">TODO</h2>
      <div class="flex">
        <q-form class="q-gutter-md flex">
          <q-input
              outlined
              v-model="form.name"
              label="Task name"
              :error="error"
            />
            <div>

            <q-btn 
              label="Add"
              type="button"
              color="primary"
              @click="createTask()"
            />
            </div>
        </q-form>
      </div>
      <h2 style="color:white" class="q-my-none">FINISHED</h2>
    </div>
    <div class="flex justify-center">
      <div class="w-50  draggable-wrap">
        <draggable  group="tasks" v-model='todo' @change="droppedOnTODO" class="draggable-wrap q-pa-xs">
          <q-card flat bordered class="my-card q-mb-xs" v-for="element in todo" :key="element.id">
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
                      @click.native="updateList({...element, isFinished: true})"
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
        </draggable>
      </div>
      <div class="w-50 q-pl-xs">
        <draggable  group="tasks" v-model='finished' @change="droppedOnFinished" class="draggable-wrap q-pa-xs">
          <q-card flat bordered class="my-card q-mb-xs" v-for="element in finished" :key="element.id">
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
                      @click.native="updateList({...element, isFinished: false})"
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
        </draggable>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import draggable from 'vuedraggable'
import { getTaskListById } from '../../services/taskLists'
export default {
  name: 'PageIndex',
  components: {
    draggable,
  },
  data() {
    return {
      task: {
        name: "",
        isFinished: false,
        taskListId: (this).$route.params.id
      },
      form: {},
      todo:[],
      finished:[],
      error: false
    }
  },
  methods: {
    ...mapActions('tasks', [
      'fetchTasks',
      'toggleDone',
      'updateTaskAction'
    ]),
    ...mapActions('taskLists', [
      'fetchTaskLists',
      'storeTaskAction',
      'deleteTaskAction',
    ]),
    showTaskListsPage() {
      this.$router.push({name: "TaskLists"})
    },
    showEditTaskPage(id) {
      this.$router.push({name: "EditTask", params: { id }})
    },
    redirectToCreateTaskPage() {
      this.$router.push({ name: 'CreateTask' })
    },
    deleteTask(id) {
      this.deleteTaskAction({id, taskListId: this.$route.params.id}).then(() => {
        getTaskListById(this.$route.params.id)
        .then(res => res.data.Tasks)
        .then(res => {
          this.todo = res.filter(item => !item.isFinished)
          this.finished = res.filter(item => item.isFinished)
        })
      })
    },
    updateList(element) {
      this.updateTaskAction(element).then(() => {
        getTaskListById(this.$route.params.id)
        .then(res => res.data.Tasks)
        .then(res => {
          this.todo = res.filter(item => !item.isFinished)
          this.finished = res.filter(item => item.isFinished)
        })
      })
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
    },
    getTaskListById(ths) {
      getTaskListById(ths.$route.params.id)
        .then(res => res.data.Tasks)
        .then(res => {
          ths.todo = res.filter(item => !item.isFinished)
          ths.finished = res.filter(item => item.isFinished)
      })
    },
    createTask() {
      this.error = !this.form.name.length; 
      if (this.error) return;
      this.storeTaskAction(this.form).then(() => {
        getTaskListById(this.$route.params.id)
        .then(res => res.data.Tasks)
        .then(res => {
          this.todo = res.filter(item => !item.isFinished)
          this.finished = res.filter(item => item.isFinished)
          this.error = false;
          this.form = {...this.task}
        })
      })
    },
  },
  mounted() {
    getTaskListById(this.$route.params.id)
        .then(res => res.data.Tasks)
        .then(res => {
          this.todo = res.filter(item => !item.isFinished)
          this.finished = res.filter(item => item.isFinished)
        })
  },
  created() {
    this.form = {...this.task}
  }
}
</script>

<style scoped>
.draggable-wrap {
  height:75vh;
  background: rgb(230, 230, 230);
}
</style>
