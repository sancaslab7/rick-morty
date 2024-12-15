// Definición del componente Characters
export default function Characters(props) {

    // Podremos usar 'characters' y 'setCharacters' gracias a que los pasamos como props
    const { characters, setCharacters } = props;

    // Función para resetear el estado de 'characters' a null
    const resetCharacters = () => {
        setCharacters(null);
    }

    return (
        <div className='characters'>
            <h1>Personajes</h1>
            {/* Botón para volver a la pantalla principal */}
            <span className='back-home' onClick={resetCharacters}>HOME</span>
            <div className="container-characters">
                {/* Mapeo de los personajes para mostrarlos en pantalla */}
                {characters.map((character, index) => (
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