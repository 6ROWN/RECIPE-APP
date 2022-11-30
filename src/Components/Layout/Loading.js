import React from "react";
import styled from "styled-components";
import { Container } from "../Context/GlobalStyless";
import { MutatingDots } from "react-loader-spinner";

const Loading = () => {
	return (
		<Container>
			<Loader>
				<MutatingDots
					height="100"
					width="100"
					color="#f3ffb6"
					secondaryColor="#ae2012"
					radius="12.5"
					ariaLabel="mutating-dots-loading"
					wrapperStyle={{}}
					wrapperClass=""
					visible={true}
				/>
			</Loader>
		</Container>
	);
};

const Loader = styled.div`
	justify-content: center;
	display: flex;
	min-height: 50vh;
	align-items: center;
`;

export default Loading;
