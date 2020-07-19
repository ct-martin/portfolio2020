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
              Cleveland Museum of Art Collections Visualization
            </h1>
            <p>
              Museum collections can tell us a lot about history and society.
              This piece looks to interpret a collection to see what appears to be happening in it as well as some influences.
            </p>
            <v-img alt="Screenshot of visualization" src="/img/projects/cma.png" max-height="400px" contain class="mb-4" />
            <p>
              OpenRefine was used for initial browsing of the dataset.
              All data processing is done in-browser using JavaScript and d3 was used for the charts.
            </p>
            <p class="mb-0">
              As opposed to an interactive experience, this piece is more of an essay based on the data.
              Of particular note is the Growth (Accessions) per Year, which looks at the impact of politics and the economy on the collection.
            </p>
          </v-container>
        </v-col>
      </v-row>
      <v-row
        align="center"
        justify="center"
      >
        <v-col cols="12" md="10" class="py-0">
          <v-container fluid class="pt-0 text-center">
            <v-btn text href="https://vis.ctmartin.me/museums/cma/view/" target="_blank" rel="noopener" :ripple="false">
              View
              <v-icon dark small>
                mdi-arrow-right
              </v-icon>
            </v-btn>
            <v-btn text href="https://github.com/ct-martin/vis/tree/master/static/museums/cma/view" target="_blank" rel="noopener" :ripple="false">
              GitHub
              <v-icon dark small>
                mdi-arrow-right
              </v-icon>
            </v-btn>
            <v-btn text href="https://vis.ctmartin.me/museums/cma/" target="_blank" rel="noopener" :ripple="false">
              Write-Up
              <v-icon dark small>
                mdi-arrow-right
              </v-icon>
            </v-btn>
            <v-btn text to="/projects/si" nuxt :ripple="false">
              See also: SI Vis
              <v-icon dark small>
                mdi-arrow-right
              </v-icon>
            </v-btn>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>
