import axios from 'axios'

export const state = () => ({
	accessToken: '',
	genres: null,
	playlists: null

})

export const mutations = {
	SET_TOKEN(state, data) {
		state.accessToken = data.access_token;
	},
	SET_GENRES(state, genres) {
		state.genres = genres
	},
	SET_PLAYLISTS(state, playlists) {
		state.playlists = playlists
	}
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
	async GET_PLAYLISTS({ commit, state }, id) {
		const response = await this.$axios.get(`/browse/categories/${id}/playlists`, {
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer " + state.accessToken,
			}
		})
		commit('SET_PLAYLISTS', await response.data.playlists.items)
	}
}
export const getters = {
	ACCESS_TOKEN(state) {
		return state.accessToken
	},
	GENRES(state) {
		return state.genres
	},
	PLAYLISTS(state) {
		return state.playlists
	}
}