<template>
  <div>
    <v-track-list
      v-if="isTracklistVisible === true"
      @closePopup="closeTracklist"
    />
  <div class="playlists__grid-item" @click="getTracklist">
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
  </div>
</template>


<script>
import { mapActions } from "vuex";
import VTrackList from "@/components/VTrackList/index";

export default {
  components: { VTrackList },
  name: "v-playlist-item",
  computed: {},
  props: {
    playlist: {
      type: Object,
      default: null,
    },
  },
  data: () => ({
    isTracklistVisible: false
  }),
  methods: {
    ...mapActions({
      getCurrentTracklist: "music/GET_CURRENT_TRACKLIST",
    }),
    getTracklist() {
      this.getCurrentTracklist(this.playlist.id)
      this.isTracklistVisible = true
    },
    closeTracklist() {
      this.isTracklistVisible = false
    }
  },
};
</script>
