import { useDogs } from "../../../hooks/useDogs/useDogs"


export default function Cassio() {
  const { listar } = useDogs()
  return (
    <div>
      <span>{listar.carregando ? 'carregando' : 'carreguei'}</span>
      <pre>{JSON.stringify(listar.listagem?.message, null, 2)}</pre>
      <pre>{JSON.stringify(listar.error)}</pre>
    </div>

  )
} 