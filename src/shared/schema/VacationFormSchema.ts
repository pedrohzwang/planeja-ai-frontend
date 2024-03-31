import { z } from 'zod'

export const VacationFormSchema = z.object({
  id: z.string().uuid().optional(),
  description: z.string().trim().min(1, 'Preenchimento obrigatório!'),
  destiny: z.string().trim().min(1, 'Preenchimento obrigatório!'),
  startDate: z.date(),
  endDate: z.date(),
  type: z
    .enum(['REGIONAL', 'COASTLINE', 'NATIONAL', 'INTERNATIONAL'])
    .refine((opt) => opt.length > 0, {
      message: 'Preenchimento obrigatório!'
    }),
  target: z.enum(['CHILL', 'TOURISM']).refine((opt) => opt.length > 0, {
    message: 'Preenchimento obrigatório!'
  })
})

export type VacationFormSchemaType = z.infer<typeof VacationFormSchema>
