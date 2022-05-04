import { Link, Button, Text } from '@chakra-ui/react';

import { Link as ReactRouterLink } from 'react-router-dom';

const ButtonLink = (path: string, text: string): JSX.Element => (
	<Link as={ReactRouterLink} to={path}>
		<Button colorScheme="blue" height="60px" width="100px">
			<Text>{text}</Text>
		</Button>
	</Link>
);

export default ButtonLink;
