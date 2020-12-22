import { TodoRepository } from '@/models/Todo/repository'
import { Todo } from '@/models/Todo/type'
import { useCallback, useEffect, useState } from 'react'
const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  useEffect(() => {
    ;(async () => {
      const todos = await TodoRepository.all()
      setTodos(todos)
    })()
  }, [])

  const [text, setText] = useState('')
  const handleInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }, [])

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const newTodo: Todo = {
        name: text,
        description: '',
        done: false,
      }
      await TodoRepository.create(newTodo)
      setTodos((prev) => [...prev, newTodo])
    },
    []
  )

  return (
    <>
      <h1>Todos</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={handleInput} />
        <button>追加</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li>{todo.name}</li>
        ))}
      </ul>
    </>
  )
}

export default Todos
