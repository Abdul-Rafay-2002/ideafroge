import '@styles/global.css';
import Navbar from '@components/Navbar';
import Provider from '@components/Provider';

export const metadata = {
	title: 'IdeaForge',
	description:
		'Boost your web development productivity with our AI-powered Next.js application. Our application leverages the latest in natural language processing and machine learning to generate code snippets and suggest optimizations for your Next.js projects. With our easy-to-use interface and advanced algorithms, you can create responsive and dynamic web pages in record time. Try our AI prompt Next.js application today and revolutionize your web development workflow',
};

const RootLayout = ({ children }) => {
	return (
		<html lang='en'>
			<body>
				<Provider>
					<div className='main'>
						<div className='gradient'></div>
					</div>
					<main className='app'>
						<Navbar />
						{children}
					</main>
				</Provider>
			</body>
		</html>
	);
};

export default RootLayout;
