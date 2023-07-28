import axios from 'axios';
import { _httpClient } from '../http/_http'

interface BreedsListAllResponse {
  [breed: string]: string[];
}

interface ListarTodosResponse {
  message: BreedsListAllResponse;
  status: string;
}

interface IuseDogs {
  listarTodos?: () => Promise<ListarTodosResponse>
  listar: { listagem: ListarTodosResponse; error: any; carregando: boolean; }
}

const get = (url: string) => _httpClient.get(url).then(res => res.data)

import useSWR from 'swr';

export function useDogs(): IuseDogs {
  function useListar() {
    const { data, error, isLoading } = useSWR('breeds/list/all', get)
    return { listagem: data, error, carregando: isLoading }
  }

  return {
    listar: useListar()
  }
}
