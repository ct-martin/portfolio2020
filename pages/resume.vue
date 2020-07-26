<template>
  <main>
    <v-container fluid>
      <v-row
        align="center"
        justify="center"
      >
        <v-col cols="12" md="10" xl="8" class="pt-0">
          <v-container fluid>
            <h1 class="display-1 mb-4">
              Resume
            </h1>
            <Embed src="https://ctmartin.dev/Martin_Christian_Resume.pdf" type="pdf" />
          </v-container>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid class="green accent-4 py-5">
      <v-row
        align="center"
        justify="center"
      >
        <v-col cols="12" md="10" xl="8">
          <v-container fluid>
            <Contact />
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import Contact from '~/components/contact.vue'
import Embed from '~/components/embed.vue'

export default Vue.extend({
  components: {
    Contact,
    Embed
  }
})
</script>
