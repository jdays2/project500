export const gallerySlidesCalc = (array) => {
	switch (array.length) {
		case 1: {
			return 1;
		}
		case 2: {
			return 2;
		}
		case 3: {
			return 3;
		}
		default: {
			return 4;
		}
	}
};
