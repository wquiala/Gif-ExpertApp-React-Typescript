import { useEffect, useState } from 'react';
import { getGif } from '../helpers/getGifs';
import { Gifs, The480_WStill } from '../interfaces/gif';
import GridItem from './GridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
interface Cat {
  categoria: string;
}

export interface Images {
  id: string;
  title: string;
  url: The480_WStill;
}

const GifGrid = ({ categoria }: Cat) => {
  //const [images, setImages] = useState<Images[]>([]);
  const { loading, data: images } = useFetchGifs(categoria);
  /* useEffect(() => {
    getGif(categoria).then((imgs) => setImages(imgs));
  }, [categoria]);

  const getGifs = getGif(categoria);
 */
  return (
    <>
      <h3>{categoria}</h3>
      {loading && <p className="animate__animated animate__flash">Loading</p>}

      <div className="card-grid">
        {images.map((img) => (
          <GridItem key={img.id} img={img} />
        ))}
        {/* <ol>
          {images.map((img) => {
            return (
              <li key={img.id}>
                {img.title}
                {img.url.url}
              </li>
            );
          })}
        </ol>  */}
      </div>
    </>
  );
};

export default GifGrid;
