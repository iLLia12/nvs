<template>
  <div class="m-w-1500px q-pt-md m-auto">
    <div class="flex justify-between">
      <h2 class="q-my-none text-orange text-weight-bolder font-permament-market">Task Lists</h2>
      <div class="flex">
        <q-form class="q-gutter-md flex">
          <div>
            <q-btn 
              label="Add"
              type="button"
              class="font-permament-market"
              color="orange"
              @click="createTaskList()"
            />
          </div>
          <q-input
              outlined
              v-model="form.name"
              label-color="orange"
              label="Task List name"
              input-class="text-orange font-permament-market"
              :error="error"
            />
        </q-form>
      </div>
    </div>
    <div class="q-pa-md flex bg-list wrap">
      <img style="margin:auto" v-if="loading" src="~assets/spinner.svg" alt="" />
      <div v-show="!loading" class="q-pa-xs m-w-244px" v-for="(element, key) in getTaskLists" :key="element.id">
        <q-card flat bordered class="my-card">
          <q-card-section class="flex justify-between">
            <img class="thumb-img" :src="`https://source.unsplash.com/random/200x200?sig=${key}`" alt="" />
          </q-card-section>
          <q-card-section class="flex justify-between q-py-none">
            <div class="text-orange font-permament-market">{{element.name}}</div>
          </q-card-section>
          <q-card-section class="q-pt-none">
            <span class="text-white f-s-10px">tasks: {{element.Tasks.length}}</span>
          </q-card-section>
          <q-card-section class="q-pt-none">
            <q-btn
                color="negative"
                size="xs"
                class="q-mr-xs font-permament-market"
                label="Show"
                @click.native="showTaskList(element)"
              />
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
      loading: true,
      finished: [],
      error: false,
      taskList: {
        name: "",
      },
      form: {},
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
      'storeTaskListAction',
    ]),
    showTaskList({id}) {
      this.$router.push({name: "ShowTaksList", params: { id }})
    },
    createTaskList() {
      this.error = !this.form.name.length; 
      if (this.error) return;
      this.storeTaskListAction(this.form).then(() => {
        this.fetchTaskLists()
        this.error = false;
         this.form = {...this.taskList}
      })
    },
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.fetchTaskLists();
    })
  },
  created() {
    this.form = {...this.taskList}
  },
  mounted() {
    setTimeout(() => {
      this.loading = false
    },2000)
  }
}
</script>
<style lang="scss" scoped>
.my-card {
  border:2px solid $grey;
  background: rgb(38,20,46);
  background: radial-gradient(circle, rgba(38,20,46,0.16850490196078427) 0%, rgba(156,149,163,1) 0%, rgba(38,20,46,0.9136029411764706) 100%);
}
.bg-list {
  min-height:712px;
  background: rgba(75, 67, 67, 0.39);
  background-image: radial-gradient(black 2px, transparent 0);
  background-size: 10px 10px;
  background-position: -19px -19px;
}
.thumb-img {
  contain: content;
}
</style>
