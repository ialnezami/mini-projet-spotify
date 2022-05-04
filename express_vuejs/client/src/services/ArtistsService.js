import service from "./index.js";

export default {
  async getArtistsSearch(search) {
    console.debug("[INFO][API CALL] get artistes search");
    try {
      const response = await service.get(
        "/search?type=artist&limit=10&q=" + search
      );

      console.info(
        "[INFO][API SUCCESS] artistes search, response status: " +
          response.status
      );

      return response;
    } catch (err) {
      console.error("[ERROR][API FAILED] fail to get artistes search / " + err);
    }
  },
  async getArtistAlbums(artistId) {
    console.debug("[INFO][API CALL] get artist albums");
    try {
      const response = await service.get("/artists/" + artistId + "/albums");

      console.info(
        "[INFO][API SUCCESS] artist albums, response status: " + response.status
      );

      return response;
    } catch (err) {
      console.error("[ERROR][API FAILED] fail to get artist albums / " + err);
    }
  },
  async getAlbumsTracks(albumId) {
    console.debug("[INFO][API CALL] get album tracks");
    try {
      const response = await service.get("/albums/" + albumId + "/tracks");

      console.info(
        "[INFO][API SUCCESS] album tracks, response status: " + response.status
      );

      return response;
    } catch (err) {
      console.error("[ERROR][API FAILED] fail to get album tracks / " + err);
    }
  },
};
