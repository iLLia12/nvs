<template>
  <q-card
      class="my-card"
    >
      <q-card-section class="q-pt-none">
        <div class="q-pa-md">
          <div class="text-h6">Create task</div>
          <q-form class="q-gutter-md">
            <div class="flex">
              <q-input
              outlined
              v-model="form.name"
              label="Task name"
              :error="!form.name.length"
              />
              <q-toggle v-model="form.isFinished" label="Finished" />
            </div>
            <div>
              <q-btn 
                label="Create"
                type="button"
                color="primary"
                @click="createTask()"
              />
            </div>
          </q-form>
        </div>
      </q-card-section>
    </q-card>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: "CreateTask",
  data() {
    return {
      task: {
        name: "",
        isFinished: false,
        taskListId: null
      },
      form: {}
    };
  },
  methods: {
    ...mapActions('tasks', [
      'storeTaskAction',
    ]),
    createTask() {
      this.storeTaskAction(this.form)
      this.form = {...this.task}
    }
  },
  created() {
    this.form = {...this.task, taskListId: }
  }
};
</script>