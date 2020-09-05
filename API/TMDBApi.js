const API_TOKEN = "3c2b30c6bdbf696fb07dac09c811b6bc";

export function getFilmsFromApiWithSearchedText(text) {
  const url =
    "https://api.themoviedb.org/3/movie/550?api_key=" +
    API_TOKEN +
    "&language=fr&query=" +
    text;
  return fetch(url)
    .then((Response) => Response.json())
    .catch((Error) => console.log(Error));
}
