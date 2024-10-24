'use client';

import React from 'react';
import { Card } from './Card';

import { Button } from './ui/Button';
import { PRODUCTS } from '@/constants/routes';
import { usePathname } from 'next/navigation';

export const ProductList = ({ products, seo, title = 'Все товары' }) => {
	const pathname = usePathname();
	const isMainPage = pathname === '/';

	const dynamicTitle = isMainPage ? 'Товары' : title;
	return (
		<section className="bg-white">
			<div className="container m-auto">
				<div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
					<div className="flex justify-between items-center mb-2">
						<h2 className="text-2xl font-bold text-gray-900">
							- {dynamicTitle} -
						</h2>
						<Button
							hide={!isMainPage}
							type={'primary'}
							text="Все товары"
							href={`/${PRODUCTS}`}
						/>
					</div>

					{seo}

					<div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
						{products?.map((product) => {
							return (
								<Card
									key={product.id}
									product={product}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};
