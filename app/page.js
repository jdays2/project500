import { CategoryList } from '@/components/CategoryList';
import { Hero } from '@/components/Hero';
import { ProductList } from '@/components/ProductList';
import categories from '@/constants/categories';
import products from '@/constants/products';

export default function Home() {
	return (
		<main className="h-full bg-gray-100">
			<Hero />
			<CategoryList categories={categories.slice(0, 5)}/>
			<ProductList products={products.slice(0, 4)} />
		</main>
	);
}
