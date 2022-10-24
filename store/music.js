import axios from 'axios'

export const state = () => ({
	accessToken: '',
	genres: null,

})

export const mutations = {
	SET_TOKEN(state, data) {
		state.accessToken = data.access_token;
	},
	SET_GENRES(state, genres) {
		state.genres = genres
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
		const response = await this.$axios.get('/browse/categories?locale=sv_SE', {
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer " + accessToken,
			}
		})
		commit('SET_GENRES', await response.data.categories.items)
	}
}
export const getters = {
	GENRES(state) {
		return state.genres
	},
	ACCESS_TOKEN(state) {
		return state.accessToken
	}
}