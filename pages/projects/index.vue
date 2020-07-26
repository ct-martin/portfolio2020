<template>
  <main>
    <v-container fluid>
      <v-row
        align="center"
        justify="center"
      >
        <v-col cols="12" md="10" xl="8" class="py-0">
          <v-container fluid>
            <h1 class="display-1 mb-0">
              Projects
            </h1>
          </v-container>
        </v-col>
      </v-row>
      <v-row
        align="center"
        justify="center"
      >
        <v-col cols="12" md="10" xl="8" class="pt-0">
          <v-container fluid class="pt-0">
            <v-row
              align="stretch"
              justify="center"
            >
              <v-col cols="12" md="6" lg="4">
                <v-card to="/projects/find" nuxt tile>
                  <v-img src="/img/projects/find-card.jpg" height="200px" />
                  <v-card-title>
                    Find
                  </v-card-title>
                  <v-card-text class="text--primary">
                    Single-Page App Search Engine for APIs using Schema.org markup.
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" md="6" lg="4">
                <v-card to="/projects/si" nuxt tile>
                  <v-img src="/img/projects/si-card.jpg" height="200px" />
                  <v-card-title>
                    SI Collections
                  </v-card-title>
                  <v-card-text class="text--primary">
                    Interactive visualization of the Smithsonian's 11 million-record Open Access dataset.
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" md="6" lg="4">
                <v-card to="/projects/oembed" nuxt tile>
                  <v-img src="/img/projects/oembed-json.png" height="200px" />
                  <v-card-title>
                    Serverless oEmbed
                  </v-card-title>
                  <v-card-text class="text--primary">
                    Cloudflare Workers script to scrape sites for metadata and output oEmbed.
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" md="6" lg="4">
                <v-card to="/projects/cma" nuxt tile>
                  <v-img src="/img/projects/cma-card.jpg" height="200px" />
                  <v-card-title>
                    CMA Collections
                  </v-card-title>
                  <v-card-text class="text--primary">
                    Visualization of the Cleveland Museum of Art's collections.
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid class="red lighten-2 py-6">
      <v-row
        align="center"
        justify="center"
      >
        <v-col cols="12" md="10" xl="8" class="py-0">
          <v-container fluid>
            <v-card class="mb-4" nuxt to="/resume">
              <div class="d-flex flex-no-wrap">
                <v-avatar class="ma-3" size="75" tile>
                  <!--<v-img src="/img/resume-thumb.jpg" />-->
                  <v-img src="/icon.png" />
                </v-avatar>
                <div class="flex-grow-1">
                  <v-card-title>
                    Resume
                  </v-card-title>
                  <v-card-subtitle>
                    Work experience &amp; skills
                  </v-card-subtitle>
                </div>
                <v-avatar class="ma-3" size="75" tile>
                  <v-icon x-large>
                    mdi-arrow-right
                  </v-icon>
                </v-avatar>
              </div>
            </v-card>
            <v-card class="mb-4" href="https://github.com/ct-martin" target="_blank" rel="noopener">
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
                    See code
                  </v-card-subtitle>
                </div>
                <v-avatar class="ma-3" size="75" tile>
                  <v-icon x-large>
                    mdi-arrow-right
                  </v-icon>
                </v-avatar>
              </div>
            </v-card>
            <v-card class="mb-4" href="https://2018.ctmartin.dev/" target="_blank" rel="noopener">
              <div class="d-flex flex-no-wrap">
                <v-avatar class="ma-3" size="75" tile>
                  <v-img src="/img/projects/find-card.jpg" />
                </v-avatar>
                <div class="flex-grow-1">
                  <v-card-title>
                    Search
                  </v-card-title>
                  <v-card-subtitle>
                    Includes blog posts &amp; visualizations
                  </v-card-subtitle>
                </div>
                <v-avatar class="ma-3" size="75" tile>
                  <v-icon x-large>
                    mdi-arrow-right
                  </v-icon>
                </v-avatar>
              </div>
            </v-card>
            <v-card class="mb-4" href="https://2018.ctmartin.dev/" target="_blank" rel="noopener">
              <div class="d-flex flex-no-wrap">
                <v-avatar class="ma-3" size="75" tile>
                  <v-img src="/img/projects/old-portfolio-thumb.jpg" />
                </v-avatar>
                <div class="flex-grow-1">
                  <v-card-title>
                    Old Portfolio
                  </v-card-title>
                  <v-card-subtitle>
                    Older projects, talks, and writing
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
