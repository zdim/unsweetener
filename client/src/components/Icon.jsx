import React from 'react';
import Icons from '../assets/icons.svg';

export const Icon = ({ name, color, size, className }) => (
	<svg
		className={`icon icon-${name} ${className}`}
		fill={color}
		size={size}
		width={size}
		height={size}
	>
		<use xlinkHref={`${Icons}#icon-${name}`} />
	</svg>
);
