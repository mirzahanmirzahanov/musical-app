<template>
  <div class="wrapper">
    <v-header />
    <main class="main">
      <section class="playlists">
        <v-genre-item />
      </section>
    </main>
  </div>
</template>

<script>
import VHeader from "@/components/VHeader/index.vue";
import VGenreItem from "@/components/VGenreItem/index.vue";

export default {
  components: {
    VHeader,
    VGenreItem,
  },
  name: "index",
};
</script>
