import { Vacation } from '../shared/dto/Vacation'
import { httpClient } from '../shared/http/httpClient'

const baseURL = '/api/v1/vacations'

export async function listAllVacations(): Promise<Array<Vacation>> {
  return httpClient.get(baseURL).then((response) => response.data)
}
