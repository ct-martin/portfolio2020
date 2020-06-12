<template>
  <v-app>
    <NavDrawer :drawer.sync="drawer" />
    <Navbar @update:drawer="drawer = !drawer" />
    <v-content>
      <nuxt />
    </v-content>
    <Footer />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import Footer from '~/components/footer.vue'
import Navbar from '~/components/navbar.vue'
import NavDrawer from '~/components/nav-drawer.vue'

export default Vue.extend({
  components: {
    Footer,
    Navbar,
    NavDrawer
  },

  data () {
    return {
      drawer: false
    }
  }
})
</script>
