import { useEffect, useState } from 'react';
import { Images } from '../components/GifGrid';
import { getGif } from '../helpers/getGifs';

interface Data {
  data: Images[];
  loading: boolean;
}

export const useFetchGifs = (categoria: string) => {
  const [state, setState] = useState<Data>({
    data: [],
    loading: true,
  });
  useEffect(() => {
    getGif(categoria).then((imgs) => {
      setState({
        data: imgs,
        loading: false,
      });
    });
  }, [categoria]);

  return state;
};
