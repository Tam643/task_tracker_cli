import { describe, it, expect, beforeEach, afterEach, afterAll } from 'vitest';
import dbTask, { statusTask, Task} from '../src/task';

describe('Task', () => {

    afterEach(() => {
        dbTask.delleteAll();
    });
    
    it('should list all tasks', () => {
        const task: Task = {
            descriptionn: 'Test Task',
            status: 'todo',
        }
        dbTask.insert(task);
        const result = dbTask.getAll();
        expect(result.length).toBe(1);
    });
    
    it('should add a new task', () => {
        const task: Task = {
            descriptionn: 'Test Task',
            status: 'todo',
        }
        const result = dbTask.insert(task);
        expect(result?.descriptionn).toBe(task.descriptionn);
        expect(result?.status).toBe(task.status);
    });

    it('should get a task', () => {
        const task: Task = {
            descriptionn: 'Test Task',
            status: 'todo',
        }
        const result = dbTask.insert(task);
        const result2 = dbTask.findById(result?.id as number);
        expect(result2?.descriptionn).toBe(task.descriptionn);
    });

    it('should update a task', () => {
        const task: Task = {
            descriptionn: 'Test Task',
            status: 'todo',
        }
        const result = dbTask.insert(task);
        const updatedTask: Task = {
            descriptionn: 'Updated Test Task',
            status: 'done',
        }
        const result2 = dbTask.update(result?.id as number, updatedTask);
        expect(result2?.descriptionn).toBe(updatedTask.descriptionn);
        expect(result2?.status).toBe(updatedTask.status);
    });

    it('should delete a task', () => {
        const task: Task = {
            descriptionn: 'Test Task',
            status: 'todo',
        }
        const result = dbTask.insert(task);
        const result2 = dbTask.delete(result?.id as number);
        expect(result2).toBe(true);
    });

    it('should mark a task in progress', () => {
        const task: Task = {
            descriptionn: 'Test Task',
            status: 'todo',
        }
        const result = dbTask.insert(task);
        const result2 = dbTask.update(result?.id as number, { status: 'in-progress' });
        expect(result2?.status).toBe('in-progress');
    });

    it('should mark a task done', () => {
        const task: Task = {
            descriptionn: 'Test Task',
            status: 'todo',
        }
        const result = dbTask.insert(task);
        const result2 = dbTask.update(result?.id as number, { status: 'done' });
        expect(result2?.status).toBe('done');
    });

    it('list all tasks in progress', () => {
        const task: Task = {
            descriptionn: 'Test Task',
        }
        const newRecord = dbTask.insert(task);
        dbTask.update(newRecord?.id as number, { status: 'in-progress' });
        const result = dbTask.getAll('in-progress');
        expect(result.length).toBe(1);
    });

    it('list all tasks done', () => {
        const task: Task = {
            descriptionn: 'Test Task',
        }
        const newRecord = dbTask.insert(task);
        dbTask.update(newRecord?.id as number, { status: 'done' });
        const result = dbTask.getAll('done');
        expect(result.length).toBe(1);
    });

});