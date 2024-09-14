"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const task_1 = __importDefault(require("../src/task"));
(0, vitest_1.describe)('Task', () => {
    (0, vitest_1.afterEach)(() => {
        task_1.default.delleteAll();
    });
    (0, vitest_1.it)('should list all tasks', () => {
        const task = {
            descriptionn: 'Test Task',
            status: 'todo',
        };
        task_1.default.insert(task);
        const result = task_1.default.getAll();
        (0, vitest_1.expect)(result.length).toBe(1);
    });
    (0, vitest_1.it)('should add a new task', () => {
        const task = {
            descriptionn: 'Test Task',
            status: 'todo',
        };
        const result = task_1.default.insert(task);
        (0, vitest_1.expect)(result?.descriptionn).toBe(task.descriptionn);
        (0, vitest_1.expect)(result?.status).toBe(task.status);
    });
    (0, vitest_1.it)('should get a task', () => {
        const task = {
            descriptionn: 'Test Task',
            status: 'todo',
        };
        const result = task_1.default.insert(task);
        const result2 = task_1.default.findById(result?.id);
        (0, vitest_1.expect)(result2?.descriptionn).toBe(task.descriptionn);
    });
    (0, vitest_1.it)('should update a task', () => {
        const task = {
            descriptionn: 'Test Task',
            status: 'todo',
        };
        const result = task_1.default.insert(task);
        const updatedTask = {
            descriptionn: 'Updated Test Task',
            status: 'done',
        };
        const result2 = task_1.default.update(result?.id, updatedTask);
        (0, vitest_1.expect)(result2?.descriptionn).toBe(updatedTask.descriptionn);
        (0, vitest_1.expect)(result2?.status).toBe(updatedTask.status);
    });
    (0, vitest_1.it)('should delete a task', () => {
        const task = {
            descriptionn: 'Test Task',
            status: 'todo',
        };
        const result = task_1.default.insert(task);
        const result2 = task_1.default.delete(result?.id);
        (0, vitest_1.expect)(result2).toBe(true);
    });
    (0, vitest_1.it)('should mark a task in progress', () => {
        const task = {
            descriptionn: 'Test Task',
            status: 'todo',
        };
        const result = task_1.default.insert(task);
        const result2 = task_1.default.update(result?.id, { status: 'in-progress' });
        (0, vitest_1.expect)(result2?.status).toBe('in-progress');
    });
    (0, vitest_1.it)('should mark a task done', () => {
        const task = {
            descriptionn: 'Test Task',
            status: 'todo',
        };
        const result = task_1.default.insert(task);
        const result2 = task_1.default.update(result?.id, { status: 'done' });
        (0, vitest_1.expect)(result2?.status).toBe('done');
    });
    (0, vitest_1.it)('list all tasks in progress', () => {
        const task = {
            descriptionn: 'Test Task',
        };
        const newRecord = task_1.default.insert(task);
        task_1.default.update(newRecord?.id, { status: 'in-progress' });
        const result = task_1.default.getAll('in-progress');
        (0, vitest_1.expect)(result.length).toBe(1);
    });
    (0, vitest_1.it)('list all tasks done', () => {
        const task = {
            descriptionn: 'Test Task',
        };
        const newRecord = task_1.default.insert(task);
        task_1.default.update(newRecord?.id, { status: 'done' });
        const result = task_1.default.getAll('done');
        (0, vitest_1.expect)(result.length).toBe(1);
    });
});
//# sourceMappingURL=task.test.js.map