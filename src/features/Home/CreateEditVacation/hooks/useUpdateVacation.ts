import { useMutation } from '@tanstack/react-query'
import { updateVacation } from '../../../../services/VacationService'
import { IUpdateVacationParams, IUseUpdateVacationParams } from '.'

export function useUpdateVacation(params?: IUseUpdateVacationParams) {
  const { data, isPending, isError } = useMutation({
    mutationKey: ['update-vacation'],
    mutationFn: async (params: IUpdateVacationParams) => updateVacation(params)
  })

  return {
    data,
    isError,
    isPending
  }
}
