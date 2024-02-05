import { Button, Flex, Icon, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { Check, Home, Analyse } from 'styled-icons/boxicons-regular'

export const TopMenu = () => {
  const navigate = useNavigate()

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
        <Button leftIcon={<Icon as={Home} boxSize={6} />} color={'teal.600'} onClick={() => navigate('/')} >
          Início
        </Button>
        <Button leftIcon={<Icon as={Check} boxSize={6} />} color={'teal.600'} onClick={() => navigate('/concluded')}>
          Concluídas
        </Button>
        <Button leftIcon={<Icon as={Analyse} boxSize={6} />} color={'teal.600'} onClick={() => navigate('/insights')}>
          Insights
        </Button>
      </Flex>
    </Flex>
  )
}
