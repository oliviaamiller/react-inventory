import { useState, useEffect } from 'react';
import { getBird, updateBird } from '../services/fetch-utils';
import { useParams, useHistory } from 'react-router-dom';

export default function UpdateBird() {
  const [formName, setFormName] = useState('');
  const [formSpecies, setFormSpecies] = useState('');
  const [formDate, setFormDate] = useState('');
  const [formLocation, setFormLocation] = useState('');
  const [formNotes, setFormNotes] = useState('');
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    async function fetch() {
      const bird = await getBird(id);

      setFormName(bird.name);
      setFormSpecies(bird.species);
      setFormDate(bird.date);
      setFormLocation(bird.location);
      setFormNotes(bird.notes);
    }
    fetch();
  }, [id]);

  async function handleUpdate(e) {
    e.preventDefault();

    await updateBird(id, {
      name: formName,
      species: formSpecies,
      date: formDate,
      location: formLocation,
      notes: formNotes
    });

    history.push('/birds');
  }


  return (
    <div className='bird-form'>
      <form onSubmit={handleUpdate}>
        <input 
          value={formName}
          onChange={(e) => setFormName(e.target.value)}/>
        <input 
          value={formSpecies}
          onChange={(e) => setFormSpecies(e.target.value)}/>
        <input 
          value={formDate}
          onChange={(e) => setFormDate(e.target.value)}/>
        <input 
          value={formLocation}
          onChange={(e) => setFormLocation(e.target.value)}/>
        <textarea 
          value={formNotes}
          onChange={(e) => setFormNotes(e.target.value)}/>
        <button>Update Bird</button>
      </form>

    </div>
  );
}
