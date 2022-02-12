import './Birds.css';
import { Link } from 'react-router-dom';

export default function Bird({ bird }) {
  return (
    <Link to={`/birds/${bird.id}`}>
      <div className='bird'>
        <img src={bird.image}/>
        <p className='name'>{bird.name}</p>
        <p className='species'>{bird.species}</p>
      </div>
    </Link>
  );
}
