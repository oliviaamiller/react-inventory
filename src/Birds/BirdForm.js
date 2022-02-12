import './Birds.css';

export default function BirdForm({
  submitBird,
  name, 
  setName, 
  species,
  setSpecies,
  date,
  setDate,
  location,
  setLocation,
  notes, 
  setNotes,
  image,
  setImage
}) {
  return (
    <div className='bird-form'>
      <form onSubmit={submitBird}>
        <input 
          placeholder='name'
          required value={name}
          onChange={(e) => setName(e.target.value)}/>
        <input 
          placeholder='species'
          required value={species}
          onChange={(e) => setSpecies(e.target.value)}/>
        <input 
          placeholder='date seen'
          required value={date}
          onChange={(e) => setDate(e.target.value)}/>
        <input 
          placeholder='location seen'
          required value={location}
          onChange={(e) => setLocation(e.target.value)}/>
        <input
          placeholder='image url'
          value={image}
          onChange={(e) => setImage(e.target.value)}/>
        <textarea 
          placeholder='notes'
          required value={notes}
          onChange={(e) => setNotes(e.target.value)}/>
        <button>Add Bird</button>
      </form>

      <footer>
        <img src={'../images/feeding.png'} />
      </footer>

    </div>
  );
}
