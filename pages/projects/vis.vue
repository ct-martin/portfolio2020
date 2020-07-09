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
              Name
            </h1>
            <p>
              What &amp; Background
            </p>
            <p>
              How
            </p>
            <p>
              Tech
            </p>
            <p class="mb-0">
              Usage
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
            <v-btn text href="" :ripple="false">
              View
              <v-icon dark small>
                mdi-arrow-right
              </v-icon>
            </v-btn>
            <v-btn text href="" :ripple="false">
              GitHub
              <v-icon dark small>
                mdi-arrow-right
              </v-icon>
            </v-btn>
            <v-btn text href="" :ripple="false">
              Write-Up
              <v-icon dark small>
                mdi-arrow-right
              </v-icon>
            </v-btn>
            <v-btn text href="" :ripple="false">
              Other Write-Up
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
