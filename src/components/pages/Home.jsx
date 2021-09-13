import React from 'react';
import Caracteristicas from '../Caracteristicas';
import Description from '../Description';
import Estilos from '../Estilos';
import Hero from '../Hero';
import Navbar from '../Navbar';

const Home = () => {
	return (
		<div className='home'>
			<Navbar />
			<Hero />
			<Description />
			<Caracteristicas />
			<Estilos />
		</div>
	);
};

export default Home;
