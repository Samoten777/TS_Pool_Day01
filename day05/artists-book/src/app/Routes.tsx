import { BrowserRouter, Routes as Routing, Route } from 'react-router-dom';

import Home from '../pages/Home';
import LoginPage from 'pages/Login';
import RegisterPage from 'pages/Register';
import Dashboard from 'pages/Dashboard';

const Routes = (): JSX.Element => (
	<BrowserRouter>
		<Routing>
			<Route path="/" element={<Home />} />
			<Route path="/login" element={<LoginPage />} />
			<Route path="/register" element={<RegisterPage />} />
			<Route path="/dashboard" element={<Dashboard />} />
		</Routing>
	</BrowserRouter>
);

export default Routes;
