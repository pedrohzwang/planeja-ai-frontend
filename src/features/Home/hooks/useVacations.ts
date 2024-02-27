import { useQuery } from '@tanstack/react-query'
import { listAllVacations } from '../../../services/VacationService'

export function useVacations() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['all-vacations'],
    queryFn: async () => listAllVacations(),
    retry: false
  })

  return {
    data,
    isError,
    isLoading
  }
}
