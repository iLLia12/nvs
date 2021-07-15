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
                label="Update"
                type="button"
                color="primary"
                @click="updateTask()"
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
import { api } from '../../plugins/axios'
import {mapActions} from 'vuex'
export default {
  name: "EditTask",
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
      'updateTaskAction',
    ]),
    previousPage() {
      this.$router.go(-1);
    },
    updateTask() {
      this.updateTaskAction(this.form)
    },
    async getTaskById() {
      let res = await api.get(`/api/tasks/${this.$route.params.id}`);
      this.form = {...res.data}
    }
  },
  created() {
    this.getTaskById()
  }
};
</script>