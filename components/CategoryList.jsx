'use client';

import { CATEGORY } from '@/constants/routes';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button } from './ui/Button';
import { usePathname } from 'next/navigation';

export const CategoryList = ({ categories }) => {
	const pathname = usePathname();
	const isMainPage = pathname === '/';

	const title = isMainPage ? 'Категории' : 'Все категории';
	return (
		<section>
			<div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
				<div className="flex justify-between items-center">
					<h2 className="text-2xl font-bold text-gray-900">- {title} -</h2>
					<Button
						hide={!isMainPage}
						type={'primary'}
						text="Все категории"
						href={`/${CATEGORY}`}
					/>
				</div>
				<div className="mt-6 space-y-12 lg:grid lg:grid-cols-5 lg:gap-6 lg:space-y-0">
					{categories?.map((callout) => (
						<Link
							href={`/${CATEGORY}/${callout.id}`}
							key={callout.id}>
							<div
								key={callout.name}
								className="group relative p-3 transition border-2 border-transparent bg-white text-gray-900 rounded hover:cursor-pointer hover:border-primary hover:text-primary">
								<div className="relative w-full overflow-hidden rounded bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 sm:h-52">
									<Image
										alt={callout.imageAlt}
										src={callout.imageSrc}
										width={260}
										height={260}
										className="h-full w-full object-cover object-center"
									/>
								</div>
								<h3 className="text-base font-semibold pt-2">{callout.name}</h3>
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
};
