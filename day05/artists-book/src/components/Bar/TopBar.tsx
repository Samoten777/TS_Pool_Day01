import { Link as ReactRouterLink } from 'react-router-dom';

import { Box, Divider, HStack, Link, Text } from '@chakra-ui/react';

import AddArtistButton from 'components/Button/AddArtistButton';

// import colors from 'theme/foundation/colors';

import Artist from 'types/artists';

const Topbar = ({ addArtist }: { addArtist: (artist: Artist) => void }) => (
	<Box as="nav" w="100vw" h="80px" position="fixed" left="0" top="0">
		<HStack w="100%" h="100%" px="24px" py="32px" justify="space-between">
			<Link as={ReactRouterLink} to="/dashboard">
				<Text id="topBar-title">Artists Book</Text>
			</Link>
			<AddArtistButton addArtist={addArtist} />
		</HStack>
		<Divider />
	</Box>
);

export default Topbar;
