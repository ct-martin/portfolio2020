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
              Smithsonian Institute Collections Visualization
            </h1>
            <p>
              Museum collections can also tell us about history and the values of society.
              As one of the world's largest collections, the Smithsonian Collections are a prime target to dig in to.
            </p>
            <v-img alt="Screenshot of visualization" src="/img/projects/si.png" max-height="400px" contain class="mb-4" />
            <p>
              This visualization gives insight into the composition of the Smithsonian's collections, including <em>what</em>, <em>when</em>, and <em>where</em> items come from.
              Specifically, the visualization looks at the unit (such as the National Museum of American History or the Human Studies Film Archives), country, and time (if within the last couple centuries) items come from.
              Interaction enables filtering to a specific unit, allowing comparison in trends between units in addition to the whole.
            </p>
            <p>
              Since the Open Access dataset contains 11 million records, the data is in its own way opaque.
              At 26GB uncompressed, it's too large for me to load at once, much less interactively search through.
              To accomplish this task, the data was sampled for basic structure (at the start of this project the format specification had not been released) and then processed with Python and Jupyter Lab.
              After logging summaries and anomalies, string processing was used to clean up typos, inconsistencies, and similar issues.
              Finally, a JSON file was created with the aggregated data.
            </p>
            <p class="mb-0">
              At a technical level, the data was processed using command-line tools (including <code>grep</code>, <code>head</code>, <code>tail</code>, and <code>awk</code>), Python, Jupyter Lab, and Regex; the visualization was created with d3 and a fork of Semantic UI.
            </p>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid class="green lighten-5 py-6">
      <v-row
        align="center"
        justify="center"
      >
        <v-col cols="12" md="10" class="py-0">
          <v-container fluid>
            <v-card class="mb-4" href="https://si.ctmartin.dev/" target="_blank" rel="noopener">
              <div class="d-flex flex-no-wrap">
                <v-avatar class="ma-3" size="75" tile>
                  <v-img src="/img/projects/si-card.jpg" />
                </v-avatar>
                <div class="flex-grow-1">
                  <v-card-title>
                    Try it
                  </v-card-title>
                  <v-card-subtitle>
                    See &amp; interact with it yourself
                  </v-card-subtitle>
                </div>
                <v-avatar class="ma-3" size="75" tile>
                  <v-icon x-large>
                    mdi-arrow-right
                  </v-icon>
                </v-avatar>
              </div>
            </v-card>
            <v-card class="mb-4" href="https://github.com/ct-martin/si-collections" target="_blank" rel="noopener">
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
            <v-card class="mb-4" href="https://vis.ctmartin.me/museums/si/" target="_blank" rel="noopener">
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
            <v-card to="/projects/cma" nuxt>
              <div class="d-flex flex-no-wrap">
                <v-avatar class="ma-3" size="75" tile>
                  <v-img src="/img/projects/cma-card.jpg" />
                </v-avatar>
                <div class="flex-grow-1">
                  <v-card-title>
                    See Also
                  </v-card-title>
                  <v-card-subtitle>
                    Cleveland Museum of Art Collections Visualization
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
