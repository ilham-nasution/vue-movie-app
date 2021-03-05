<template>
  <div>
    <Navbar />
    <b-container class="mt-5 pt-5">
      <router-view/>
    </b-container>
  </div>
</template>

<script>
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Navbar from './components/Navbar.vue'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>
