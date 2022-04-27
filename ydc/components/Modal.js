import {
  ChakraProvider,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

export default function ModalButton(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <ChakraProvider>
      <ChevronRightIcon
        boxSize={6}
        color="gray.500"
        cursor="pointer"
        onClick={onOpen}
      />
      <Modal
        size="6xl"
        scrollBehavior="inside"
        isOpen={isOpen}
        onClose={onClose}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{props.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody whiteSpace="pre-wrap">{props.content}</ModalBody>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  );
}
