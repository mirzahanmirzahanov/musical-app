import axios from 'axios'

export const state = () => ({
	accessToken: '',
	genres: [],
	currentTracklist: null,
	currentTrack: null

})

export const mutations = {
	SET_TOKEN(state, data) {
		state.accessToken = data.access_token;
	},
	SET_GENRES(state, genres) {
		state.genres = genres
	},
	SET_CURRENT_TRACKLIST(state, currentTracklist) {
		state.currentTracklist = currentTracklist
	},
	SET_CURRENT_TRACK(state, currentTrack) {
		state.currentTrack = currentTrack
	},
}
export const actions = {
	async GET_TOKEN({ commit }, apiKeys) {
		const result = await fetch("https://accounts.spotify.com/api/token", {
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
				Authorization:
					"Basic " +
					Buffer(apiKeys.clientID + ":" + apiKeys.clientSecret).toString("base64"),
			},
			body: "grant_type=client_credentials",
		});

		const data = await result.json();
		commit('SET_TOKEN', data)
	},

	async GET_GENRES({ commit }, accessToken) {
		const response = await this.$axios.get('/browse/categories?locale=ru_RU', {
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer " + accessToken,
			}
		})

		commit('SET_GENRES', await response.data.categories.items)
	},
	
	async GET_CURRENT_TRACKLIST({ commit, state }, id) {
		const response = await this.$axios.get(
			`/playlists/${id}/tracks`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					Authorization: "Bearer " + state.accessToken,
				},
			}
		);

		commit('SET_CURRENT_TRACKLIST', response.data.items)
	},
	// async GET_PLAYLISTS({ commit, state }, id) {
	// 	const response = await this.$axios.get(`/browse/categories/${id}/playlists?limit=8`, {
	// 		headers: {
	// 			"Content-Type": "application/json",
	// 			Authorization: "Bearer " + state.accessToken,
	// 		}
	// 	})
	// 	commit('SET_PLAYLISTS', await response.data.playlists.items)
	// }
}
export const getters = {
	ACCESS_TOKEN(state) {
		return state.accessToken
	},
	GENRES(state) {
		return state.genres
	},
	CURRENT_TRACKLIST(state) {
		return state.currentTracklist
	},
	CURRENT_TRACK(state) {
		return state.currentTrack
	},
}