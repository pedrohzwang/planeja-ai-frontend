import { useQuery } from '@tanstack/react-query'
import { getTodos } from '../../../services/InsightsService'
import { Converters } from '../../../shared/converters/Converters'

export function useGetTodos() {
  const { data, isLoading } = useQuery({
    queryKey: ['todos'],
    queryFn: async () => await getTodos(),
    staleTime: Converters.minutesToMs(3),
    gcTime: Converters.minutesToMs(3)
  })

  return {
    data,
    isLoading
  }
}
