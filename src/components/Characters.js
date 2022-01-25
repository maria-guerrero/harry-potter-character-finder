// En este componente vamos a meter el contenido de cada <li>
const Characters = (props) => {
    // Como está todo en inglés y la página es en español, cambiamos el idioma con un condicional
    /* const getSpecies = () => {
        return props.person.species === "human" ? "Humano/a" : "No humano"
    } */

  return (
    <>
        <img
        className="imageStyles" 
        src={props.person.image} 
        alt={`Foto de ${props.person.name}`}
        title={`Foto de ${props.person.name}`}
        />
        <div className="divTitleName">
          <h1 className="nameTitle">{props.person.name}</h1>
          <p className="specieTitle">{props.person.species}</p>
        </div>
    </>
  );
};

export default Characters;
