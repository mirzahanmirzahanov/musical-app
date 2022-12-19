<template>
  <div class="track-item" @click="setTrack(track)">
    <div class="track-item__container container">
      <p class="track-item__name">{{ track?.name }}</p>
      <p class="track-item__authors">Автор трека</p>
    </div>
  </div>
</template>


<script>
import { mapMutations } from "vuex";

export default {
  components: {},
  name: "v-track-item",
  computed: {},
  props: {
    track: {
      type: Object,
      default: {},
    },
  },
  data: () => ({}),
  methods: {
    ...mapMutations({
      setTrack: "music/SET_CURRENT_TRACK",
    }),
  },
};
</script>


<style lang='scss' scoped>
@import "@/static/scss/variables.scss";

.track-item {
  background: $gray;
  border-radius: 10px;
  &__container {
    padding: 15px;
    margin: 0 0 10px;
  }

  &__name {
    padding: 0 0 5px;
  }
  &__authors {
    font-size: 12px;
    color: $subTitleTextColor;
  }
}
</style>
