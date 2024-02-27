import { Button, Center, Text } from '@chakra-ui/react'
import { Main } from '../../../components/Main'
import { CreateEditVacation } from '../CreateEditVacation'
import { useState } from 'react'

export function EmptyStateVacation() {
  const [visibleCreate, setVisibleCreate] = useState(false)

  return (
    <Main>
      <Center h={'100%'} flexDirection={'column'} gap={5}>
        <Text fontSize={'xl'} color={'teal.500'}>
          Ops! Nenhum período de férias cadastrado ainda!
        </Text>
        <Button
          mr={3}
          bg='teal.500'
          textColor={'white'}
          onClick={() => setVisibleCreate(true)}
        >
          Criar férias
        </Button>
      </Center>

      <CreateEditVacation
        visible={visibleCreate}
        onClose={() => setVisibleCreate(false)}
      />
    </Main>
  )
}
