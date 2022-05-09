import { Flex, HStack, SimpleGrid } from '@chakra-ui/react';

import { nanoid } from 'nanoid';

import Topbar from 'components/Bar/TopBar';

import Artist from 'types/artists';
import ArtistCard from 'components/Card/ArtistCard';

const Dashboard = (): JSX.Element => {
	const BobMarley: Artist = {
		id: nanoid(),
		name: 'Bob Marley',
		rating: 4,
		musicGenre: 'Reggae',
		photoUrl: 'https://avatarfiles.alphacoders.com/123/123463.jpg',
		nationality: 'Jamaican',
	};

	const addArtist = (artist: Artist): void => {};
	return (
		<HStack align="start" mt="128px">
			<Topbar addArtist={addArtist} />
			<Flex>
				<SimpleGrid columns={6} spacing="15px">
					<ArtistCard artist={BobMarley} />
				</SimpleGrid>
			</Flex>
		</HStack>
	);
};

export default Dashboard;
