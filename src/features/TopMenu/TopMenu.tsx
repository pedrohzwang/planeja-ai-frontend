import { Box, Button, Container, Flex, Icon, Text } from '@chakra-ui/react'
import { Home } from '@styled-icons/boxicons-regular/Home'
import { Check } from 'styled-icons/boxicons-regular'

export const TopMenu = () => {
  return (
    <Flex
      as='header'
      align='center'
      padding='2'
      bg='teal.500'
      color='white'
      gap={20}
    >
      <Text fontSize='2xl' fontWeight='bold' pl={10}>
        Planeja aí!
      </Text>
      <Flex justify={'left'} gap={5}>
        <Button leftIcon={<Icon as={Home} boxSize={6} />} color={'teal.600'}>
          Início
        </Button>
        <Button leftIcon={<Icon as={Check} boxSize={6} />} color={'teal.600'}>
          Concluídas
        </Button>
      </Flex>
    </Flex>
  )
}
