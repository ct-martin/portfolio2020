<template>
  <v-navigation-drawer
    v-model="drawerProxy"
    app
    color="white"
    light
    temporary
  >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title">
          Christian Martin
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider />

    <v-list nav>
      <v-list-item-group>
        <v-list-item nuxt to="/" :ripple="false">
          Home
        </v-list-item>

        <v-list-item nuxt to="/projects" :ripple="false">
          Projects
        </v-list-item>

        <v-list-item nuxt to="/about" :ripple="false">
          About
        </v-list-item>

        <v-list-item nuxt to="/resume" :ripple="false">
          Resume
        </v-list-item>
      </v-list-item-group>
    </v-list>

    <v-divider />

    <v-list nav>
      <v-list-item-group>
        <v-list-item
          href="https://find.ctmartin.me/"
          target="_blank"
          rel="noopener"
        >
          Search
        </v-list-item>
      </v-list-item-group>
    </v-list>

    <v-divider />

    <v-list nav>
      <v-list-item-group>
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
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Vue, Component, PropSync } from 'vue-property-decorator'

@Component
export default class YourComponent extends Vue {
  @PropSync('drawer', { type: Boolean }) drawerProxy!: Boolean
}
</script>
