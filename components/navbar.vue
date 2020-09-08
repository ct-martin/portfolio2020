<template>
  <v-app-bar
    app
    color="white"
    light
  >
    <v-app-bar-nav-icon aria-label="open sidebar" class="d-md-none" @click="$emit('update:drawer')">
      <v-icon>{{ mdiMenu }}</v-icon>
    </v-app-bar-nav-icon>

    <v-toolbar-title>
      Christian Martin
    </v-toolbar-title>

    <v-divider class="mx-4 d-none d-md-block" inset vertical />

    <div class="d-none d-md-block">
      <v-btn text nuxt to="/" :ripple="false">
        Home
      </v-btn>

      <v-btn text nuxt to="/projects" :ripple="false">
        Projects
      </v-btn>

      <v-btn text nuxt to="/about" :ripple="false">
        About
      </v-btn>

      <v-btn text nuxt to="/resume" :ripple="false">
        Resume
      </v-btn>

      <v-menu light offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            text
            :ripple="false"
            v-bind="attrs"
            v-on="on"
          >
            More
            <v-icon>{{ mdiMenuDown }}</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            href="https://find.ctmartin.me/"
            target="_blank"
            rel="noopener"
          >
            Search
          </v-list-item>
          <v-divider />
          <v-list-item
            href="https://ctmartin.me/"
            target="_blank"
            rel="noopener"
          >
            Personal Site
          </v-list-item>
          <v-list-item
            href="https://github.com/ct-martin/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue'
import { mdiMenu, mdiMenuDown } from '@mdi/js'

export default Vue.extend({
  data () {
    return { mdiMenu, mdiMenuDown }
  }
})
</script>
