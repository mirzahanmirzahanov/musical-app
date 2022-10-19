import axios from 'axios'

export const state = () => ({
	accessToken: '',
	genres: null,

})

export const mutations = {
	SET_TOKEN(state, data) {
		state.accessToken = data.access_token;
		// state.accessToken = ;
	},
	SET_GENRES(state, data) {
		state.genres = data
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
		const result = await fetch(
			"https://api.spotify.com/v1/browse/categories?locale=sv_SE",
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					Authorization: "Bearer " + accessToken,
				},
			}
		);

		const data = await result.json();
		console.log(data);
		commit('SET_GENRES', data)
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