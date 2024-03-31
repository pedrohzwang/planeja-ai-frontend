import { ETravelType } from '../enum/ETravelType'
import { EVacationTarget } from '../enum/EVacationTarget'

export interface Vacation {
  id: string
  description: string
  destiny: string
  startDate: Date
  endDate: Date
  type: ETravelType
  target: EVacationTarget
}
