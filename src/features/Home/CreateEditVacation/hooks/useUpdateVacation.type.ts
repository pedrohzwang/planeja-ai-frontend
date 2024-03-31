import { IVacationPayload } from '../../../../shared/dto/IVacationPayload'

export interface IUseUpdateVacationParams {
  onSuccess?: () => void
}

export interface IUpdateVacationParams {
  uuid: string
  payload: IVacationPayload
}
