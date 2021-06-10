import React, { useState } from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Display from './components/Display';

function App() {
	const [ allColors, setAllColors ] = useState([]);
	return (
		<>
			<Navbar />
			<div className="container">
				<Form onAddColor={(newColor) => setAllColors([ newColor, ...allColors ])} />
				<Display colors={allColors} />
			</div>
		</> 
	);
}

export default App;
