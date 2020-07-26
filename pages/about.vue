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
              Hey There!
            </h1>
            <p>
              I'm a recent grad from RIT (BS New Media Interative Development 2020).
              I minored in Museum Studies, focusing on how people use technology to engage with culture.
              My tech interests include metadata, visualization, and rich content editing.
            </p>
            <p>
              Over the last year-ish I've been working with data visualization and semantic markup.
              This has included visualizing everything from pancakes to museum collections to APIs.
              I've also been learning about the semantics discussions involved in Schema.org and Markdown.
            </p>
            <p>
              Some of the tools I've been actively using over the last year include TypeScript, SASS, Nuxt, Hugo, GitLab CI, and d3.
            </p>
            <p class="mb-0">
              In my free time I've been cooking/baking and experimenting with food.
            </p>
          </v-container>
        </v-col>
      </v-row>
      <v-row
        align="center"
        justify="center"
      >
        <v-col cols="12" md="10" xl="8" class="py-0">
          <v-container fluid class="pt-0 text-center">
            <v-btn text nuxt to="/projects" :ripple="false">
              Projects
              <v-icon dark small>
                mdi-arrow-right
              </v-icon>
            </v-btn>
            <v-btn text nuxt to="/resume" :ripple="false">
              Resume
              <v-icon dark small>
                mdi-arrow-right
              </v-icon>
            </v-btn>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid class="teal lighten-3 py-5">
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

export default Vue.extend({
  components: {
    Contact
  }
})
</script>
