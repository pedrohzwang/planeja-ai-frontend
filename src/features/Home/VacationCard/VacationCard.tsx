import { Card, Flex, Text } from '@chakra-ui/react'
import { VacationCardProps } from './VacationCard.type'

export function VacationCard({ vacation }: VacationCardProps) {
  return (
    <Card>
      <Text fontWeight={700} color='teal.500'>
        {vacation?.description}
      </Text>
      <Flex gap={3}>
        <Text>{vacation?.destiny}</Text>
        {/* <Text>{vacation?.startDate ?? <></>}</Text> */}
      </Flex>
    </Card>
  )
}
