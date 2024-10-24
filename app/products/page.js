import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ProductList } from '@/components/ProductList';
import products from '@/constants/products';

export default function Products() {
	return (
		<main className="h-full bg-gray-100 pt-[68px]">
			<Breadcrumbs additionalData={products}/>
			<ProductList products={products}/>
		</main>
	);
}
