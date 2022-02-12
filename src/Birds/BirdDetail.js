import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getBird, deleteBird } from '../services/fetch-utils';
import './Birds.css';

export default function DetailPage() {
  const [bird, setBird] = useState({});
  const { id } = useParams();
  const history = useHistory();

  async function handleDelete() {
    await deleteBird(id);

    history.push('/birds');
  }

  useEffect(() => {
    async function fetch() {
      const thisBird = await getBird(id);

      setBird(thisBird);
    }
    fetch();
  }, [id]);

  return (
    <div className='bird-detail'>
      <img className='bird-detail-img' src={bird.image}/>
      <p className='name'>{bird.name}</p>
      <p className='species'>{bird.species}</p>
      <div className='bird-data'>
        <p>seen: {bird.date}</p>
        <p>location: {bird.location}</p>
        <p>notes: {bird.notes}</p>
      </div>
      <div>
        <button onClick={handleDelete}>delete bird</button>
        <button onClick={() => history.push(`/birds/${bird.id}/update`)} >update bird</button>
      </div>

      <footer>
        <img className='bird-img' src={'../images/owls.png'} />
      </footer>
      
    </div>
  );
}
