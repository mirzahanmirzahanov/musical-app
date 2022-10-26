<template>
  <div class="playlists__grid-item" @click="getPlaylists(genre)">
    <div class="playlists__grid-item">
      <div class="playlist-img">
        <img
          :src="playlist.images[0].url"
          alt="playlist-img"
        />
      </div>
      <div class="playlist-info">
        <p class="playlist-info__name">{{ playlist.name }}</p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  components: {},
  name: "v-playlist-item",
  computed: {},
  props: {
    playlist: {
      type: Object,
      // required: true,
      default: {},
    },
  },
  data: () => ({}),
  methods: {},
};
</script>
