<template>
  <div class="m-w-1500px q-pt-md m-auto">
    <div class="flex justify-between">
      <h2 class="q-my-none">Task Lists</h2>
      <div class="flex">
        <q-form class="q-gutter-md flex">
          <div>
            <q-btn 
              label="Add"
              type="button"
              color="primary"
              @click="createTaskList()"
            />
          </div>
          <q-input
              outlined
              v-model="form.name"
              label="Task List name"
              :error="error"
            />
        </q-form>
      </div>
    </div>
    <div class="q-pt-md flex">
      <div class="q-pa-xs" v-for="(element, key) in getTaskLists" :key="element.id">
        <q-card flat bordered class="my-card">
          <q-card-section class="flex justify-between">
            <img style="min-width:200px; height:200px; contain: content;" :src="`https://source.unsplash.com/random/200x200?sig=${key}`" alt="" />
          </q-card-section>
          <q-card-section class="flex justify-between">
            <div class="text-h6">{{element.name}}</div>
            <div>
              <q-btn
                color="primary"
                size="xs"
                class="q-mr-xs"
                label="Show"
                @click.native="showTaskList(element)"
              />
            </div>
          </q-card-section>
          <q-card-section class="q-pt-none">
            tasks: {{element.Tasks.length}}
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: 'PageIndex',
  data() {
    return {
      finished: [],
      form: {},
      error: false
    }
  },
  computed: {
    getTaskLists() {   
       return this.$store.getters['taskLists/taskLists']
    },
  },
  methods: {
    ...mapActions('taskLists', [
      'fetchTaskLists',
    ]),
    showTaskList({id}) {
      this.$router.push({name: "ShowTaksList", params: { id }})
    },
    createTaskList() {}
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.fetchTaskLists();
    })
  },
}
</script>
