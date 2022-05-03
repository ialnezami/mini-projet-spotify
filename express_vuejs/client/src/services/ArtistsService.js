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
};
