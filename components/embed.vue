<template>
  <v-responsive :aspect-ratio="16/9">
    <iframe :src="fullSrc" width="100%" height="100%" />
  </v-responsive>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    src: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'iframe'
    }
  },
  computed: {
    fullSrc () {
      if (this.type === 'pdf') {
        return `https://mozilla.github.io/pdf.js/web/viewer.html?file=${this.src}`
      }
      return this.src
    }
  }
})
</script>
