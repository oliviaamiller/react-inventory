import { useState } from 'react';
import { createBird } from '../services/fetch-utils';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import BirdForm from './BirdForm';
import './Birds.css';


export default function CreatePage() {
  const [name, setName] = useState('');
  const [species, setSpecies] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [notes, setNotes] = useState('');
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    await createBird({
      name, 
      species,
      date,
      location,
      notes
    });

    history.push('./birds');
  }

  return (
    <div className='create-bird'>
      <BirdForm
        submitBird={handleSubmit}
        name={name}
        setName={setName}
        species={species}
        setSpecies={setSpecies}
        date={date}
        setDate={setDate}
        location={location}
        setLocation={setLocation}
        notes={notes}
        setNotes={setNotes} />
    </div>
  );
}
