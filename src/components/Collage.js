import styled from 'styled-components';
import Image from 'next/image';
import images from '../_images.json';
import { useEffect } from 'react';

const Container = styled.div`
	margin: 2rem auto;
	width: 90%;
	max-width: 2000px;
	display: grid;
    grid-gap: 10px;
	grid-template-columns: 33% 33% 33%;
	align-items: center;
`;

const ImageBlock = styled.div`
	& img {
		border-radius: 4px;
	}
`;

const Collage = () => {
	// const imgMap = [];
	// const test = images;

	// useEffect(() => {
	// 	const rows = [];

	// 	while ( test.length > 0) {

	// 	}
	// }, []);

	return (
		<Container>
			{images.map((img, idx) =>
				<ImageBlock key={idx}>
					<Image
						src={`/images/${img.src}`}
						width={img.width}
						height={img.height}
						styles={{borderRadius: '4px'}}
					/>
				</ImageBlock>
			)}
		</Container>
	);
};

export default Collage;