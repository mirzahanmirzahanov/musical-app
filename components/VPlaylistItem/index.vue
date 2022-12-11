<template>
  <div class="playlists__grid-item" @click="getCurrentPlaylist(playlist.id)">
    <div v-if="this.playlist !== null" class="playlists__grid-item">
      <div class="playlist-img">
        <img :src="this.playlist.images[0].url" alt="playlist-img" />
      </div>
      <div class="playlist-info">
        <p class="playlist-info__name">{{ playlist.name }}</p>
      </div>
    </div>
    <p v-else>:(</p>
  </div>
</template>


<script>
import { mapActions } from "vuex";

export default {
  components: {},
  name: "v-playlist-item",
  computed: {},
  props: {
    playlist: {
      type: Object,
      default: null,
    },
  },
  data: () => ({}),
  methods: {
    ...mapActions({
      getCurrentPlaylist: "music/GET_CURRENT_PLAYLIST",
    }),
  },
};
</script>
