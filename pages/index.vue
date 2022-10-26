<template>
  <div>
  <p v-if="$fetchState.pending">Загрузка данных</p>
  <div v-else class="wrapper">
    <v-header />
    <main class="main">
      <section class="playlists">
        <v-genre-item 
          v-for="(genre, index) in genres" 
          :key="index"  
          :genre="genre"
          />
      </section>
    </main>
  </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import VHeader from "@/components/VHeader/index.vue";
import VGenreItem from "@/components/VGenreItem/index.vue";

export default {
  components: {
    VHeader,
    VGenreItem,
  },
  name: "index",
  data: () => ({
    apiKeys: {
      clientID: "89fdc95d05924d9ab70a01aa35d4623b",
      clientSecret: "5c8b6479bdbd409eaeda9e9dfe336c98",
    },
  }),
  async fetch() {
    await this.getToken(this.apiKeys);
  },
  fetchDelay: 2000,
  mounted() {
    this.getGenres(this.accessToken);
  },
  computed: {
    ...mapGetters({
      accessToken: "music/ACCESS_TOKEN",
      genres: 'music/GENRES'
    }),
  },
  methods: {
    ...mapActions({
      getToken: "music/GET_TOKEN",
      getGenres: "music/GET_GENRES",
      
    }),

  },
};
</script>
