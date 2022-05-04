import { VStack, Heading, Input, InputGroup, InputRightElement, Text, Button, Link } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import React from 'react';

const LoginPage = (): JSX.Element => {
	const [show, setShow] = React.useState(false);
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');
	const handleShow = () => setShow(!show);

	return (
		<VStack spacing="2%">
			<Heading>Artists Book</Heading>
			<VStack spacing="2%" w="40%" alignItems="left">
				<Text align="left">Email</Text>
				<Input placeholder="Enter your email" width="80%" size="md" onChange={(e) => setEmail(e.target.value)} />
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
				<Button
					id='login-button'
					type="submit"
					variant="solid"
					onClick={() => {
						console.log(`Email: ${email}\nPassword: ${password}`);
					}}
				>
					Log in
				</Button>
				<Text align="center">
					No account yet?{' '}
					<Button variant='link' id='login-to-register-button'>
						<Link as={ReactRouterLink} color="teal.500" to="/register">
							Create a new account.
						</Link>
					</Button>
				</Text>
			</VStack>
		</VStack>
	);
};
export default LoginPage;
