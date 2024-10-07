import { Header } from '@/components/Header';
import '../assets/styles/styles.scss';

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`antialiased`}>
				<Header />
				{children}
			</body>
		</html>
	);
}
