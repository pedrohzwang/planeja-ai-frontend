import { IVacationPayload } from '../../shared/dto/IVacationPayload'

export interface IUpdateVacationParams {
  uuid: string
  payload: IVacationPayload
}
