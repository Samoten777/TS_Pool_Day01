import {
	Button,
	ButtonProps,
	Modal,
	useDisclosure,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	ModalFooter,
    FormControl,
    FormLabel,
    Input
} from '@chakra-ui/react';

import Artist from 'types/artists';

import AddArtistModal from 'components/Modal/AddArtistModal';

type AddArtistButtonProps = {
	addArtist: (artist: Artist) => void;
};

const AddArtistButton = ({ addArtist, ...rest }: AddArtistButtonProps & ButtonProps): JSX.Element => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<Button colorScheme="orange" onClick={onOpen} {...rest}>
				Add an artist
			</Button>
			<AddArtistModal isOpen={isOpen} onClose={onClose} addArtist={addArtist} />
		</>
	);
};

export default AddArtistButton;
