import React from 'react';
import { Button, Input, InputGroup, InputRightElement, Text, VStack } from '@chakra-ui/react';

export function UserInput(props: { name: string; example: string }) {
	return (
		<VStack>
			<Text align="left">{props.name}</Text>
			<Input placeholder={props.example} width="80%" size="md" />
		</VStack>
	);
}

export function PasswordInput(props: { name: string; example: string }) {
	const [show, setShow] = React.useState(false);
	const handleClick = () => setShow(!show);

	return (
		<VStack>
			<Text align="left">{props.name}</Text>
			<InputGroup size="md" width="80%">
				<Input pr="4.5rem" type={show ? 'text' : 'password'} placeholder={props.example} />
				<InputRightElement width="4.5rem">
					<Button h="1.75rem" size="sm" onClick={handleClick} variant="outline">
						{show ? 'Hide' : 'Show'}
					</Button>
				</InputRightElement>
			</InputGroup>
		</VStack>
	);
}
