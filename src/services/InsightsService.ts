import axios from 'axios'
import { httpClient } from '../shared/http/httpClient'
import { TodoDTO } from '../shared/dto/Todo'

export async function getTodos(): Promise<Array<TodoDTO>> {
  return httpClient.get('https://jsonplaceholder.typicode.com/todos')
}
