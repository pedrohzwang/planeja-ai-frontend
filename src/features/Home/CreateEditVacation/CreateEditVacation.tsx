import {
  Box,
  Button,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Text
} from '@chakra-ui/react'
import { CreateEditVacationProps } from '.'
import { Form } from 'react-hook-form'
import { useVacationForm } from './hooks/useVacationForm'
import { VacationFormSchemaType } from '../../../shared/schema/VacationFormSchema'
import { ETravelType } from '../../../shared/enum/ETravelType'

export function CreateEditVacation(props: CreateEditVacationProps) {
  const onClose = () => props.onClose()

  const onSubmit = (data: VacationFormSchemaType) => {
    console.log(data)
  }

  const form = useVacationForm()

  const getTypeLabel = (type: ETravelType) => {
    switch (type) {
      case ETravelType.INTERNATIONAL:
        return 'Internacional'
      case ETravelType.NATIONAL:
        return 'Nacional'
      case ETravelType.COASTLINE:
        return 'Litoral'
      default:
        return 'Regional'
    }
  }

  return (
    <Modal isOpen={props.visible} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Criar férias</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Form
            control={form.control}
            style={{ display: 'flex', flexDirection: 'column', gap: 5 }}
          >
            <Box>
              <Text>Descrição das férias</Text>
              <Input {...form.register('description')} />
            </Box>
            <Box>
              <Text>Destino</Text>
              <Input {...form.register('destiny')} />
            </Box>
            <Flex gap={3}>
              <Flex flexDirection='column' flexGrow={1}>
                <Text>Começo</Text>
                <Input type='date' {...form.register('startDate')} />
              </Flex>
              <Flex flexDirection='column' flexGrow={1}>
                <Text>Fim</Text>
                <Input type='date' {...form.register('endDate')} />
              </Flex>
            </Flex>
            <Flex gap={3}>
              <Flex flexDirection='column' flexGrow={1}>
                <Text>Tipo da viagem</Text>
                <Select {...form.register('type')}>
                  {Object.keys(ETravelType).map((type) => {
                    return (
                      <option key={type} value={type}>
                        {getTypeLabel(type as ETravelType)}
                      </option>
                    )
                  })}
                </Select>
              </Flex>
              <Flex flexDirection='column' flexGrow={1}>
                <Text>Objetivo da viagem</Text>
                <Input type='date' {...form.register('endDate')} />
              </Flex>
            </Flex>
          </Form>
        </ModalBody>
        <ModalFooter gap={2}>
          <Button variant='ghost' onClick={props.onCancel}>
            Cancelar
          </Button>
          <Button
            bg='teal.500'
            textColor={'white'}
            mr={3}
            onClick={() => form.handleSubmit(onSubmit)()}
          >
            Criar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
