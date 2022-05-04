import { BrowserRouter, Routes as Routing, Route } from 'react-router-dom';

import Home from '../pages/Home';
import LoginPage from 'pages/Login';
import RegisterPage from 'pages/Register';

const Routes = (): JSX.Element => (
	<BrowserRouter>
		<Routing>
			<Route path="/" element={<Home />} />
			<Route path="/login" element={<LoginPage />} />
			<Route path="/register" element={<RegisterPage />} />
		</Routing>
	</BrowserRouter>
);

export default Routes;
