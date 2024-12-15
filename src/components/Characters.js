import { useState } from "react";

// Definición del componente Characters
export default function Characters(props) {

    // Podremos usar 'characters' y 'setCharacters' gracias a que los pasamos como props
    const { characters, setCharacters } = props;

    // Función para resetear el estado de 'characters' a null
    const resetCharacters = () => {
        setCharacters(null);
    }

    // Estados para búsqueda y filtros
    const [searchTerm, setSearchTerm] = useState(''); // Almacena el término final para la búsqueda
    const [statusFilter, setStatusFilter] = useState(''); // Almacena el filtro de estado
    const [speciesFilter, setSpeciesFilter] = useState(''); // Almacena el filtro de especie
  
   // Filtrado personajes por nombre, estado y especie
    const filteredCharacters = characters.filter((character) => {
        
        const matchesSearchTerm = searchTerm ? character.name.toLowerCase().includes(searchTerm.toLowerCase()) : true;
        const matchesStatusFilter = statusFilter ? character.status.toLowerCase() === statusFilter : true;
        const matchesSpeciesFilter = speciesFilter ? character.species.toLowerCase() === speciesFilter : true;

        return matchesSearchTerm && matchesStatusFilter && matchesSpeciesFilter;
   });
   
    return (
        <div className='characters'>
            <h1>Personajes</h1>

            {/* Botón para volver a la pantalla principal */}
            <span className='back-home' onClick={resetCharacters}>HOME</span>

            <div class="filter-container">
                 {/* Barra buscadora */}
                <input 
                    type="text" 
                    className="search-bar" 
                    placeholder="Buscar por nombre..." 
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)}
                /> 

                 {/* Selección filtrado avanzado */}
                <div className="filter-advanced">
                    <select onChange={(e) => setStatusFilter(e.target.value)}>
                        <option value="">Estado</option>
                        <option value="alive">Vivo</option>
                        <option value="dead">Muerto</option>
                        <option value="unknown">Desconocio</option>
                    </select>
                    <select onChange={(e) => setSpeciesFilter(e.target.value)}>
                        <option value="">Especie</option>
                        <option value="human">Humano</option>
                        <option value="alien">Alien</option>
                        <option value="robot">Robot</option>
                    </select>
                </div>
            </div>

            {/* Contenedor de personajes */}
            <div className="container-characters">
                {/* Mapeo de los personajes para mostrarlos en pantalla */}
                {filteredCharacters.map((character, index) => (
                    <div className='character-container' key={index}>
                        <div> 
                            {/* Imagen del personaje */}
                            <img src={character.image} alt={character.name} />
                        </div>
                        <div>
                            {/* Nombre del personaje */}
                            <h3>{character.name}</h3>
                            {/* Estado del personaje (vivo o muerto) */}
                            <h6>{character.status === "Alive" ? (
                                <>
                                <span className="alive" />
                                Alive
                                </>
                            ) : (
                                <>
                                <span className="dead"/>
                                Dead
                                </>
                            )}
                            </h6>
                            {/* Número de episodios en los que aparece el personaje */}
                            <p>
                                <span className="text-grey">Episodios: </span>
                                <span>{character.episode.length}</span>
                            </p>
                            {/* Especie del personaje */}
                            <p>
                                <span className="text-grey">Especie: </span>
                                <span>{character.species}</span>
                            </p>
                        </div>                       
                    </div>
                ))}
            </div>
            {/* Botón para volver a la pantalla principal */}
            <span className="back-home" onClick={resetCharacters}>HOME</span>
        </div>
    );
}