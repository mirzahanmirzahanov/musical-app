<template>
  <div class="tracklist-wrapper" ref="tracklist-wrapper">
    <div class="tracklist">
      <div class="tracklist__container">Popup</div>
    </div>
  </div>
</template>


<script>
export default {
  components: {},
  name: "v-track-list",
  computed: {},
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
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 120;
  .tracklist {
    z-index: 130;
  }
}
</style>