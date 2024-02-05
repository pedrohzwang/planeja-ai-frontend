import { Container, Spinner, Stack, Text } from '@chakra-ui/react'
import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'
import { useGetTodos } from '../hooks/useGetTodos'
import { useEffect, useState } from 'react'

export function TodosByUser() {
  const { data, isLoading } = useGetTodos()
  const [payload, setPayload] = useState<any>([])

  useEffect(() => {
    if (data) {
      setPayload([
        {
          userId: 1,
          completed: 55
        },
        {
          userId: 2,
          completed: 40
        },
        {
          userId: 3,
          completed: 78
        }
      ])
    }
  }, [data])

  if (isLoading) {
    return (
      <Container>
        <Stack>
          <Spinner />
          <Text>Carregando...</Text>
        </Stack>
      </Container>
    )
  }

  return (
    <Stack>
      <Text>Tarefas cumpridas por usuário</Text>
      {payload && (
        <LineChart
          width={500}
          height={300}
          data={payload!}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <XAxis dataKey='userId' />
          <YAxis dataKey='completed' />
          <Tooltip />
          <Legend />
          <Line
            type='monotone'
            dataKey='completed'
            stroke='#8884d8'
            activeDot={{ r: 8 }}
          />
        </LineChart>
      )}
      {!payload && (
        <Container>
          <Stack>
            <Spinner />
            <Text>Carregando...</Text>
          </Stack>
        </Container>
      )}
    </Stack>
  )
}
