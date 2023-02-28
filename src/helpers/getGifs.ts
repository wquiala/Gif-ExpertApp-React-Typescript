import { Gifs } from '../interfaces/gif';

export const getGif = async (categoria: string) => {
  const url = `http://api.giphy.com/v1/gifs/search?q=${encodeURI(
    categoria,
  )}&limit=10&api_key=ZVvjZolCa0EEnRZfNENg8UTYdXhexEA0`;
  const resp = await fetch(url);
  const datas: Gifs = await resp.json();
  const { data } = datas;
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium,
    };
  });
  return gifs;
};
