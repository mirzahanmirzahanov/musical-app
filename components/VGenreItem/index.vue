<template>
  <div class="playlists__container container">
    <h2>genre name</h2>
    <div class="playlists__grid-container">
      <v-playlist-item />
    </div>
  </div>
</template>


<script>
import VPlaylistItem from "@/components/VPlaylistItem/index.vue";

export default {
  components: {
    VPlaylistItem,
  },
  name: "v-genre-item",
  computed: {},
  props: {},
  data: () => ({}),
  methods: {},
};
</script>


<style lang='scss'>
@import "@/static/scss/variables.scss";

.playlists {
  h2 {
    font-size: 30px;
    margin: 30px 0;
  }

  &__grid-container {
    display: grid;
    grid-template-columns: repeat(6, 200px);
    // justify-content: center;
    gap: 25px;
  }

  &__grid-item {
    width: 200px;
    height: 280px;
    border-radius: 15px;
    background-color: $gray;
    transition: all 0.3s ease-in-out;
    .playlist-img {
      // max-width: 200px;
      // max-height: 200px;

      img {
        width: 100%;
        height: 100%;
        border-radius: 15px 15px 0 0;
        object-fit: cover;
      }
    }

    .playlist-info {
      &__name {
        font-size: 20px;
        margin: 20px 0;
        text-align: center;
      }
    }
  }

  &__grid-item:hover {
    transform: translateX(-2px) translateY(-2px) scale(101%);
    box-shadow: 3px 3px 13px $shadow;
  }
}
</style>
