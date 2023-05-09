import Feed from '@/components/Feed';

const Home = () => {
	return (
		<section className='w-full flex flex-col text-center text-black my-5'>
			<h1 className='p-3 text-center text-5xl sm:text-6xl font-inter font-extrabold capitalize'>
				<span className='bg-gradient-to-l from-cyan-500 to-cyan-900 bg-clip-text text-transparent'>
					{' '}
					AI-Powered Prompts
				</span>
				<br className='max-md:hidden' />
				<span className='bg-gradient-to-r from-green-500 via-lime-500 to-emerald-500 bg-clip-text text-transparent'>
					{' '}
					With <br className='max-md:hidden' />
					IdeaFroge
				</span>
			</h1>
			<p className='text-md font-poppins font-medium p-3 max-w-[700px] m-auto'>
				IdeaFroge is open-source AI Prompting tool for modern world to descover,
				that allows to create and share creative prompts.{' '}
			</p>
			<Feed />
		</section>
	);
};
export default Home;
