import { Vacation } from './Vacation'

export interface IVacationPayload extends Omit<Vacation, 'id'> {}
