import { Images } from './GifGrid';
interface Img {
  img: Images;
}

const GridItem = ({ img }: Img) => {
  return (
    <div className="card animate__animated animate__bounceIn">
      <p>{img.title}</p>
      <img src={img.url.url} alt={img.title} />
    </div>
  );
};

export default GridItem;
