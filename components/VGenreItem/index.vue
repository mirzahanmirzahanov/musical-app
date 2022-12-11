<template>
  <div class="playlists__container container">
    <h2>{{ genre.name }}</h2>
    <div v-if="this.playlists !== []" class="playlists__grid-container">
      <v-playlist-item
        v-for="(playlist, index) in this.playlists"
        :key="index"
        :playlist="playlist"
        
      />
    </div>
  </div>
</template>


<script>
import { mapActions, mapGetters } from "vuex";
import VPlaylistItem from "@/components/VPlaylistItem/index.vue";

export default {
  components: {
    VPlaylistItem,
  },
  name: "v-genre-item",
  computed: {
    ...mapGetters({
      accessToken: "music/ACCESS_TOKEN",
    }),
  },
  props: {
    genre: {
      type: Object,
      required: true,
      default: {},
    },
  },
  data() {
    return {
      genreItem: this.genre,
      playlists: [],
    };
  },

  async fetch() {
    const response = await this.$axios.get(
      `/browse/categories/${this.genreItem.id}/playlists`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + this.accessToken,
        },
      }
    );

    this.playlists = await response.data.playlists.items;
  },
  methods: {
    ...mapActions({
      // getPlaylists: "music/GET_PLAYLISTS",
    }),
  },
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
    gap: 25px;
  }

  &__grid-item {
    width: 200px;
    height: 280px;
    border-radius: 15px;
    background-color: $gray;
    transition: 0.3s ease-in-out;
    .playlist-img {
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
    transform: translateX(-2px) translateY(-2px);
    box-shadow: 3px 3px 13px $shadow;
  }
}
</style>
