import React from 'react';

const Caracteristicas = () => {
	return (
		<section id='caracteristicas' className='caracteristicas'>
			<div className='caracteristicas__container'>
				<div className='caracteristicas__card'>
					<img src='./img/1.png' alt='caracteristica nike watch' />
					<h3 className='caracteristicas__card-title'>Antes de correr</h3>
					<p className='caracteristicas__card-paragraph'>
						Empieza una carrera desde cualquier carátula Nike. Registra tu progreso y conviértete en tu propio
						entrenador para motivarte a cumplir tu meta de kilómetros mensuales.
					</p>
				</div>
				<div className='caracteristicas__card'>
					<img src='./img/2.png' alt='caracteristica nike watch' />
					<h3 className='caracteristicas__card-title'>Mientras corres</h3>
					<p className='caracteristicas__card-paragraph'>
						Monitorea tu progreso fácilmente con datos como cadencia, ritmo promedio y distancia total. Y si vas a
						correr de noche, activa el modo Crepúsculo de Nike para mejorar la visibilidad.
					</p>
				</div>
				<div className='caracteristicas__card'>
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
