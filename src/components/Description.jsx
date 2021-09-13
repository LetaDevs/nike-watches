import React from 'react';

const Description = () => {
	return (
		<section className='description'>
			<div className='description__container'>
				<div className='description__section-one'>
					<div className='description__img description__img--blue'>
						<img src='./img/completo1.png' alt='nike watch' />
					</div>
					<div className='description__img description__img--black'>
						<img src='./img/completo2.png' alt='nike watch' />
					</div>
				</div>
				<div className='description__section-two'>
					<h2 className='description__title'>Encuentra el perfecto para ti</h2>
					<p className='description__paragraph'>
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
