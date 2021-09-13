import React from 'react';

const Estilos = () => {
	return (
		<section className='estilos'>
			<div className='estilos__container'>
				<div className='estilos__text'>
					<h2 className='estilos__title'>Elige tu estilo</h2>
					<p className='estilos__paragraph'>
						Hay muchas carátulas que puedes personalizar según tu estado de ánimo, tu estilo o tus actividades
						favoritas. Encuentra la tuya y hazla realmente tuya.
					</p>
				</div>
				<div className='estilos__images'>
					<img src='./img/estilo01.png' alt='estilo watch' className='estilos__img-one' />
					<img src='./img/estilo02.png' alt='estilo watch' className='estilos__img-two' />
					<img src='./img/estilo03.png' alt='estilo watch' className='estilos__img-three' />
					<img src='./img/estilo04.png' alt='estilo watch' className='estilos__img-four' />
				</div>
			</div>
		</section>
	);
};

export default Estilos;
