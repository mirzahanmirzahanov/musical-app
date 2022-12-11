<template>
  <header class="header">
    <audio class="audio-tag" src=""></audio>
    <!-- <audio 
			class="audio-tag" 
			src="https://p.scdn.co/mp3-preview/127d8691ff65a9c521813cbfb973ac5302b7840f?cid=89fdc95d05924d9ab70a01aa35d4623b"
			controls
		>
		</audio> -->
    <div class="header__container container">
      <div class="audio-player">
        <div class="audio-player__switch-buttons">
          <div class="btn prev img-cont">
            <img
              src="@/static/imgs/switch-buttons/prev-btn.png"
              alt="prev-btn"
            />
          </div>
          <div class="btn play img-cont">
            <img
              src="@/static/imgs/switch-buttons/play-btn.png"
              alt="play-btn"
            />
          </div>
          <div class="btn next img-cont">
            <img
              src="@/static/imgs/switch-buttons/next-btn.png"
              alt="next-btn"
            />
          </div>
        </div>
        <div class="audio-player__panel">
          <div class="panel-song-info">
            <p class="song-name">Евгений Онегин</p>
            <p class="song-author">kizaru</p>
          </div>
          <div class="progress__container">
            <div class="progress"></div>
          </div>
        </div>
        <div class="audio-player__volume">
          <div class="volume-icon img-cont">
            <img
              src="@/static/imgs/volume-icon/high-sound-icon.png"
              alt="volume-icon"
            />
          </div>
          <div class="volume-container">
            <div class="volume"></div>
          </div>
        </div>
        <div class="audio-player__additional-buttons">
          <div class="btn shuffle img-cont">
            <img
              src="@/static/imgs/additional-buttons/shuffle-icon.png"
              alt="shuffle-btn"
            />
          </div>
          <div class="btn loop img-cont">
            <img
              src="@/static/imgs/additional-buttons/loop-icon.png"
              alt="loop-btn"
            />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>


<script>
export default {
  components: {},
  name: "v-header",
  computed: {},
  props: {},
  data: () => ({}),
  methods: {},
};
</script>


<style lang='scss' scoped>
@import "@/static/scss/variables.scss";

.header {
	.img-cont {
		width: 40px;
		height: 40px;
		margin: 3px;
		transition: 0.3s ease-in-out;
		border-radius: 50%;
		background-color: $pink;
		display: flex;
		justify-content: center;
		align-items: center;
		img {
			width: 32px;
			height: 32px;
			cursor: pointer;
		}
	}
	.img-cont:hover {
		background-color: $pinkDark;

	}

	&__container {
		padding: 15px;
		width: 100%;
		max-width: 1000px;
		.audio-player {
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 20px;
			background-color: #333333;
			border-radius: 10px;

			p {
				font-size: 14px;
				margin: 0 0 5px 0;
				cursor: default;
			}

			&__switch-buttons {
				margin: 0 10px;
				display: flex;
			}

			&__panel {
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				margin: 0 10px;
				.progress__container {
					border-radius: 10px;
					width: 500px;
					height: 6px;
					background-color: $gray;
					cursor: pointer;

					.progress {
						border-radius: 10px;
						width: 80px;
						height: 6px;
						background-color: $pink;
					}
				}
			}

			&__volume {
				margin: 0 10px;
				display: flex;
				.img-cont:hover {
					background-color: $pink;
				}
				.volume-container {
					background-color: $gray;
					margin: auto 0 auto 5px;
					border-radius: 10px;
					width: 100px;
					height: 6px;
					cursor: pointer;

					.volume {
						border-radius: 10px;
						width: 20px;
						height: 6px;
						background-color: $pink;
					}
				}
			}

			&__additional-buttons {
				margin: 0 10px;
				display: flex;
			}
		}
	}
}

</style>