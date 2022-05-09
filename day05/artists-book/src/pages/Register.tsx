import { VStack, Heading, Input, InputGroup, InputRightElement, Text, Button, Link } from '@chakra-ui/react';
import { Link as ReactRouterLink, useNavigate } from 'react-router-dom';
import React from 'react';

const RegisterPage = (): JSX.Element => {
	const [show, setShow] = React.useState(false);
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');
	const [passwordConfirm, setPasswordConfirm] = React.useState('');
	const handleShow = () => setShow(!show);
	const navigate = useNavigate();

	return (
		<VStack spacing="2%">
			<Heading>Artists Book</Heading>
			<VStack spacing="2%" w="40%" alignItems="left">
				<Text align="left">Username</Text>
				<Input placeholder="Enter your username" width="80%" size="md" onChange={(e) => setEmail(e.target.value)} />
				<Text align="left">Password</Text>
				<InputGroup size="md" width="80%">
					<Input
						pr="4.5rem"
						type={show ? 'text' : 'password'}
						placeholder="Enter your password"
						onChange={(e) => setPassword(e.target.value)}
					/>
					<InputRightElement width="4.5rem">
						<Button h="1.75rem" size="sm" onClick={handleShow} variant="outline">
							{show ? 'Hide' : 'Show'}
						</Button>
					</InputRightElement>
				</InputGroup>
				<Text>Confirm Password</Text>
				<InputGroup size="md" width="80%">
					<Input
						pr="4.5rem"
						type={show ? 'text' : 'password'}
						placeholder="Confirm your password"
						onChange={(e) => setPasswordConfirm(e.target.value)}
					/>
					<InputRightElement width="4.5rem">
						<Button h="1.75rem" size="sm" onClick={handleShow} variant="outline">
							{show ? 'Hide' : 'Show'}
						</Button>
					</InputRightElement>
				</InputGroup>
				<Button
					id="register-button"
					type="submit"
					variant="inline"
					onClick={() => {
						console.log(`Username: ${email}`);
						console.log(`Password: ${password}`);
						console.log(`Confirmed Password: ${passwordConfirm}`);
						navigate('/dashboard');
					}}
				>
					Create an account
				</Button>
				<Text align="center">
					Already got an account?{' '}
					<Button variant="link" id="registerPage-login-button">
						<Link as={ReactRouterLink} color="teal.500" to="/login">
							Log in your account.
						</Link>
					</Button>
				</Text>
			</VStack>
		</VStack>
	);
};
export default RegisterPage;
