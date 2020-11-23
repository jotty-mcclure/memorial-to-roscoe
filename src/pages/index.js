import Head from 'next/head';
import Layout from '../components/Layout';
import MainGreeting from '../components/MainGreeting';
import Collage from '../components/Collage';

const Index = () => {
	return (
		<Layout>
			<Head>
				<title>Memorial to Roscoe the Dog</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<MainGreeting />
			<Collage /> 
		</Layout>
	);
};

export default Index;