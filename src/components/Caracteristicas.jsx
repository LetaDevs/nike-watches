import React, {useEffect} from 'react';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

const Caracteristicas = () => {
	useEffect(() => {
		const tl = gsap.timeline({
			defaults: {opacity: 0, duration: 2, ease: 'power4.out'},
			scrollTrigger: {
				trigger: '.caracteristicas',
				start: 'top center',
				toggleActions: 'restart reverse restart reverse',
			},
		});

		tl.from('.one', {y: -20}).from('.two', {y: 20}, '-=1.5').from('.three', {y: -20}, '-=1.5');
	}, []);

	return (
		<section id='caracteristicas' className='caracteristicas'>
			<div className='caracteristicas__container'>
				<div className='caracteristicas__card one'>
					<img src='./img/1.png' alt='caracteristica nike watch' />
					<h3 className='caracteristicas__card-title'>Antes de correr</h3>
					<p className='caracteristicas__card-paragraph'>
						Empieza una carrera desde cualquier carátula Nike. Registra tu progreso y conviértete en tu propio
						entrenador para motivarte a cumplir tu meta de kilómetros mensuales.
					</p>
				</div>
				<div className='caracteristicas__card two'>
					<img src='./img/2.png' alt='caracteristica nike watch' />
					<h3 className='caracteristicas__card-title'>Mientras corres</h3>
					<p className='caracteristicas__card-paragraph'>
						Monitorea tu progreso fácilmente con datos como cadencia, ritmo promedio y distancia total. Y si vas a
						correr de noche, activa el modo Crepúsculo de Nike para mejorar la visibilidad.
					</p>
				</div>
				<div className='caracteristicas__card three'>
					<img src='./img/3.png' alt='caracteristica nike watch' />
					<h3 className='caracteristicas__card-title'>Después de correr</h3>
					<p className='caracteristicas__card-paragraph'>
						Siéntete orgulloso de tus resultados cuando cumplas tus objetivos semanales con los íconos de rachas. Y
						analiza tu carrera en detalle con la complicación de gráficos.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Caracteristicas;
