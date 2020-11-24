import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

const Button = styled.button`
	position: fixed;
	right: 1rem;
	bottom: 1rem;

	background: rgba(0, 0, 0, .2);
	border-radius: 100%;
	${'' /* padding: 1rem; */}
	border: none;
	width: 2.5rem;
	height: 2.5rem;
	cursor: pointer;

	${props => props.isVisible && css`
		display: block;
	`}

	${props => !props.isVisible && css`
		display: none;
	`}

	&:hover {
		background: rgba(0, 0, 0, .5);
	}
`;

const ScrollToTop = () => {
	const [isVisible, setIsVisible] = useState(false);

	function handleScrollUp() {
		const c = document.documentElement.scrollTop || document.body.scrollTop;
		if (c > 0) {
			window.requestAnimationFrame(handleScrollUp);
			window.scrollTo(0, c - c / 3);
			setIsVisible(false);
		}
	}

	function handleScroll() {
		if ( window.scrollY > 100 ) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	}

	useEffect(() => {
		document.addEventListener('scroll', handleScroll);

		return () => {
			document.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<Button onClick={handleScrollUp} tabIndex={0} isVisible={isVisible}>
			^
		</Button>
	);
};

export default ScrollToTop;