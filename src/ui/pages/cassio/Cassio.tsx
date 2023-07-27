import { useEffect } from "react"
import { useDogs } from "../../../hooks/useDogs/useDogs"

export default function Cassio() { 
  const dogs = useDogs()

  useEffect(() => {
    async function listarTodos() { 
      const response = await dogs.listarTodos()
      console.log(response)
    }

    listarTodos()
  }, [dogs])

  return <h1>Cássio</h1>
}