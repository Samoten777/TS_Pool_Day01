import { Flex, Heading, Text, Box, ButtonGroup, Button, Spacer, Link, VStack } from '@chakra-ui/react';

import { Link as ReactRouterLink } from 'react-router-dom';

const Home = () => (
	<>
		<Flex minWidth="max-content" alignItems="center" gap="2">
			<Box p="2">
				<Heading marginLeft="10">Artists Book</Heading>
			</Box>
			<Spacer />
			<ButtonGroup gap="2">
				<Button colorScheme="blue" id="home-to-login-button">
					<Link as={ReactRouterLink} to="/login">
						Login
					</Link>
				</Button>
				<Button colorScheme="blue" marginRight="10" id="home-to-register-button">
					<Link as={ReactRouterLink} to="/register">
						Register
					</Link>
				</Button>
			</ButtonGroup>
		</Flex>
		<VStack>
			<Text marginTop="5%">Manage your favorite artists!</Text>
		</VStack>
	</>
);
export default Home;
