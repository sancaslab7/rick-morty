// Importación de hojas de estilo y otros componentes necesarios
import './App.css';
import imageRickMorty from './img/rick-morty.png'
import { useState } from 'react';
import Characters from './components/Characters';

function App() {
  // Definición del estado 'characters' y su función para actualizarlo 'setCharacters'
  const [characters, setCharacters] = useState(null);

  // Función asíncrona para realizar peticiones a la API de Rick & Morty
  const reqApi = async () => {
    // Realiza una petición a la API
    const api = await fetch('https://rickandmortyapi.com/api/character')

    // Convierte la respuesta de la API a formato JSON
    const characterApi = await api.json(); 

    // Actualiza el estado 'characters' con los resultados de la API
    setCharacters(characterApi.results);
  }; 

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Rick & Morty</h1>
        {characters ? (
          // Si hay personajes en el estado, renderiza el componente Characters
          <Characters characters={characters} setCharacters={setCharacters}/>
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