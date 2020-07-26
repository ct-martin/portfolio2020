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
              Find
            </h1>
            <p>
              Find is a search engine based on Schema.org markup.
            </p>
            <v-img alt="Screenshot of application" src="/img/projects/find.png" max-height="400px" contain class="mb-4" />
            <p>
              Find consumes the supported subset of Schema.org markup in the JSON-LD format and recursively iterates through it to find pages.
              A summary of data is created and displayed on the page.
              Filters are available for sites and page types (such as Blog Posting or Recipe) and a search box is available for the title and description.
              The search also has string normalization, including "smart" typography (such as quotes and em-dashes) and Unicode characters.
            </p>
            <p class="mb-0">
              Find is a Single-Page App built in Nuxt (from the Vue ecosystem), TypeScript, and SASS.
              A fetcher queries all APIs given and then passes them to a parser, which simplifies the Schema.org markup into something usable.
            </p>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid class="purple lighten-4 py-6">
      <v-row
        align="center"
        justify="center"
      >
        <v-col cols="12" md="10" xl="8" class="py-0">
          <v-container fluid>
            <v-card class="mb-4" href="https://find.ctmartin.me/" target="_blank" rel="noopener">
              <div class="d-flex flex-no-wrap">
                <v-avatar class="ma-3" size="75" tile>
                  <v-img src="/img/projects/find-card.jpg" />
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
            <v-card class="mb-4" href="https://github.com/ct-martin/find.ctmartin.me" target="_blank" rel="noopener">
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
            <v-card class="mb-4" href="https://github.com/ct-martin/find.ctmartin.me/blob/master/README.md" target="_blank" rel="noopener">
              <div class="d-flex flex-no-wrap">
                <v-avatar class="ma-3" size="75" tile>
                  <v-icon x-large>
                    mdi-github
                  </v-icon>
                </v-avatar>
                <div class="flex-grow-1">
                  <v-card-title>
                    Technical Write-Up
                  </v-card-title>
                  <v-card-subtitle>
                    README with Schema support and mappings
                  </v-card-subtitle>
                </div>
                <v-avatar class="ma-3" size="75" tile>
                  <v-icon x-large>
                    mdi-arrow-right
                  </v-icon>
                </v-avatar>
              </div>
            </v-card>
            <v-card class="mb-4" href="https://vis.ctmartin.me/api-in-mermaid/#more-mermaid" target="_blank" rel="noopener">
              <div class="d-flex flex-no-wrap">
                <v-avatar class="ma-3" size="75" tile>
                  <v-img src="/icon.png" />
                </v-avatar>
                <div class="flex-grow-1">
                  <v-card-title>
                    Find-based Visualizations
                  </v-card-title>
                  <v-card-subtitle>
                    Visualizing Schema mappings, data flow, and deployment
                  </v-card-subtitle>
                </div>
                <v-avatar class="ma-3" size="75" tile>
                  <v-icon x-large>
                    mdi-arrow-right
                  </v-icon>
                </v-avatar>
              </div>
            </v-card>
            <v-card href="https://blog.ctmartin.me/2020/04/schema-api-and-search/" target="_blank" rel="noopener">
              <div class="d-flex flex-no-wrap">
                <v-avatar class="ma-3" size="75" tile>
                  <v-img src="/icon.png" />
                </v-avatar>
                <div class="flex-grow-1">
                  <v-card-title>
                    API Building Write-Up
                  </v-card-title>
                  <v-card-subtitle>
                    How I created the Schema API Find uses
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
