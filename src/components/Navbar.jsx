import React from 'react';

const Navbar = () => {
	return (
		<div className='navbar'>
			<div className='navbar__container'>
				<div className='navbar__logo'>
					<a href='#hero' className='navbar__logo-link'>
						<svg width='50' height='17.5' viewBox='0 0 100 36' fill='none' xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M100 0L26.8411 31.1502C20.7744 33.7169 15.6785 35.0044 11.5576 35.0044C6.89094 35.0044 3.50342 33.3711 1.4034 30.1002C0.0825583 28.0002 -0.304945 25.3377 0.236726 22.1085C0.778397 18.8793 2.22007 15.4418 4.55343 11.7834C6.49927 8.82507 9.6868 4.93754 14.1243 0.116667C12.6192 2.48613 11.5154 5.08778 10.8576 7.81673C9.69097 12.7959 10.741 16.4501 14.0077 18.7835C15.5618 19.871 17.6994 20.4168 20.4244 20.4168C22.5994 20.4168 25.0494 20.0668 27.7744 19.3668L100 0Z'
								fill='white'
							/>
						</svg>
					</a>
				</div>
				<nav className='navbar__nav'>
					<a href='#descripcion' className='navbar__nav-link'>
						Descripción
					</a>
					<a href='#caracteristicas' className='navbar__nav-link'>
						Características
					</a>
					<a href='#estilos' className='navbar__nav-link'>
						Estilos
					</a>
					<a href='#correas' className='navbar__nav-link'>
						Correas
					</a>
					<a href='#!' className='navbar__nav-link navbar__nav-link--login'>
						Login
					</a>
				</nav>
			</div>
		</div>
	);
};

export default Navbar;
