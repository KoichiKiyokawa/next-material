import { API, graphqlOperation, GraphQLResult } from '@aws-amplify/api'
import { listTodos } from '@/graphql/queries'
import { createTodo } from '@/graphql/mutations'
import { CreateTodoInput, ListTodosQuery } from '@/API'
import { Todo } from './type'

export class TodoRepository {
  static async create(newTodo: Todo): Promise<void> {
    await API.graphql(graphqlOperation(createTodo, { input: newTodo }))
    return
  }

  static async all(): Promise<Todo[]> {
    const result = (await API.graphql(
      graphqlOperation(listTodos)
    )) as GraphQLResult<ListTodosQuery>
    return (
      result.data?.listTodos?.items?.flatMap((d) =>
        d == null ? [] : this.pick(d)
      ) ?? []
    )
  }

  private static pick(data: CreateTodoInput): CreateTodoInput {
    return {
      name: data.name,
      description: data.description,
      done: data.done,
      createdAt: data.createdAt,
    }
  }
}
