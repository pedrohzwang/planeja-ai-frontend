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
  Text,
  useToast
} from '@chakra-ui/react'
import { CreateEditVacationProps } from '.'
import { Form } from 'react-hook-form'
import { VacationFormSchemaType } from '../../../shared/schema/VacationFormSchema'
import { ETravelType } from '../../../shared/enum/ETravelType'
import { EVacationTarget } from '../../../shared/enum/EVacationTarget'
import { useCreateVacation, useVacationForm } from './hooks'
import { useQueryClient } from '@tanstack/react-query'

export function CreateEditVacation(props: CreateEditVacationProps) {
  const toast = useToast()
  const queryClient = useQueryClient()
  const onClose = () => props.onClose()

  const { mutate } = useCreateVacation({
    onSuccess: () => {
      toast({
        title: 'Férias criadas',
        description: 'Férias criadas com sucesso!',
        status: 'success',
        duration: 3000,
        isClosable: true
      })
      queryClient.invalidateQueries({ queryKey: ['all-vacations'] })
    }
  })

  const onSubmit = (data: VacationFormSchemaType) => {
    console.log(data)
    mutate(data)
    onClose()
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
      case ETravelType.REGIONAL:
        return 'Regional'
      default:
        return
    }
  }

  const getTargetLabel = (target: EVacationTarget) =>
    target === EVacationTarget.CHILL ? 'Descanso' : 'Turismo'

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
                <Select {...form.register('target')}>
                  {Object.keys(EVacationTarget).map((target) => {
                    return (
                      <option key={target} value={target}>
                        {getTargetLabel(target as EVacationTarget)}
                      </option>
                    )
                  })}
                </Select>
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
