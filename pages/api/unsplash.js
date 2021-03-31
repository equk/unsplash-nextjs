const API_CLIENTID = process.env.NEXT_PUBLIC_API_CLIENTID;
const API_URL = `https://api.unsplash.com/search/photos?page=1&per_page=20&client_id=${API_CLIENTID}`;

export default {
  search(imageSearch) {
    const url = `${API_URL}&query=${imageSearch}`;
    return fetch(url)
      .then((response) => response.json())
      .then((result) => result.results);
  },
};
