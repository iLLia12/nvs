<template>
  <div class="m-w-1500px q-pt-lg m-auto flex justify-center">
    <q-card
      class="my-card w-50 form-bg"
    >
      <q-card-section class="q-pt-none">
        <div class="q-pa-md">
          <div class="text-h6 text-orange">Edit task</div>
          <q-form class="q-gutter-md">
            <q-input
              filled
              v-model="form.name"
              label="Task name"
              :error="!form.name.length"
            />
            <q-toggle color="orange" keep-color v-model="form.isFinished" unchecked-icon="clear"  checked-icon="check" label-color="orange" label="Finished" />
            <div>
              <q-btn 
                label="Update"
                type="button"
                color="orange"
                @click="updateTask()"
              />
              <q-btn
                label="Back"
                type="reset"
                color="orange"
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
    this.form = {...this.task}
  }
};
</script>

<style lang="scss" scoped>
.form-bg {
  background: $grey;
}
</style>