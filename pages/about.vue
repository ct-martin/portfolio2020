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
        <v-col cols="12" md="10" class="py-0">
          <v-container fluid class="pt-0 text-center">
            <v-btn text href="mailto:hello@ctmartin.me" :ripple="false">
              Email
              <v-icon dark small>
                mdi-arrow-right
              </v-icon>
            </v-btn>
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
            <v-btn text href="https://github.com/ct-martin" target="_blank" rel="noopener noreferrer" :ripple="false">
              GitHub
              <v-icon dark small>
                mdi-arrow-right
              </v-icon>
            </v-btn>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid>
      <v-row
        align="center"
        justify="center"
      >
        <v-col cols="12" md="10" class="pt-0">
          <v-container fluid>
            <h2 class="display-1 mb-4">
              Want to Talk?
            </h2>
            <v-row align="center" class="body-2 px-3">
              <v-btn href="mailto:christian@ctmartin.me" dark small :ripple="false">
                <v-icon left>
                  mdi-email
                </v-icon>
                Email
              </v-btn>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>
