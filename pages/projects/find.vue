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
      <v-row
        align="center"
        justify="center"
      >
        <v-col cols="12" md="10" class="py-0">
          <v-container fluid class="pt-0 text-center">
            <v-btn text href="https://find.ctmartin.me/" target="_blank" rel="noopener" :ripple="false">
              View
              <v-icon dark small>
                mdi-arrow-right
              </v-icon>
            </v-btn>
            <v-btn text href="https://github.com/ct-martin/find.ctmartin.me" target="_blank" rel="noopener" :ripple="false">
              GitHub
              <v-icon dark small>
                mdi-arrow-right
              </v-icon>
            </v-btn>
            <v-btn text href="https://github.com/ct-martin/find.ctmartin.me/blob/master/README.md" target="_blank" rel="noopener" :ripple="false">
              Find Write-Up
              <v-icon dark small>
                mdi-arrow-right
              </v-icon>
            </v-btn>
            <v-btn text href="https://vis.ctmartin.me/api-in-mermaid/#more-mermaid" target="_blank" rel="noopener" :ripple="false">
              Find-based Visualizations
              <v-icon dark small>
                mdi-arrow-right
              </v-icon>
            </v-btn>
            <v-btn text href="https://blog.ctmartin.me/2020/04/schema-api-and-search/" target="_blank" rel="noopener" :ripple="false">
              API Building Write-Up
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
