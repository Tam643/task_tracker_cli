"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const database_1 = require("../src/database");
const fs = __importStar(require("fs"));
const filePath = './test.json';
(0, vitest_1.describe)('Database', () => {
    let db;
    (0, vitest_1.beforeEach)(() => {
        db = new database_1.Database({
            filePath,
        });
    });
    (0, vitest_1.afterEach)(() => {
        db.delleteAll();
    });
    (0, vitest_1.afterAll)(() => {
        fs.unlinkSync(filePath);
    });
    (0, vitest_1.it)('should add a new test', () => {
        const test = { title: 'Test Task', description: '', completed: false };
        const dbTest = db.insert(test);
        (0, vitest_1.expect)(dbTest?.title).toBe(test.title);
    });
    (0, vitest_1.it)('should update a test', () => {
        const test = { title: 'Updated Test Task', description: '', completed: false };
        const dbTest = db.insert(test);
        (0, vitest_1.expect)(dbTest?.title).toBe(test.title);
    });
    (0, vitest_1.it)('should list all tests', () => {
        const test = { title: 'List Test Task', description: '', completed: false };
        db.insert(test);
        const tests = db.getAll();
        (0, vitest_1.expect)(tests.length).toBe(1);
    });
    (0, vitest_1.it)('should delete a test', () => {
        const test = { title: 'Deleted Test Task', description: '', completed: false };
        let dbTest = db.insert(test);
        db.delete(dbTest?.id);
        dbTest = db.findById(dbTest?.id);
        (0, vitest_1.expect)(dbTest).toBe(null);
    });
});
//# sourceMappingURL=database.test.js.map