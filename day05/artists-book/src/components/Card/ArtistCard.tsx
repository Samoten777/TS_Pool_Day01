import Artist from 'types/artists';

import { Heading, Avatar, Box, Center, Flex, Text, Stack, useColorModeValue, HStack } from '@chakra-ui/react';

import { StarIcon } from '@chakra-ui/icons';

const ArtistCard = ({ artist }: { artist: Artist }): JSX.Element => (
	<Center py={6}>
		<Box maxW="sm" w={'full'} bg={useColorModeValue('white', 'gray.800')} boxShadow={'2xl'} rounded={'md'}>
			<Flex justify={'center'} mt={-12}>
				<Avatar
					size="xl"
					src={artist.photoUrl}
					css={{
						border: '2px solid white',
					}}
					name={artist.name}
				/>
			</Flex>
			<Box p={6}>
				<Stack spacing={0} align={'center'} mb={5}>
					<Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
						{artist.name}
					</Heading>
					<Text color={'gray.500'}>{artist.musicGenre}</Text>
					<Text color={'gray.500'}>{artist.nationality}</Text>
				</Stack>
				<HStack spacing="4px" h="27px">
					{Array.from(Array(5).keys()).map((index) => (
						<StarIcon key={index.toString()} color={artist.rating > index ? 'yellow.500' : 'gray.100'} />
					))}
				</HStack>
			</Box>
		</Box>
	</Center>
);

export default ArtistCard;
