<template>
  <main>
    <v-container fluid>
      <v-row
        align="center"
        justify="center"
      >
        <v-col cols="12" md="10" class="pt-0">
          <v-container fluid>
            <h1 class="display-1 mb-4">
              Resume
            </h1>
            <Embed src="https://ctmartin.dev/Martin_Christian_Resume.pdf" type="pdf" />
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import Embed from '~/components/embed.vue'

export default Vue.extend({
  components: {
    Embed
  }
})
</script>
