import React, {useEffect} from 'react';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
	useEffect(() => {
		const tl = gsap.timeline({
			defaults: {
				ease: 'sine.out',
				opacity: 0,
			},
		});

		tl.from('.hero-img', {duration: 2, y: 40})
			.from('.hero__title', {duration: 1, y: 20}, '-=1.5')
			.from('.hero__slogan', {duration: 1, y: 40}, '-=1')
			.from('.hero__btn', {duration: 1.5, x: -20});
	}, []);

	return (
		<header id='hero' className='hero'>
			<div className='hero__container '>
				<div className='hero__section-one'>
					<h1 className='hero__title'>Nike Watches</h1>
					<p className='hero__slogan'>Para los que eligen vivir corriendo.</p>
					<button className='hero__btn'>comprar</button>
				</div>
				<div className='hero__section-two'>
					<img className='hero-img' src='./img/banner.png' alt='nike watches' />
				</div>
			</div>
		</header>
	);
};

export default Hero;
