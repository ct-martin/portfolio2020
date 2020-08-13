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
              Hybrid Cloud &amp; The Edge
            </h1>
            <p>
              Utilizing a hybrid cloud has enabled me to keep my costs down (something particularly necessary as a student) while not compromising functionality.
              However, being spread over a lot of platforms/services can make it tricky to show both what's there and how it's used.
              So, I want to visualize what's going on.
              If you want a significantly more detailed view (with visualizations), see the write-up linked at the end.
            </p>
            <!-- all images are renders of mermaid diagrams from hybrid cloud vis linked below -->
            <v-img alt="chart of infrastructure" max-height="500px" contain class="mb-4" src="/img/projects/cloud-full.jpg" />
            <p>
              That's a lot though, so here's the "buzzword bingo" version:
            </p>
            <v-img alt="simpler buzzword chart of infrastructure" max-height="400px" contain class="mb-4" src="/img/projects/cloud-buzzword.jpg" />
            <p>
              I'm also utilizing CI/CD to automate testing and deployment:
            </p>
            <v-img alt="test and deploy procedure" max-height="600px" contain class="mb-4" src="/img/projects/cloud-process.jpg" />
            <p class="mb-0">
              See a more complete write-up below, including more details (with visualizations).
            </p>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid class="deep-purple lighten-3 py-6">
      <v-row
        align="center"
        justify="center"
      >
        <v-col cols="12" md="10" class="py-0">
          <v-container fluid>
            <v-card class="mb-4" href="https://vis.ctmartin.me/hybrid-cloud/" target="_blank" rel="noopener">
              <div class="d-flex flex-no-wrap">
                <v-avatar class="ma-3" size="75" tile>
                  <v-img src="/icon.png" />
                </v-avatar>
                <div class="flex-grow-1">
                  <v-card-title>
                    Write-Up
                  </v-card-title>
                  <v-card-subtitle>
                    More details, levels of depth, concepts, workflows, and visualizations.
                  </v-card-subtitle>
                </div>
                <v-avatar class="ma-3" size="75" tile>
                  <v-icon x-large>
                    {{ mdiArrowRight }}
                  </v-icon>
                </v-avatar>
              </div>
            </v-card>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import { mdiArrowRight } from '@mdi/js'

export default Vue.extend({
  data () {
    return { mdiArrowRight }
  }
})
</script>
