import api from "@/services/ArtistsService";

export default {
  state: {
    artists: [],
    artist: {},
    artistAlbums: [],
    artistTopTracks: [],
    artistRelatedArtists: [],
    artistEvents: [],
    lastSearch: [],
  },
  getters: {
    getArtists(state) {
      return state.artists;
    },
    getArtist(state) {
      return state.artist;
    },
    getArtistAlbums(state) {
      return state.artistAlbums;
    },
    getArtistTopTracks(state) {
      return state.artistTopTracks;
    },
    getArtistRelatedArtists(state) {
      return state.artistRelatedArtists;
    },
    getArtistEvents(state) {
      return state.artistEvents;
    },
    getLastSearch(state) {
      return state.lastSearch;
    },
  },
  mutations: {
    setArtists(state, artists) {
      state.artists = artists;
    },
    setArtist(state, artist) {
      state.artist = artist;
    },
    setArtistAlbums(state, artistAlbums) {
      state.artistAlbums = artistAlbums;
    },
    setArtistTopTracks(state, artistTopTracks) {
      state.artistTopTracks = artistTopTracks;
    },
    setArtistRelatedArtists(state, artistRelatedArtists) {
      state.artistRelatedArtists = artistRelatedArtists;
    },
    setArtistEvents(state, artistEvents) {
      state.artistEvents = artistEvents;
    },
    setLastSearch(state, lastSearch) {
      state.lastSearch = lastSearch;
    },
  },
  actions: {
    async getArtistsSearch({ commit }, search) {
      try {
        const response = await api.getartistsSearch(search);
        commit("setArtists", response.data.artists.items);
        commit("setLastSearch", search);
      } catch (err) {
        console.error(
          "[ERROR][API FAILED] fail to get artistes search / " + err
        );
      }
    },
  },
};
