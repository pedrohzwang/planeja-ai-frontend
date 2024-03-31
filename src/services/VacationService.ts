import { IVacationPayload } from '../shared/dto/IVacationPayload'
import { Vacation } from '../shared/dto/Vacation'
import { httpClient } from '../shared/http/httpClient'
import { IUpdateVacationParams } from './params/IUpdateVacationParams'

const baseURL = '/api/v1/vacations'

export async function listAllVacations(): Promise<Array<Vacation>> {
  return httpClient.get(baseURL).then((response) => response.data)
}

export async function createVacation(
  payload: IVacationPayload
): Promise<string> {
  return httpClient.post(baseURL, payload).then((response) => response.data)
}

export async function updateVacation(
  params: IUpdateVacationParams
): Promise<void> {
  return httpClient
    .put(`${baseURL}/${params.uuid}`, params.payload)
    .then((response) => response.data)
}
