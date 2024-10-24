import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ProductList } from '@/components/ProductList';
import categories from '@/constants/categories';
import products from '@/constants/products';
import { PRODUCTS } from '@/constants/routes';
import Link from 'next/link';
import React from 'react';

export default function CategoryListPage({ params }) {
	const { id } = params;
	const currentCategory = categories.find(
		(e) => Number(id) === Number(e.id),
	)?.name;

	const filteredProducts = id
		? products.filter((e) => Number(e.categoryId) === Number(id))
		: products;

	return (
		<main className="h-full bg-gray-100 pt-[68px]">
			<Breadcrumbs additionalData={categories} />
			<ProductList
				products={filteredProducts}
				seo={
					<p>
						<span>
							Вы просматриваете товары, относящиеся к категории "
							{currentCategory}". Ознакомиться с полным каталогом можно по
						</span>
						<Link href={`/${PRODUCTS}`}>
							<span className="underline"> ссылке</span>
						</Link>
						.
					</p>
				}
				title={currentCategory}
			/>
		</main>
	);
}
