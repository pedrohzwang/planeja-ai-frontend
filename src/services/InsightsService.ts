import { analyticsHttpClient } from '../shared/http/httpClient'
import { TodoDTO } from '../shared/dto/Todo'

export async function getTodos(): Promise<Array<TodoDTO>> {
  return analyticsHttpClient.get('https://jsonplaceholder.typicode.com/todos')
}
