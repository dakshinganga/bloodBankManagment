import React from "react";
import styled from "styled-components";

const Login = () => {
	return (
		<Container>
			<Header>
				<AdminLogin>Admin Login</AdminLogin>
			</Header>
		</Container>
	);
};

export default Login;

const Container = styled.div``;

const AdminLogin = styled.button``;

const Header = styled.nav`
	display: flex;
	flex-direction: column;
	align-items: end;
	height: 70px;
	background-color: orange;
`;
