import React, {Suspense, lazy} from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';

const Hero = lazy(() => import('../Hero'));
const Description = lazy(() => import('../Description'));
const Caracteristicas = lazy(() => import('../Caracteristicas'));
const Estilos = lazy(() => import('../Estilos'));
const Correas = lazy(() => import('../Correas'));

const Home = () => {
	return (
		<div className='home'>
			<Navbar />
			<Suspense fallback={<h3>cargando...</h3>}>
				<Hero />
				<Description />
				<Caracteristicas />
				<Estilos />
				<Correas />
			</Suspense>
			<Footer />
		</div>
	);
};

export default Home;
