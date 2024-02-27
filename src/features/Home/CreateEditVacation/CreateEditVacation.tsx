import {
  Button,
  FormControl,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay
} from '@chakra-ui/react'
import { CreateEditVacationProps } from '.'

export function CreateEditVacation(props: CreateEditVacationProps) {
  const onClose = () => props.onClose()

  return (
    <Modal isOpen={props.visible} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Criar férias</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
            <FormControl
        </ModalBody>
        <ModalFooter gap={2}>
          <Button variant='ghost'>Cancelar</Button>
          <Button bg='teal.500' textColor={'white'} mr={3} onClick={onClose}>
            Criar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
