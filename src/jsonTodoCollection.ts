import { LowSync } from "lowdb";
import { TodoCollection } from "./todoCollection.js";
import { TodoItem } from "./todoItem.js";
import { JSONFileSync } from "lowdb/node";

type SchemaType = {
  tasks: { id: number; task: string; complete: boolean }[];
};

export class JsonTodoCollection extends TodoCollection {
  private database: LowSync<SchemaType>;

  constructor(public userName: string, todoItems: TodoItem[] = []) {
    super(userName, []);
    this.database = new LowSync(new JSONFileSync("Todos.json"));
    this.database.read();

    if (this.database.data == null) {
      this.database.data = { tasks: todoItems };
      this.database.write();
      todoItems.forEach((item) => this.itemMap.set(item.id, item));
    } else {
      this.database.data.tasks.forEach((item) =>
        this.itemMap.set(
          item.id,
          new TodoItem(item.id, item.task, item.complete)
        )
      );
    }
  }

  addTodo(task: string): number {
    let result = super.addTodo(task);
    this.storeTasks();
    return result;
  }

  markComplete(id: number, complete: boolean): void {
    super.markComplete(id, complete);
    this.storeTasks();
  }

  removeComplete(): void {
    super.removeComplete();
    this.storeTasks();
  }

  private storeTasks(): void {
    this.database.data.tasks = [...this.itemMap.values()];
    this.database.write();
  }
}
