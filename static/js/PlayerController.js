export const PlayerComponents = (audio, play, pause) => {

	const audioTag = document.querySelector(audio),
		playBtn = document.querySelector(play),
		pauseBtn = document.querySelector(pause);

	DataPlayer.audio = audioTag;
	DataPlayer.playBtn = playBtn;
	DataPlayer.pauseBtn = pauseBtn;

}

export const DataPlayer = {
	audio: null,
	playBtn: null,
	pauseBtn: null,
	track: null,
	playSong: () => {
		DataPlayer.pauseBtn.style.display = "block";
		DataPlayer.playBtn.style.display = "none";
		DataPlayer.audio.play();
		console.log('play');
	},
	pauseSong: () => {
		DataPlayer.pauseBtn.style.display = "none";
		DataPlayer.playBtn.style.display = "block";
		DataPlayer.audio.pause();
		console.log('pause');
	},
	prevSong: async (currentTrack, currentTracklist) => {
		for (let el = 0; el < currentTracklist.length; el++) {
			if (currentTracklist[el].track.id === currentTrack.id) {
				console.log('prev');
				return DataPlayer.track = currentTracklist[--el].track
			}
		}

	},
	nextSong: (currentTrack, currentTracklist) => {
		for (let el = 0; el < currentTracklist.length; el++) {
			if (currentTracklist[el].track.id === currentTrack.id) {
				console.log('next');
				return DataPlayer.track = currentTracklist[++el].track
			}
		}
	}
}