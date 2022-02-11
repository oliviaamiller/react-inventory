import { useState, useEffect } from 'react';
import { getBirds } from '../services/fetch-utils';
import Bird from './Bird';
import './Birds.css';

export default function BirdList() {
  const [birds, setBirds] = useState([]);

  useEffect(() => {
    async function fetch() {
      const allBirds = await getBirds();

      setBirds(allBirds);
    }
    fetch();
  }, []);

  console.log(birds);

  return (
    <div className='birds-list'>
      {birds.map((bird, i) =>
        <Bird key={`${bird}-${i}`} bird={bird} />)}
    </div>
  );
}
