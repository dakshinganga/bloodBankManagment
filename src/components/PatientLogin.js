import React, { useState } from "react";
import styled from "styled-components";
import PatientDashboard from "./PatientDashboard";

const PatientLogin = () => {
	const [isRegistered, setIsRegistered] = useState(false);
	const [isPatient, setIsPatient] = useState(false);
	const [registerDetails, setRegisterDetails] = useState({
		patientUserName: "",
		patientEmail: "",
		patientPassword: "",
	});
	const [patientLoginDetails, setPatientLoginDetails] = useState({
		patientUserName: "",
		patientPassword: "",
	});

	const onChangeInput = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		if (!isRegistered) {
			setRegisterDetails({ ...registerDetails, [name]: value });
		} else {
			setPatientLoginDetails({ ...patientLoginDetails, [name]: value });
		}
	};

	const onFormSubmit = (e) => {
		e.preventDefault();
		setIsRegistered(true);
	};

	const loginButton = (e) => {
		e.preventDefault();
		setIsPatient(true);
	};

	return !isPatient ? (
		<Container>
			<FormContainer>
				<form onSubmit={(e) => onFormSubmit(e)}>
					<label htmlFor="userName">Username</label> <br />
					<input
						name="patientUserName"
						autoComplete="off"
						required
						id="userName"
						type="text"
						placeholder="Enter Username"
						value={
							registerDetails.patientUserName ||
							patientLoginDetails.patientUserName
						}
						onChange={(e) => onChangeInput(e)}
					/>
					<br />
					{!isRegistered ? (
						<div>
							<label htmlFor="userEmail">Email</label>
							<br />
							<input
								name="patientEmail"
								autoComplete="off"
								required
								id="userEmail"
								type="text"
								placeholder="Enter Email"
								value={registerDetails.patientEmail}
								onChange={(e) => onChangeInput(e)}
							/>
							<br />
						</div>
					) : (
						""
					)}
					<label htmlFor="password">Password</label> <br />
					<input
						name="patientPassword"
						autoComplete="off"
						required
						id="password"
						type="password"
						placeholder="Enter Password"
						value={
							registerDetails.patientPassword ||
							patientLoginDetails.patientPassword
						}
						onChange={(e) => onChangeInput(e)}
					/>
					<br />
					{!isRegistered ? (
						<div>
							<button>Register</button>
							<br />
							<SwitchLoginRegister>
								If Already Registered, then
								<span onClick={() => setIsRegistered(true)}> Login</span>
							</SwitchLoginRegister>
						</div>
					) : (
						<button onClick={(e) => loginButton(e)}>Login</button>
					)}
				</form>
			</FormContainer>
		</Container>
	) : (
		<PatientDashboard />
	);
};

export default PatientLogin;

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: calc(100vh - 70px);
`;

const FormContainer = styled.div`
	border-radius: 10px;
	padding-top: 10px;
	border: 2px solid grey;
	min-height: 400px;
	min-width: 400px;
	display: flex;
	align-items: center;
	justify-content: center;
	label {
		font-size: 30px;
	}
	button {
		font-size: 20px;
		margin: 10px 0;
		background-color: #cacaf1;
		border: none;
		border-radius: 5px;
		transition: all 250ms;
		:active {
			background-color: #2166bb;
		}
	}

	input {
		border-radius: 24px;
		border: 1px solid #dfe1e5;
		outline: none;
		height: 40px;
		padding-left: 10px;
	}
`;

const SwitchLoginRegister = styled.p`
	span {
		color: blue;
		font-weight: 800;
		cursor: pointer;
		padding: 5px;
		border-radius: 5px;
	}
	span:active {
		color: white;
		background: black;
	}
`;
