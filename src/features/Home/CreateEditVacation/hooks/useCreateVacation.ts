import { useMutation } from '@tanstack/react-query'
import { createVacation } from '../../../../services/VacationService'
import { IVacationPayload } from '../../../../shared/dto/IVacationPayload'
import { IUseCreateVacationParams } from './useCreateVacation.type'

export function useCreateVacation(params?: IUseCreateVacationParams) {
  const { data, isPending, isError, mutate } = useMutation({
    mutationKey: ['create-vacation'],
    mutationFn: async (payload: IVacationPayload) => createVacation(payload),
    onSuccess: () => {
      if (params?.onSuccess) params.onSuccess()
    }
  })

  return {
    data,
    isError,
    isPending,
    mutate
  }
}
