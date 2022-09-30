import React, { useEffect, useState } from "react";
import Character from "./Character";

function NavPage(props) {
	return (
		<header className='d-flex justify-content-between  align-items-center'>
			<p>Page: {props.page}</p>
			<button
				className='btn btn-primary btn-sm'
				onClick={() => props.SetPage(props.page + 1)}
			>
				Page: {props.page + 1}
			</button>
		</header>
	);
}

const CharacterList = () => {
	const [loading, SetLoading] = useState(true);
	const [page, SetPage] = useState(1);

	const [character, SetCharacter] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const response = await fetch(
				`https://rickandmortyapi.com/api/character?page=${page}`
			);
			const data = await response.json();
			SetLoading(false);
			SetCharacter(data.results); //ahora character tiene el arreglo de 20 y por ende la interfaz puede acceder a el
		}
		fetchData();
	}, [page]);

	//inicialmente el user tiene la page en uno, cuando esta carga el utiliza el uno para solicitar datos, por eso lo carga dentro del characters, pero cuando de click en el navpage btn, este btn va a cambiar el setpage a 2. El valor de page cambia a 2 entonces como el use Effect esta pendiente de ese valor, si cambia, se va a volver a ejecutar usando fetch pero buscando la pagina con el numero dos, ya que se lo estaremos aumentando.

	//HACEMOS LA PETICION DONDE SE SUPONE VAMOS A USAR LOS DATOS. AUNQUE TAMBIEN PODEMOS PARARLOS EN FORMA DE PROPS: <CharacterList characters={character} pero usamos la primera version como no vamos a usar siempre los datos en app entonces usamos fetch directamente aqui />
	return (
		<div id='contenedor' className='container'>
			<NavPage page={page} SetPage={SetPage} />

			{loading ? (
				<h1>Loading...</h1>
			) : (
				<div className='row'>
					{character.map((character1) => {
						return (
							//le ponemos clave unica a cada id que se va creando.
							<div className='col-md-4' key={character1.id}>
								<Character character character1={character1} />
							</div>
						);
					})}
				</div>
			)}
			<NavPage page={page} SetPage={SetPage} />
		</div>
	);
};

export default CharacterList;
