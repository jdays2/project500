'use client';

import { CATEGORY } from '@/constants/routes';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const navigation = [
	{ name: 'Главная', href: '/' },
	{ name: 'Категории', href: `/${CATEGORY}` },
	{ name: 'Товары', href: '#' },
	{ name: 'О нас', href: '#' },
	{ name: 'Контакты', href: '#' },
];

export const Header = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<header className="fixed inset-x-0 top-0 z-50 backdrop-blur-xl">
			<nav
				aria-label="Global"
				className="flex items-center justify-between p-4 lg:px-4 m-auto border-b-2 border-primary">
				<div className="flex lg:flex-1">
					<Link
						href="/"
						className="-m-1.5 p-1.5">
						<span className="text-3xl font-bold">ОДО "ПИЛАРМ"</span>
					</Link>
				</div>
				<div className="flex lg:hidden">
					<button
						type="button"
						onClick={() => setMobileMenuOpen(true)}
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
						<span className="sr-only">Open main menu</span>
					</button>
				</div>
				<div className="lg:flex lg:gap-x-5">
					{navigation.map((item) => (
						<Link
							key={item.name}
							href={item.href}
							className="relative flex items-center justify-between px-4 py-3 font-bold uppercase tracking-wide before:absolute before:bottom-0.5 before:-left-2 before:mx-2 before:h-[0.1875rem] before:w-0 before:bg-primary before:content-[''] md:my-0.5 md:px-2 md:py-1 hover:before:w-full before:transition-all">
							{item.name}
						</Link>
					))}
				</div>
			</nav>
		</header>
	);
};
