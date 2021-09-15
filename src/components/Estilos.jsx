import React, {useEffect} from 'react';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

const Estilos = () => {
	useEffect(() => {
		const tl = gsap.timeline({
			defaults: {ease: 'power2.out', opacity: 0, duration: 2},
			scrollTrigger: {trigger: '.estilos', start: 'top center', toggleActions: 'restart reverse restart reverse'},
		});

		tl.from('.style-one', {y: 40})
			.from('.style-two', {y: 40}, '-=1.5')
			.from('.style-three', {y: 40}, '-=1.5')
			.from('.style-four', {y: 40}, '-=1.5')
			.from('.style-five', {y: 40}, '-=1.5')
			.from('.style-six', {y: 40}, '-=1.5');
	}, []);

	return (
		<section id='estilos' className='estilos'>
			<div className='estilos__container'>
				<div className='estilos__text'>
					<h2 className='estilos__title style-five'>Elige tu estilo</h2>
					<p className='estilos__paragraph style-six'>
						Hay muchas carátulas que puedes personalizar según tu estado de ánimo, tu estilo o tus actividades
						favoritas. Encuentra la tuya y hazla realmente tuya.
					</p>
				</div>
				<div className='estilos__images'>
					<img src='./img/estilo01.png' alt='estilo watch' className='estilos__img-one style-one' />
					<img src='./img/estilo02.png' alt='estilo watch' className='estilos__img-two style-two' />
					<img src='./img/estilo03.png' alt='estilo watch' className='estilos__img-three style-three' />
					<img src='./img/estilo04.png' alt='estilo watch' className='estilos__img-four style-four' />
				</div>
			</div>
		</section>
	);
};

export default Estilos;
