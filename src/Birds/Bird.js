import './Birds.css';
import { Link } from 'react-router-dom';

export default function Bird({ bird }) {
  return (
    <Link to={`/birds/${bird.id}`}>
      <div className='bird'>
        <img src={bird.image}/>
        <div className='card-data'>
          <p className='name'>{bird.name}</p>
          <p className='species'>{bird.species}</p>
        </div>
      </div>
    </Link>
  );
}
