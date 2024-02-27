import { Center, Spinner, useToast } from '@chakra-ui/react'
import { Main } from '../../components/Main'
import { useVacations } from './hooks'
import { useEffect, useState } from 'react'
import { EmptyStateVacation } from './EmptyStateVacation'

export function Home() {
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

  if (isError || data?.length === 0) return <EmptyStateVacation />

  return (
    <Main>
      <span>{JSON.stringify(data)}</span>
    </Main>
  )
}
