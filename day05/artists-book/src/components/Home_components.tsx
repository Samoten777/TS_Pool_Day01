import { Heading, Text } from '@chakra-ui/react';

const HomeText = (headerTitle: string, subText: string) => (
	<>
		<Heading>{headerTitle}</Heading>
		<Text>{subText}</Text>
	</>
);
export default HomeText;
