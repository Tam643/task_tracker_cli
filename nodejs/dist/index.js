#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const { Command } = require("commander");
const figlet = require("figlet");
const task_1 = __importDefault(require("./task"));
const program = new Command();
function main() {
    program
        .version("0.0.1")
        .description("Manage your tasks using command line");
    program
        .command('add')
        .description('Add a new task')
        .argument('<description>', 'Task description')
        .action((description) => {
        const task = {
            descriptionn: description,
            status: 'todo',
        };
        const result = task_1.default.insert(task);
        console.log(`Task added successfully (ID: ${result?.id})`);
    });
    program
        .command('update')
        .description('Add a new task')
        .argument('<id>', 'Task id')
        .argument('<description>', 'Task description')
        .action((id, description) => {
        const task = {
            descriptionn: description,
        };
        const result = task_1.default.update(id, task);
        console.log(`Task updated successfully (ID: ${result?.id})`);
    });
    program
        .command('delete')
        .description('Delete a task')
        .argument('<id>', 'Task id')
        .action((id) => {
        task_1.default.delete(id);
        console.log(`Task deleted successfully (ID: ${id})`);
    });
    program
        .command('list [status]')
        .description('List all tasks')
        .action((status) => {
        const tasks = task_1.default.getAll(status);
        console.table(tasks, ['id', 'descriptionn', 'status', 'createAt', 'updateAt']);
    });
    program
        .command('mark-in-progress')
        .description('Mark a task in progress')
        .argument('<id>', 'Task id')
        .action((id) => {
        task_1.default.update(id, { status: 'in-progress' });
        console.log(`Task marked in progress successfully (ID: ${id})`);
    });
    program
        .command('mark-done')
        .description('Mark a task done')
        .argument('<id>', 'Task id')
        .action((id) => {
        task_1.default.update(id, { status: 'done' });
        console.log(`Task marked done successfully (ID: ${id})`);
    });
    program.addHelpText('beforeAll', figlet.textSync('Task CLI', { horizontalLayout: 'full' }));
    program.parse(process.argv);
}
main();
//# sourceMappingURL=index.js.map