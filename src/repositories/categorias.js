import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND}/categorias?_embed=videos`;

function getAllWithVideos() {
  return fetch(URL_CATEGORIES)
    .then(async (responseServer) => {
      const response = await responseServer.json();
      return response;
    });
}

export default {
  getAllWithVideos,
};
