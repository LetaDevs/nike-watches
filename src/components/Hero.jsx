import React from 'react';

const Hero = () => {
	return (
		<header className='hero'>
			<div className='hero__container'>
				<div className='hero__section-one'>
					<h1 className='hero__title'>Nike Watches</h1>
					<p className='hero__slogan'>Para los que eligen vivir corriendo.</p>
					<button className='hero__btn'>comprar</button>
				</div>
				<div className='hero__section-two'>
					<img src='./img/banner.png' alt='nike watches' />
				</div>
			</div>
		</header>
	);
};

export default Hero;
