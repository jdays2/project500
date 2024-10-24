import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Gallery } from '@/components/Gallery';
import categories from '@/constants/categories';
import products from '@/constants/products';
import { CATEGORY } from '@/constants/routes';
import Link from 'next/link';
import 'swiper/css';

export default function Products({ params }) {
	const { id } = params;
	const product = products.find((e) => Number(e.id) === Number(id));
	const categoryName = categories.find(
		(e) => Number(e.id) === Number(product.categoryId),
	)?.name;
	return (
		<main className="h-full bg-gray-100 pt-[68px]">
			<Breadcrumbs additionalData={products} />
			<section className="container m-auto py-10 sm:py-10 lg:max-w-7xl">
				<div className="flex gap-6 p-6 rounded shadow-md bg-white">
					<Gallery data={product.images} />
					<div className="w-full flex flex-col gap-2">
						<h1 className="text-xl font-semibold">{product.name}</h1>
						<hr />
						<p>{product.description}</p>
						<hr />
						<div className="flex flex-col gap-1">
							<div>
								<span className="font-semibold">Цвет:  </span>
								<span>{product.color}</span>
							</div>
							<div>
								<span className="font-semibold">Категория:  </span>
								<Link
									href={`/${CATEGORY}/${product.categoryId}`}
									className="hover:text-primary">
									"{categoryName}"
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
