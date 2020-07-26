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
              oEmbed Provider
            </h1>
            <p>
              While not SEO, oEmbed is another way to give information about web pages, specifically intended for embedding media like photos and video.
              I used Cloudflare Workers to create a serverless oEmbed provider that scrapes the web page for metadata, including Schema markup and <code>&lt;meta&gt;</code> tags.
            </p>
            <p>
              Here's an example of a blog post:
            </p>
            <pre class="mb-4"><code class="px-4">
{
  "type": "link",
  "version": "1.0",
  "title": "Building a metadata API & Search",
  "provider_name": "Christian Martin's Blog",
  "author_name": "Christian Martin"
}
</code></pre>
            <!--<v-img alt="..." src="..." max-height="400px" contain class="mb-4" />-->
            <p class="mb-0">
              The code uses Cloudflare's HTMLRewriter API to extract and parse Schema JSON-LD &amp; <code>&lt;meta&gt;</code> tags.
              The data is then mapped to oEmbed properties, preferring Schema and falling back to less specific/vendor-branded tags as needed.
              According to the Cloudflare dashboard, the median CPU time (as of writing) is 2.3ms.
            </p>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid class="orange lighten-3 py-6">
      <!--
      Links (?):
      * GitHub (maybe use a tag/label?)
      * GitLab CI & Pages
      * Cloudflare
      * CF Workers? (once working,) oEmbed worker code?
      * Hugo & Nuxt
      * Blog posts
      -->

      <v-row
        align="center"
        justify="center"
      >
        <v-col cols="12" md="10" class="py-0">
          <v-container fluid>
            <v-card class="mb-4" href="https://github.com/ct-martin/edge-oembed" target="_blank" rel="noopener">
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
            <!--<v-card class="mb-4" href="https://github.com/ct-martin/find.ctmartin.me/blob/master/README.md" target="_blank" rel="noopener">
              <div class="d-flex flex-no-wrap">
                <v-avatar class="ma-3" size="75" tile>
                  <v-img src="/img/icon.png" />
                </v-avatar>
                <div class="flex-grow-1">
                  <v-card-title>
                    Write-Up
                  </v-card-title>
                  <v-card-subtitle>
                    ...
                  </v-card-subtitle>
                </div>
                <v-avatar class="ma-3" size="75" tile>
                  <v-icon x-large>
                    mdi-arrow-right
                  </v-icon>
                </v-avatar>
              </div>
            </v-card>-->
            <v-card class="mb-0" href="https://blog.ctmartin.me/oembed?url=https://blog.ctmartin.me/2020/04/schema-api-and-search/" target="_blank" rel="nofollow noopener">
              <div class="d-flex flex-no-wrap">
                <v-avatar class="ma-3" size="75" tile>
                  <v-img src="/img/projects/oembed-json.png" />
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
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>
