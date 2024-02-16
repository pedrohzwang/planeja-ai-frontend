import { httpClient } from "../shared/http/httpClient"

const baseURL = '/v1/vacations'

export async function listAllVacations() {
    return httpClient.get(baseURL).then((response) => response.data)
}