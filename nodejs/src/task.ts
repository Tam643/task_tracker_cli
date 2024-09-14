import path from 'path';
import { Database as BaseDatabase } from './database';

const dbPath = path.join(__dirname, '../db.json');

export type statusTask = 'todo' | 'in-progress' | 'done';

export interface Task {
  id?: number;
  descriptionn: string;
  status?: statusTask;
  createAt?: string;
  updateAt?: string;
}

const now = () => new Date().toLocaleString(undefined, {year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', hour12: false, minute:'2-digit', second:'2-digit'});

class Database<T extends Task> extends BaseDatabase<T> {
  public insert(entity: Omit<T, 'id'>): T | null {
    const result = super.insert({ ...entity, status: 'todo', createAt: now() });
    return result;
  }

  public update(id: number, newRecord: Partial<Omit<T, 'id'>>): T | null {
    const result = super.update(id, { ...newRecord, updateAt: now() });
    return result;
  }

  public getAll(status?: statusTask): T[] {
    let result = super.getAll();
    if (status) {
      result = result.filter((task) => task.status === status);
    }
    return result;
  }

}

const db = new Database<Task>({ filePath: dbPath });

export default db;
