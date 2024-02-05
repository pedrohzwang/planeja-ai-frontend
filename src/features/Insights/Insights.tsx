import { Flex } from '@chakra-ui/react'
import { Main } from '../../components/Main'
import { TodosByUser } from './TodosByUser'

export function Insights() {
  return (
    <Main>
      <Flex>
        <TodosByUser />
      </Flex>
    </Main>
  )
}
