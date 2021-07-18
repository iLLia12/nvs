<template>
  <div id="q-app" class="app-bg">
    <q-layout view="lHh Lpr lFf">
      <q-header class="header-class">
        <q-toolbar>
          <q-toolbar-title>
           <span class="text-orange text-weight-bolder"> NVS Test App</span> 
          </q-toolbar-title>
          <div class="text-orange">Quasar v{{ $q.version }}</div>
        </q-toolbar>
      </q-header>
      <q-page-container>
        <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" :duration="300">
           <router-view/>
        </transition>
      </q-page-container>
    </q-layout>
  </div>
</template>
<script>
export default {
  name: 'App',
}
</script>
<style lang="scss" scoped>
.app-bg {
  background: rgb(38,20,46);
  background-image:radial-gradient(circle, rgba(38,20,46,0.16850490196078427) 0%, rgba(25,23,27,0.7847514005602241) 46%, rgba(38,20,46,0.9136029411764706) 100%), url("~assets/wallpapers.jpg")
}
.header-class {
  background:rgb(0 0 0 / 44%);
}
</style>
