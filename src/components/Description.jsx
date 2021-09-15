import React, {useEffect} from 'react';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

const Description = () => {
	useEffect(() => {
		const tl = gsap.timeline({
			defaults: {opacity: 0, ease: 'sine.out'},
			scrollTrigger: {
				trigger: '.description',
				start: 'top center',
				toggleActions: 'restart reverse restart reverse',
			},
		});

		tl.from('.blue', {y: 40, duration: 2})
			.from(
				'.black',
				{
					y: 40,
					duration: 2,
				},
				'-=1.5'
			)
			.from('.title', {y: -20, duration: 1}, '-=1.5')
			.from('.paragraph', {y: -20, duration: 1}, '-=1');
	}, []);
	return (
		<section id='descripcion' className='description'>
			<div className='description__container'>
				<div className='description__section-one'>
					<div className='description__img description__img--blue blue'>
						<img src='./img/completo1.png' alt='nike watch' />
					</div>
					<div className='description__img description__img--black black'>
						<img src='./img/completo2.png' alt='nike watch' />
					</div>
				</div>
				<div className='description__section-two'>
					<h2 className='description__title title'>Encuentra el perfecto para ti</h2>
					<p className='description__paragraph paragraph'>
						Las exclusivas carátulas Nike se pueden personalizar aún más con complicaciones modulares. Las rachas te
						permiten sacar pecho por tus logros. Y con el modo Crepúsculo de Nike, cualquier hora es buena para salir a
						correr.* Podrías correr sin un Apple Watch Nike, pero ¿qué gracia tendría?
					</p>
				</div>
			</div>
		</section>
	);
};

export default Description;
