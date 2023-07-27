import { _httpClient } from '../http/_http'

interface BreedsListAllResponse {
  [breed: string]: string[];
}

interface ListarTodosResponse {
  message: BreedsListAllResponse;
  status: string;
}

interface IuseDogs {
  listarTodos: () => Promise<ListarTodosResponse>
}

export function useDogs(): IuseDogs {
  async function listarTodos(): Promise<ListarTodosResponse> {
    const response =  await _httpClient.get('breeds/list/all')
    return response.data
  }

  return {
    listarTodos
  }
} 

