import { getRepository } from 'typeorm';
import { TodoEntity } from './todo.entity';

export class TodoServices {
  private static instance;

  public static get Services(): TodoServices {
    if (!this.instance) {
      return new TodoServices();
    }
    return this.instance;
  }

  public async getAllTodos(): Promise<TodoEntity[]> {
    try {
      const todoRepository = await getRepository(TodoEntity);
      return todoRepository.find();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  }
}
