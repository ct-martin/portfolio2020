<template>
  <main>
    <v-container fluid>
      <v-row
        align="center"
        justify="center"
      >
        <v-col cols="12" md="10" class="py-0">
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
        <v-col cols="12" md="10" class="pt-0">
          <v-container fluid class="pt-0">
            <v-row
              align="stretch"
              justify="center"
            >
              <v-col cols="12" md="6" lg="4">
                <v-card tile>
                  <v-card-title>
                    Find
                  </v-card-title>
                  <v-card-text class="text--primary">
                    Single-Page App Search Engine for APIs using Schema.org markup.
                  </v-card-text>
                  <v-card-actions>
                    <v-btn text href="https://find.ctmartin.me/" target="_blank" rel="noopener" :ripple="false">
                      View
                    </v-btn>
                    <v-btn text nuxt to="/projects/find" :ripple="false">
                      Learn More
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
              <v-col cols="12" md="6" lg="4" offset-lg="1">
                <v-card tile>
                  <v-card-title>
                    SI
                  </v-card-title>
                  <v-card-text class="text--primary">
                    Interactive visualization of the Smithsonian's 11 million-record Open Access dataset.
                  </v-card-text>
                  <v-card-actions>
                    <v-btn text href="https://si.ctmartin.dev/" target="_blank" rel="noopener" :ripple="false">
                      View
                    </v-btn>
                    <v-btn text nuxt to="/projects/si" :ripple="false">
                      Learn More
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>
