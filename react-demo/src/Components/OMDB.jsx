import axios from 'axios';
import {useState} from 'react';
import Film from './Props/Film';

const key = '335035be';

function OMDB () {

    const [title, setTitle] = useState('');
    const [films, setFilms] = useState([]);

    const getFilms = async () => {
        const res = await axios.get(`http://www.omdbapi.com/?apikey=${key}&s=${title}`);
        console.log('res: ', res);
        setFilms(res.data.Search);
    };

    return(
        <label style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            
            <input id="movieTitle" type="test" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <button type="button" onClick={getFilms}>Search Movie</button>
            {
                films.map((film) => (
                    <Film
                    key={film.imdbID}
                    title={film.Title}
                    year={film.Year}
                    poster={film.Poster}
                    />
                ))
            }
        </label>
        
    );
}
export default OMDB;