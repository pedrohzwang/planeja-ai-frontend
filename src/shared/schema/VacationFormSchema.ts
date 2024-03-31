import { z } from 'zod'
import { ETravelType } from '../enum/ETravelType'
import { EVacationTarget } from '../enum/EVacationTarget'

export const VacationFormSchema = z.object({
  id: z.string().uuid().optional(),
  description: z.string().trim().min(1, 'Preenchimento obrigatório!'),
  destiny: z.string().trim().min(1, 'Preenchimento obrigatório!'),
  startDate: z.coerce.date(),
  endDate: z.coerce.date(),
  type: z.nativeEnum(ETravelType).refine((opt) => opt.length > 0, {
    message: 'Preenchimento obrigatório!'
  }),
  target: z.nativeEnum(EVacationTarget).refine((opt) => opt.length > 0, {
    message: 'Preenchimento obrigatório!'
  })
})

export type VacationFormSchemaType = z.infer<typeof VacationFormSchema>
