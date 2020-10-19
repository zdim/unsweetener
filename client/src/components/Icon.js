import React from 'react';
import Icons from '../assets/icons.svg';

const Icon = ({ name, color, size, className }) => (
	<svg
		className={`icon icon-${name} ${className}`}
		fill={color}
		width={size}
		height={size}
	>
		<use xlinkHref={`${Icons}#icon-${name}`} />
	</svg>
);

export default Icon;
