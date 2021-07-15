<template>
  <div class="m-w-1200px q-pt-lg m-auto flex justify-center">
    <q-card
      class="my-card w-50"
    >
      <q-card-section class="q-pt-none">
        <div class="q-pa-md">
          <div class="text-h6">Create task</div>
          <q-form class="q-gutter-md">
            <q-input
              filled
              v-model="form.name"
              label="Task name"
              :error="!form.name.length"
            />
            <q-toggle v-model="form.isFinished" label="Finished" />
            <div>
              <q-btn 
                label="Create"
                type="button"
                color="primary"
                @click="createTask()"
              />
              <q-btn
                label="Cancel"
                type="reset"
                color="primary"
                flat
                class="q-ml-sm"
                @click="previousPage()"
              />
            </div>
          </q-form>
        </div>
      </q-card-section>
    </q-card>
  </div>
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
        taskListId: 1
      },
      form: {}
    };
  },
  methods: {
    ...mapActions('tasks', [
      'storeTaskAction',
    ]),
    previousPage() {
      this.$router.go(-1);
    },
    createTask() {
      this.storeTaskAction(this.form)
      this.form = {...this.task}
    }
  },
  created() {
    this.form = {...this.task}
  }
};
</script>