<template>
  <main>
    <v-container fluid class="black white--text">
      <v-row
        align="center"
        justify="center"
        style="min-height:250px;"
      >
        <v-col cols="12" md="10" xl="8">
          <v-container fluid>
            <h1 class="display-3 mb-4 ml-n1">
              Christian Martin
            </h1>
            <p class="subtitle-2 mb-0">
              Available Full-Time, Front-end Web Development
            </p>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid class="blue darken-4 white--text">
      <v-row
        align="center"
        justify="center"
      >
        <v-col cols="12" md="10" xl="8" class="py-1">
          <v-container fluid class="py-0">
            <v-row align="center" class="ma-0 body-2">
              <span>Can't find something?&nbsp;</span>
              <v-btn
                text
                href="https://find.ctmartin.me/"
                target="_blank"
                rel="noopener"
                dark
                small
                :ripple="false"
              >
                Search Here
                <v-icon dark small>
                  {{ mdiArrowRight }}
                </v-icon>
              </v-btn>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid>
      <v-row
        align="center"
        justify="center"
      >
        <v-col cols="12" md="10" xl="8" class="py-1">
          <v-container fluid>
            <h2 class="display-1">
              Projects
            </h2>
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
            </v-row>
          </v-container>
        </v-col>
      </v-row>
      <v-row
        align="center"
        justify="center"
      >
        <v-col cols="12" md="10" xl="8" class="py-0">
          <v-container fluid class="pt-0 text-center">
            <v-btn text nuxt to="/projects" :ripple="false">
              More Projects
              <v-icon small>
                {{ mdiArrowRight }}
              </v-icon>
            </v-btn>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid class="light-blue darken-1 white--text">
      <v-row
        align="center"
        justify="center"
      >
        <v-col cols="12" md="10" xl="8">
          <v-container fluid class="py-0">
            <v-row
              align="start"
              justify="center"
              class="text-center"
            >
              <v-col cols="12" md="5" lg="4" xl="3" class="pt-0">
                <v-container fluid>
                  <h3 class="headline mb-4">
                    Front-end
                  </h3>
                  <div>
                    <v-chip
                      v-for="skill in skillsFrontEnd"
                      :key="skill"
                      class="ma-1"
                      color="white"
                      label
                    >
                      {{ skill }}
                    </v-chip>
                  </div>
                </v-container>
              </v-col>
              <v-col cols="12" md="5" lg="4" offset-lg="1" xl="3" offset-xl="0" class="pt-0">
                <v-container fluid>
                  <h3 class="headline mb-4">
                    Back-end
                  </h3>
                  <div>
                    <v-chip
                      v-for="skill in skillsBackEnd"
                      :key="skill"
                      class="ma-1"
                      color="white"
                      label
                    >
                      {{ skill }}
                    </v-chip>
                  </div>
                </v-container>
              </v-col>
              <v-col cols="12" md="5" lg="4" xl="3" class="pt-0">
                <v-container fluid>
                  <h3 class="headline mb-4">
                    Dev Tools
                  </h3>
                  <div>
                    <v-chip
                      v-for="skill in skillsTooling"
                      :key="skill"
                      class="ma-1"
                      color="white"
                      label
                    >
                      {{ skill }}
                    </v-chip>
                  </div>
                </v-container>
              </v-col>
              <v-col cols="12" md="5" lg="4" offset-lg="1" xl="3" offset-xl="0" class="pt-0">
                <v-container fluid>
                  <h3 class="headline mb-4">
                    Servers
                  </h3>
                  <div>
                    <v-chip
                      v-for="skill in skillsServers"
                      :key="skill"
                      class="ma-1"
                      color="white"
                      label
                    >
                      {{ skill }}
                    </v-chip>
                  </div>
                </v-container>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid class="light-blue darken-3 white--text">
      <v-row
        align="center"
        justify="center"
      >
        <v-col cols="12" md="10" xl="8">
          <v-container fluid class="pt-0">
            <p>Want to know more?</p>
            <v-row align="center" class="body-2">
              <v-btn text nuxt to="/projects" small dark :ripple="false">
                Projects
                <v-icon small>
                  {{ mdiArrowRight }}
                </v-icon>
              </v-btn>
              <v-btn text nuxt to="/resume" small dark :ripple="false">
                Resume
                <v-icon small>
                  {{ mdiArrowRight }}
                </v-icon>
              </v-btn>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid>
      <v-row
        align="center"
        justify="center"
      >
        <v-col cols="12" md="10" xl="8">
          <v-container fluid>
            <h2 class="display-1 mb-4">
              Hey There!
            </h2>
            <p class="mb-0">
              I'm a recent grad from RIT (BS New Media Interative Development 2020).
              I minored in Museum Studies, focusing on how people use technology to engage with culture.
              My tech interests include metadata, visualization, and rich content editing.
            </p>
          </v-container>
        </v-col>
      </v-row>
      <v-row
        align="center"
        justify="center"
      >
        <v-col cols="12" md="10" xl="8" class="py-0">
          <v-container fluid class="pt-0 text-center">
            <v-btn text nuxt to="/about" :ripple="false">
              About Me
              <v-icon small>
                {{ mdiArrowRight }}
              </v-icon>
            </v-btn>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid class="cyan lighten-3 py-5">
      <v-row
        align="center"
        justify="center"
      >
        <v-col cols="12" md="10" xl="8">
          <v-container fluid>
            <Contact />
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import { mdiArrowRight } from '@mdi/js'
import Contact from '~/components/contact.vue'

export default Vue.extend({
  components: {
    Contact
  },
  data () {
    return {
      mdiArrowRight,
      skillsBackEnd: [
        'Serverless/FaaS',
        'Node',
        'MySQL',
        'Redis',
        'PHP',
        'Python',
        'MongoDB'
      ],
      skillsFrontEnd: [
        'TypeScript',
        'SASS',
        'Angular',
        'Vue',
        'React',
        'd3',
        'WebSockets'
      ],
      skillsServers: [
        'Nginx',
        'Apache',
        'Bash',
        'Linux',
        'Virtualization',
        'Networking'
      ],
      skillsTooling: [
        'Git',
        'CI/CD',
        'Docker'
      ]
    }
  }
})
</script>
