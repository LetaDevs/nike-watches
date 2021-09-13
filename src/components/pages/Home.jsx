import React from 'react';
import Caracteristicas from '../Caracteristicas';
import Correas from '../Correas';
import Description from '../Description';
import Estilos from '../Estilos';
import Footer from '../Footer';
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
			<Correas />
			<Footer />
		</div>
	);
};

export default Home;
