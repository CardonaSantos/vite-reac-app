import React, { useEffect, useState } from "react";

import CharacterList from "./components/CharacterList";

function App() {
	return (
		<div className=' bg-dark text-white'>
			<div className=' bg-dark text-white'>
				<h1 className='text-center display-1 py-4'>Rick y Morty</h1>
				<CharacterList />
			</div>
		</div>
	);
}
export default App;

//creamos una funcion que nos permita usar async await, pero no esta llamada hay que hacerlo
//para poder usar info del backemd tenemos que guardarlo en un useState.
