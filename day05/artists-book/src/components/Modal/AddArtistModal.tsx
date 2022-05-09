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
    Input,
    VStack
} from '@chakra-ui/react';

import { useState } from 'react';

import { nanoid } from 'nanoid';

import Artist from 'types/artists';

type AddArtistModalProps = {
    addArtist: (artist: Artist) => void;
    isOpen: boolean;
    onClose: () => void;
};

const AddArtistModal = ({ addArtist, isOpen, onClose }: AddArtistModalProps): JSX.Element => {

    const [name, setName] = useState('');
    const [rating, setRating] = useState(0);
    const [nationality, setNationality] = useState('');
    const [musicGenre, setMusicGenre] = useState('');
    const [photoUrl, setPhotoUrl] = useState('');
    return (
        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Add an artist</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <VStack>
                        <FormControl isRequired>
                            <FormLabel>Artist's Name</FormLabel>
                            <Input onChange={(e) => setName(e.target.value)} />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Artist's Rating</FormLabel>
                            <Input onChange={(e) => setRating(Number(e.target.value))} />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Artist's Nationality</FormLabel>
                            <Input onChange={(e) => setNationality(e.target.value)} />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Music Genre</FormLabel>
                            <Input onChange={(e) => setMusicGenre(e.target.value)} />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Artist's Photo URL</FormLabel>
                            <Input onChange={(e) => setPhotoUrl(e.target.value)} type="url"/>
                        </FormControl>
                    </VStack>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme="orange" onClick={() => {
                        addArtist({
                            id: nanoid(),
                            name,
                            rating,
                            musicGenre,
                            photoUrl,
                            nationality
                        });
                        onClose();
                    }}>
                        Save
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default AddArtistModal;