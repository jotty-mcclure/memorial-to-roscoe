import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
	text-align: center;
	overflow: auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: ${props => props.height + 'px' || '100%'};

	& > h1 {
		margin-top: 0;
		font-size: max(5vw, 30px);
    	margin-bottom: 1rem;
	}
`;

const ProfilePic = styled.img`
	box-shadow: 0 0.5rem 2.2rem rgba(0,0,0,.1),
				0 1rem 1.4rem rgba(0,0,0,.1),
				0 0.25rem 0.5rem rgba(0,0,0,.1),
				0 0.13rem 0.2rem rgba(0,0,0,.1);
	border-radius: 100%;
	max-width: 25rem;
	max-height: 25rem;
	width: 48vh;
	height: auto;
	margin: 0 auto 1rem;
    border: 1vh solid #fff;
`;

const MainGreeting = () => {
	const [pageHeight, setPageHeight] = useState(0);

	var resizeTimer;

	function handleResize() {
		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(function() {
			setPageHeight(document.body.offsetHeight);
		}, 250);
	}

	useEffect(() => {
		setPageHeight(document.body.offsetHeight);

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<Container height={pageHeight}>
			<h1>Memorial to Roscoe</h1>
			<ProfilePic 
				src="/images/roscoe-profile.png"
			/>
			<p>In memory of a friend who brought love, life, and hapiness to all who knew him.</p>
		</Container>
	);
};

export default MainGreeting;