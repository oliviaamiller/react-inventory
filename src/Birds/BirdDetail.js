import { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { getBird } from '../services/fetch-utils';
import './Birds.css';

export default function DetailPage() {
  const [bird, setBird] = useState({});
  let match = useRouteMatch('/birds/:id');

  useEffect(() => {
    async function fetch() {
      const thisBird = await getBird(match.params.id);

      setBird(thisBird);
    }
    fetch();
  }, [match.params.id]);

  return (
    <div className='bird-detail'>
      <p>{bird.name}</p>
      <p>{bird.species}</p>
      <p>seen: {bird.date}</p>
      <p>location: {bird.location}</p>
      <p>notes: {bird.notes}</p>
    </div>
  );
}
