import styled from 'styled-components';
import '../public/global.css';

const Wrapper = styled.div`
	max-width: 50rem;
	margin: 0 auto;
	padding: 0 .5rem;
	min-height: 100%;
`;

const Layout = ({
	children
}) => {
	return (
		<>
			<Wrapper>
				{children}
			</Wrapper>
		</>
	);
};

export default Layout;