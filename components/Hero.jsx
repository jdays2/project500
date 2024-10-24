import { CONTACTS, PRODUCTS } from '@/constants/routes';
import Image from 'next/image';
import React from 'react';
import { Button } from './ui/Button';

export const Hero = () => {
	return (
		<section>
			<div className="relative w-full h-fit pt-20">
				<div className="absolute w-full h-full top-0 left-0 overflow-hidden z-10">
					<Image
						src="/images/hero/sample_1.jpg"
						width="1280"
						height="800"
						className="object-cover w-full h-full"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-65"></div>
				</div>
				<div className="container m-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8 relative z-20">
					<div className="text-center">
						<h1 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-6xl">
							Изготовление материалов из древесины
						</h1>
						<p className="mt-6 text-lg leading-8 text-white">
							Основным видом деятельности ООО»Алексиванлес» является оптовая
							продажа различных пиломатериалов в Белоруссии соответствующих
							европейским стандартам. Мы профессионалы своего дела, поэтому
							продаем продукцию хорошего качества по низким ценам в Белоруссии.
							Реализацию производим, как под заказ, так и со склада в Минске.
							Покупая пиломатериалы в ООО» Алексиванлес» Вы получаете: отличный
							сервис, качественный продукт по минимальной цене.Компания
							Алексиванлес — надёжный поставщик. высококачественных погонажных и
							клееных изделий, а так же брусовых и каркасных домов.
						</p>
						<div className="mt-10 flex items-center justify-center gap-x-6">
							<Button
								text={'Продукты'}
								type="primary"
								href={`/${PRODUCTS}`}
							/>
							<Button
								text={'Контакты'}
								type=""
								href={`/${CONTACTS}`}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
