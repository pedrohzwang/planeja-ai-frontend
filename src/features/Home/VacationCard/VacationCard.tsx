import { Box, Card, Checkbox, Flex, Stack, Text } from '@chakra-ui/react'
import { VacationCardProps } from './VacationCard.type'

export function VacationCard({ vacation }: VacationCardProps) {
  return (
    <Card bg='gray.200' p={4}>
      <Flex justify='space-between' align='center'>
        <Box>
          <Text fontWeight={700} color='teal.500'>
            {vacation?.description}
          </Text>
          <Flex gap={3}>
            <Text>{vacation?.destiny}</Text>
            {/* <Text>{vacation?.startDate ?? <></>}</Text> */}
          </Flex>
        </Box>
      </Flex>
    </Card>
  )
}
