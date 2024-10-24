import { Header } from '@/components/Header';
import '../assets/styles/styles.scss';

import { Montserrat } from 'next/font/google';
import { Footer } from '@/components/Footer';

const montserrat = Montserrat({ subsets: ['cyrillic'] });

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`antialiased ${montserrat.className}`}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
