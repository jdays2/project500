import Link from 'next/link';
import React from 'react';

export const Button = ({ type, text, href = '#', hide = false }) => {
	const btnBg =
		'bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700';
	const btnPrimaryBg =
		'bg-primary-light-100 text-primary hover:bg-primary-light-700 hover:text-primary-700 active:bg-[hsl(120,_43%,_82%)] active:text-primary-800';
	if (hide) {
		return;
	}
	return (
		<Link href={href}>
			<button
				className={`rounded-md font-bold px-4 py-2 shadow-lg ${
					type === 'primary' ? btnPrimaryBg : btnBg
				}`}>
				<span>{text}</span>
			</button>
		</Link>
	);
};
