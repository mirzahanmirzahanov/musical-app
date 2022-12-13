<template>
  <div class="track-item">
    <div class="track-item__container container">
      <p class="track-item__name">Название трека</p>
      <p class="track-item__authors">Автор трека</p>
    </div>
  </div>
</template>


<script>


export default {
  components: {},
  name: "v-track-item",
  computed: {},
  props: {},
  data: () => ({}),
  methods: {},
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
