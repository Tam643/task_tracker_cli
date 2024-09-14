import { describe, it, expect, beforeEach, afterEach, afterAll } from 'vitest';
import { Database } from '../src/database';
import * as fs from 'fs';

interface Test {
    id: number;
    title: string;
    description: string;
    completed: boolean;
}

const filePath = './test.json';

describe('Database', () => {
    let db: Database<Test>;

    beforeEach(() => {
        db = new Database<Test>({
            filePath,
        });
    });

    afterEach(() => {
        db.delleteAll();
    });

    afterAll(() => {
        fs.unlinkSync(filePath);
    });

    it('should add a new test', () => {
        const test = { title: 'Test Task', description: '', completed: false };
        const dbTest =db.insert(test);
        expect(dbTest?.title).toBe(test.title);
    });

    it('should update a test', () => {
        const test = { title: 'Updated Test Task', description: '', completed: false };
        const dbTest = db.insert(test);
        expect(dbTest?.title).toBe(test.title);
    });

    it('should list all tests', () => {
        const test = { title: 'List Test Task', description: '', completed: false };
        db.insert(test);
        const tests = db.getAll();
        expect(tests.length).toBe(1);
    });

    it('should delete a test', () => {
        const test = { title: 'Deleted Test Task', description: '', completed: false };
        let dbTest = db.insert(test);
        db.delete(dbTest?.id as number);
        dbTest = db.findById(dbTest?.id as number);
        expect(dbTest).toBe(null);
    });

});