// Importación de hojas de estilo y otros componentes necesarios
import './App.css';
import imageRickMorty from './img/rick-morty.png'
import { useState } from 'react';
import { useEffect } from 'react';
import Characters from './components/Characters';

function App() {
  // Definición del estado 'characters' y su función para actualizarlo 'setCharacters'
  const [characters, setCharacters] = useState(null);
  // Definición del estado 'favorites' y su función para actualizarlo 'setFavorites'
  const [favorites, setFavorites] = useState([]);

  // Función asíncrona para realizar peticiones a la API de Rick & Morty
  const reqApi = async () => {
    // Realiza una petición a la API
    const api = await fetch('https://rickandmortyapi.com/api/character')

    // Convierte la respuesta de la API a formato JSON
    const characterApi = await api.json(); 

    // Actualiza el estado 'characters' con los resultados de la API
    setCharacters(characterApi.results);
  }; 

  // Cargar favoritos desde localStorage al montar el componente
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

   // Guardar favoritos en localStorage cuando cambien
   useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  /*revisar*/
  const toggleFavorite = (character) => {
    if (favorites.some((fav) => fav.id === character.id)) {
      // Si ya es favorito, eliminarlo
      setFavorites(favorites.filter((fav) => fav.id !== character.id));
    } else {
      // Si no es favorito, agregarlo
      setFavorites([...favorites, character]);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Rick & Morty</h1>
        {characters ? (
          // Si hay personajes en el estado, renderiza el componente Characters
          <Characters 
            characters={characters}  
            setCharacters={setCharacters} 
            toggleFavorite={toggleFavorite} 
            favorites={favorites}/>
        ) : (
        <>
          {/* Si no hay personajes, muestra una imagen y un botón para buscar personajes */}
          <img src={imageRickMorty} className="img-home" alt="Rick & Morty" />
          <button onClick={reqApi} className='btn-search'>Buscar personajes</button>
        </>
        )}
      </header>
    </div>
  );
}

export default App;