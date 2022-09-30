import React from "react";

const Character = ({ character1 }) => {
	return (
		<div className='text-center p-5'>
			<h3>{character1.name}</h3>
			<img
				className='img-fluid rounded-pill'
				src={character1.image}
				alt={character1.name}
			/>
			<p>{character1.origin.name}</p>
		</div>
	);
};

//ahora que tenemos la aplicacion separada en partes podemos darle estilos de mejor manera.

//Recuerda ponerle un id al div ya que es un diferenciador de iteracion, o tambien el que debe tener el ID: no es el componente mismo sino el donde lo estan utilizando.

export default Character;
