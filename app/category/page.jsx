import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CategoryList } from '@/components/CategoryList';
import categories from '@/constants/categories';
import React from 'react';

export default function AllCategoriesPage() {
	return (
		<main className="h-full bg-gray-100 pt-[68px]">
			<Breadcrumbs />
			<CategoryList categories={categories}/>
		</main>
	);
}
