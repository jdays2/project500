'use client';

import { useState, useRef } from 'react';
import { FreeMode, Navigation, Thumbs, EffectCube } from 'swiper/modules';
import {
	MdOutlineKeyboardArrowRight,
	MdOutlineKeyboardArrowLeft,
} from 'react-icons/md';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/effect-cube';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { gallerySlidesCalc } from '@/utils/gallerySlidesCalc';

export const Gallery = ({ data }) => {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);
	const [mainSwiper, setMainSwiper] = useState(null);
	const [isBeginning, setIsBeginning] = useState(true);
	const [isEnd, setIsEnd] = useState(false);
	const [activeSlider, setActiveSlider] = useState(0);
	const thumbsSwiperRef = useRef(null);

	const slidesPerView = Number(gallerySlidesCalc(data));

	const handleNext = () => {
		if (thumbsSwiper) {
			thumbsSwiper.slideNext();
		}
	};

	const handlePrev = () => {
		if (thumbsSwiper) {
			thumbsSwiper.slidePrev();
		}
	};

	const onMainSwiper = (swiper) => {
		setMainSwiper(swiper);
	};

	const onThumbsSwiper = (swiper) => {
		setThumbsSwiper(swiper);
		thumbsSwiperRef.current = swiper;
	};

	const onMainSlideChange = (swiper) => {
		setActiveSlider(swiper.activeIndex);
	};

	const onThumbsSlideChange = (swiper) => {
		setIsBeginning(swiper.isBeginning);
		setIsEnd(swiper.isEnd);
	};

	const handleThumbClick = (index) => {
		if (mainSwiper) {
			mainSwiper.slideTo(index);
			setActiveSlider(index);
		}
	};

	return (
		<div className="w-[640px]">
			<Swiper
				effect={'cube'}
				spaceBetween={10}
				slidesPerView={1}
				thumbs={{ swiper: thumbsSwiper }}
				modules={[FreeMode, Navigation, Thumbs, EffectCube]}
				onSwiper={onMainSwiper}
				onSlideChange={onMainSlideChange}
				cubeEffect={{
					shadow: false,
				}}
				className="w-full mainSwiper h-[380px]">
				{data?.map((e, i) => (
					<SwiperSlide
						key={e}
						className="relative">
						<Image
							alt={'product image'}
							src={e}
							width={400}
							height={300}
							className="h-full w-full object-contain object-center lg:h-full lg:w-full bg-gray-200 rounded-md"
						/>
						<div className="absolute top-4 right-4 z-20 p-2 rounded bg-primary">
							<span className="text-base text-white">{`${i + 1}/${
								data.length
							}`}</span>
						</div>
					</SwiperSlide>
				))}
			</Swiper>

			{slidesPerView > 1 && (
				<div className="relative px-10 pt-4">
					<Swiper
						onSwiper={onThumbsSwiper}
						onSlideChange={onThumbsSlideChange}
						spaceBetween={10}
						slidesPerView={slidesPerView}
						navigation={false}
						watchSlidesProgress={true}
						modules={[Navigation, Thumbs]}
						className="controlSwiper h-[100px]">
						{data?.map((e, i) => (
							<SwiperSlide
								key={e}
								className={`${
									activeSlider === i
										? '!scale-100  border-[2px] border-primary'
										: '!scale-90'
								} rounded-md cursor-pointer bg-gray-200 overflow-hidden`}
								onClick={() => handleThumbClick(i)}>
								<Image
									alt={'product image'}
									src={e}
									width={200}
									height={120}
									className={`h-full w-full object-cover object-center lg:h-full lg:w-full `}
								/>
							</SwiperSlide>
						))}
					</Swiper>
					{slidesPerView >= 4 && (
						<>
							<button
								disabled={isBeginning}
								onClick={handlePrev}
								className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700 hover:cursor-pointer p-1 rounded-full disabled:pointer-events-none disabled:opacity-25">
								<MdOutlineKeyboardArrowLeft size={22} />
							</button>
							<button
								disabled={isEnd}
								onClick={handleNext}
								className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700 hover:cursor-pointer p-1 rounded-full disabled:pointer-events-none disabled:opacity-25">
								<MdOutlineKeyboardArrowRight size={22} />
							</button>
						</>
					)}
				</div>
			)}
		</div>
	);
};
