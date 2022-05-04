import api from "@/services/ArtistsService";
export default {
  state: {
    artists: [],
    artist: {},
    artistAlbums: [],
    artistTopTracks: [],
    albumsTracks: [],
    artistRelatedArtists: [],
    artistEvents: [],
    lastSearch: [],
    history: [],
  },
  getters: {
    getArtists(state) {
      return state.artists;
    },
    getArtist(state) {
      return state.artist;
    },
    getAlbumsTracks(state) {
      return state.albumsTracks;
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
    getHistory(state) {
      return state.history;
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
    setAlbumTracks(state, albumsTracks) {
      state.albumsTracks = albumsTracks;
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
    setLastSearch(state, artist) {
      state.lastSearch = artist;
    },
    setHistory(state, artist) {
      state.history = artist;
    },
  },
  actions: {
    async getArtistsSearch({ commit }, search) {
      try {
        if (search.length > 0) {
          const response = await api.getArtistsSearch(search);
          commit("setArtists", response.data.artists.items);
        } else {
          commit("setArtists", []);
        }
      } catch (err) {
        console.error(
          "[ERROR][API FAILED] fail to get artistes search / " + err
        );
      }
    },
    addArtistConsulted({ commit }, id) {
      //save last 5 artists consulted in history
      // get history
      let history = this.getters.getHistory;
      const listArtists = this.getters.getArtists;
      const artist = listArtists.find((artist) => artist.id === id);
      commit("setArtist", artist);
      // check if artist is in history
      const index = history.findIndex((item) => item.id === id);
      console.log(index);
      console.log(" 1 history" + history);
      if (index === -1) {
        // add artist to history
        history = [artist, ...history];
        // remove first item if history is bigger than 5
        if (history.length > 5) {
          // delete last item
          history.pop();
        }
        console.log("2 history", history);
        // save history
        commit("setHistory", history);
      }
      console.log("3 history", history);
    },
    async getArtistAlbums({ commit }, id) {
      try {
        const response = await api.getArtistAlbums(id);
        commit("setArtistAlbums", response.data.items);
        commit("setArtist", { id: id });
      } catch (err) {
        console.error("[ERROR][API FAILED] fail to get artist albums / " + err);
      }
    },
    async getAlbumsTracks({ commit }, id) {
      try {
        const response = await api.getAlbumsTracks(id);
        commit("setAlbumTracks", response.data.items);
      } catch (err) {
        console.error("[ERROR][API FAILED] fail to get album tracks / " + err);
      }
    },
  },
};
