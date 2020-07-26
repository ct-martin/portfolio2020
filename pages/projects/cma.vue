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
    </v-container>
    <v-container fluid class="blue lighten-3 py-6">
      <v-row
        align="center"
        justify="center"
      >
        <v-col cols="12" md="10" xl="8" class="py-0">
          <v-container fluid>
            <v-card class="mb-4" href="https://vis.ctmartin.me/museums/cma/view/" target="_blank" rel="noopener">
              <div class="d-flex flex-no-wrap">
                <v-avatar class="ma-3" size="75" tile>
                  <v-img src="/img/projects/cma-card.jpg" />
                </v-avatar>
                <div class="flex-grow-1">
                  <v-card-title>
                    See it
                  </v-card-title>
                  <v-card-subtitle>
                    Read &amp; interact with it yourself
                  </v-card-subtitle>
                </div>
                <v-avatar class="ma-3" size="75" tile>
                  <v-icon x-large>
                    mdi-arrow-right
                  </v-icon>
                </v-avatar>
              </div>
            </v-card>
            <v-card class="mb-4" href="https://github.com/ct-martin/vis/tree/master/static/museums/cma/view" target="_blank" rel="noopener">
              <div class="d-flex flex-no-wrap">
                <v-avatar class="ma-3" size="75" tile>
                  <v-icon x-large>
                    mdi-github
                  </v-icon>
                </v-avatar>
                <div class="flex-grow-1">
                  <v-card-title>
                    GitHub
                  </v-card-title>
                  <v-card-subtitle>
                    See the code
                  </v-card-subtitle>
                </div>
                <v-avatar class="ma-3" size="75" tile>
                  <v-icon x-large>
                    mdi-arrow-right
                  </v-icon>
                </v-avatar>
              </div>
            </v-card>
            <v-card class="mb-4" href="https://vis.ctmartin.me/museums/cma/" target="_blank" rel="noopener">
              <div class="d-flex flex-no-wrap">
                <v-avatar class="ma-3" size="75" tile>
                  <v-img src="/icon.png" />
                </v-avatar>
                <div class="flex-grow-1">
                  <v-card-title>
                    Write-Up
                  </v-card-title>
                  <v-card-subtitle>
                    More about the process and considerations
                  </v-card-subtitle>
                </div>
                <v-avatar class="ma-3" size="75" tile>
                  <v-icon x-large>
                    mdi-arrow-right
                  </v-icon>
                </v-avatar>
              </div>
            </v-card>
            <v-card to="/projects/si" nuxt>
              <div class="d-flex flex-no-wrap">
                <v-avatar class="ma-3" size="75" tile>
                  <v-img src="/img/projects/si-card.jpg" />
                </v-avatar>
                <div class="flex-grow-1">
                  <v-card-title>
                    See Also
                  </v-card-title>
                  <v-card-subtitle>
                    Smithsonian Institute Collections Visualization
                  </v-card-subtitle>
                </div>
                <v-avatar class="ma-3" size="75" tile>
                  <v-icon x-large>
                    mdi-arrow-right
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
