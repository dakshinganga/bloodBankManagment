import "./App.css";
import styled from "styled-components";
import Home from "./components/Home";
import Header from "./components/Header";
import AdminLogin from "./components/AdminLogin";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import DonorLogin from "./components/DonorLogin";
import PatientLogin from "./components/PatientLogin";
import { useState } from "react";

function App() {
	const adminUser = {
		adminUserName: "admin",
		adminPassword: "admin",
	};

	const [isAdmin, setIsAdmin] = useState(false);
	return (
		<Container>
			<BrowserRouter>
				<Header isAdmin={isAdmin} />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/adminlogin">
						<AdminLogin
							adminUser={adminUser}
							setIsAdmin={setIsAdmin}
							isAdmin={isAdmin}
						/>
					</Route>
					<Route exact path="/donorlogin">
						<DonorLogin />
					</Route>
					<Route exact path="/patientlogin">
						<PatientLogin />
					</Route>
				</Switch>
			</BrowserRouter>
		</Container>
	);
}

export default App;

const Container = styled.div``;
