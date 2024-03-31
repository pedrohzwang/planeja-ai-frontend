import { useForm } from 'react-hook-form'
import {
  VacationFormSchema,
  VacationFormSchemaType
} from '../../../../shared/schema/VacationFormSchema'
import { zodResolver } from '@hookform/resolvers/zod'

export function useVacationForm() {
  const form = useForm<VacationFormSchemaType>({
    resolver: zodResolver(VacationFormSchema),
    mode: 'all',
    reValidateMode: 'onChange'
  })

  return form
}
