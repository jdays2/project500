import { PRODUCTS } from '@/constants/routes';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const Card = ({ product }) => {
	return (
		<div className="group relative p-2 rounded-lg border shadow-lg">
			<div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-60">
				<Image
					alt={product.imageAlt}
					src={product.imageSrc}
					width={260}
					height={260}
					className="h-full w-full object-contain object-center lg:h-full lg:w-full"
				/>
			</div>
			<div className="mt-1 flex flex-col justify-between gap-1">
				<h3 className="text-base text-gray-700">{product.name}</h3>

				<p className="text-sm font-semibold text-primary">{product.price}</p>

				<Link
					href={`/${PRODUCTS}/${product.id}`}
					type="button"
					className="mt-2 mb-2 m-auto w-fit rounded-md font-semibold px-3 py-1 shadow-lg bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700 hover:cursor-pointer">
					Подробнее
				</Link>
			</div>
		</div>
	);
};
