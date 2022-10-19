import axios from 'axios';
import { useEffect, useState } from 'react';

function Poke() {
  const [poke, setPoke] = useState();
  const [name, setName] = useState('raikou');

  // componentDidMount -> was rendered for the first time []
  // componentDidUpdate -> value of [name] changed
  useEffect(() => {
    console.log('Loaded');
    const getPoke = async () => {
      try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        console.log('RESPONSE:', res);
        setPoke(res.data);
      } catch (err) {
        // error handling
      }
    };
    getPoke();
  }, [name]);

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <label htmlFor="pokeName">
        Name:
        <input type="text" id="pokeName" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      {poke ? (
        <>
          <h2>{poke.name}</h2>
          <img style={{ float: 'left' }} src={poke.sprites.front_shiny} alt="pokemon" />
          <section>
            <p>
              Height:
              {poke.height}
            </p>
            <p>
              Weight:
              {poke.weight}
            </p>
            <p>
              Type: 
              {`${ poke.types[0].type.name}`}
            </p>
          </section>
        </>
      )
        : <p>Loading...</p>}
    </div>
  );
}

export default Poke;