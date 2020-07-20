<template>
  <v-card>
    <v-card-title class="headline">
      Want to talk?
    </v-card-title>
    <v-list class="pt-0">
      <v-list-item
        v-for="method in contactMethods"
        :key="method[0]"
        :href="method[3]"
        :target="!!method[3] && method[3].startsWith('https://') ? '_blank' : undefined"
        :rel="!!method[3] && method[3].startsWith('https://') ? 'noopener' : undefined"
      >
        <v-list-item-icon>
          <v-icon>mdi-{{ method[1] }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ method[0] }}</v-list-item-title>
          <v-list-item-subtitle>{{ method[2] }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      contactMethods: [
        // [name, icon, text, url]
        ['Email', 'email', 'christian@ctmartin.me', 'mailto:christian@ctmartin.me'],
        ['LinkedIn', 'linkedin', '/in/ct-martin', 'https://www.linkedin.com/in/ct-martin/'],
        ['GitHub', 'github', '@ct-martin', 'https://github.com/ct-martin'],
        ['Microsoft Teams', 'microsoft-teams', 'christian@ctmartin.me', undefined],
        ['Google Meet/Hangouts', 'google-hangouts', 'christian@ctmartin.me', undefined]
      ]
    }
  }
})
</script>
