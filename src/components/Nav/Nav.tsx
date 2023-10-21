import React from 'react';
import styles from './Nav.module.scss';

export type NavProps = {
}

const Nav: React.FC<NavProps>  = ({}) => {
	return <div className={styles.nav}>
		<div>Logo</div>
		<nav>
		<ul><li>Categorias</li>
			 <li>Servicios</li>
			<li>Puntos</li>
			<li>Contáctanos</li>
		</ul> 
		</nav>
	</div>;
};

export default Nav;
