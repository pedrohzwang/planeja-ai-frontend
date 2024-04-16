import {
  Button,
  Center,
  Flex,
  Icon,
  Spinner,
  Stack,
  useToast
} from '@chakra-ui/react'
import { Main } from '../../components/Main'
import { useVacations } from './hooks'
import { useEffect, useState } from 'react'
import { EmptyStateVacation } from './EmptyStateVacation'
import { VacationCard } from './VacationCard'
import { Add } from 'styled-icons/fa-solid'
import { CreateEditVacation } from './CreateEditVacation'

export function Home() {
  const [visibleCreateEdit, setVisibleCreateEdit] = useState(false)
  const { data, isLoading, isError } = useVacations()
  const toast = useToast()

  useEffect(() => {
    if (isError) {
      toast({
        title: 'Falha ao obter informações das férias',
        description:
          'Ocorreu um erro na busca das suas férias. Tente novamente mais tarde.',
        status: 'error',
        duration: 3000,
        isClosable: true
      })
    }
  }, [isError])

  if (isLoading)
    return (
      <Main>
        <Center h={'100%'}>
          <Spinner size={'xl'} />
        </Center>
      </Main>
    )

  if (isError || data?.length === 0 || !data) return <EmptyStateVacation />

  return (
    <Main>
      <Flex mb={3} justify='end'>
        <Button
          leftIcon={<Icon as={Add} boxSize={6} />}
          backgroundColor={'teal.600'}
          color={'white'}
          onClick={() => setVisibleCreateEdit(true)}
        >
          Adicionar
        </Button>
      </Flex>
      <Stack gap={3}>
        {data.map((vacation) => (
          <VacationCard vacation={vacation} />
        ))}
      </Stack>
      <CreateEditVacation
        onCancel={() => setVisibleCreateEdit(false)}
        visible={visibleCreateEdit}
        onClose={() => setVisibleCreateEdit(false)}
      />
    </Main>
  )
}
