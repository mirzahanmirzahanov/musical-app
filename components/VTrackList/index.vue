<template>
  <div class="tracklist-wrapper" ref="tracklist-wrapper">
    <div class="tracklist">
      <div class="tracklist__container">
        <v-track-item
          v-for="(track, index) in currentTracklist"
          :key="index"
          :track="track.track"
        />
      </div>
    </div>
  </div>
</template>


<script>
import { mapGetters } from "vuex";
import VTrackItem from "@/components/VTrackItem/index.vue";

export default {
  components: {
    VTrackItem,
  },
  name: "v-track-list",
  computed: {
    ...mapGetters({
      currentTracklist: "music/CURRENT_TRACKLIST",
    }),
  },
  props: {},
  data: () => ({}),
  mounted() {
    document.addEventListener("click", (item) => {
      if (item.target === this.$refs["tracklist-wrapper"]) {
        this.closePopup();
      }
    });
  },
  methods: {
    closePopup() {
      this.$emit("closePopup");
    },
  },
};
</script>


<style lang='scss'>
@import "@/static/scss/variables.scss";

.tracklist-wrapper {
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 20;
  .tracklist {
    width: 100%;
    max-width: 1400px;
    height: 90vh;
    margin: 50px 100px;
    z-index: 30;
    background: #202020;
    border-radius: 10px;
    &__container {
      height: 100%;
      overflow: hidden;
      overflow-y: scroll;
      padding: 30px;
    }
  }
}
</style>