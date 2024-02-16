import { useQuery } from '@tanstack/react-query'
import { listAllVacations } from '../../../services/VacationService'

export function useVacations() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['all-vacations'],
    queryFn: async () => listAllVacations()
  })

  return {
    data,
    isError,
    isLoading
  }
}
