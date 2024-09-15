"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const database_1 = require("./database");
const dbPath = path_1.default.join(__dirname, '../db.json');
const now = () => new Date().toLocaleString(undefined, { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', hour12: false, minute: '2-digit', second: '2-digit' });
class Database extends database_1.Database {
    insert(entity) {
        const result = super.insert({ ...entity, status: 'todo', createAt: now() });
        return result;
    }
    update(id, newRecord) {
        const result = super.update(id, { ...newRecord, updateAt: now() });
        return result;
    }
    getAll(status) {
        let result = super.getAll();
        if (status) {
            result = result.filter((task) => task.status === status);
        }
        return result;
    }
}
const db = new Database({ filePath: dbPath });
exports.default = db;
//# sourceMappingURL=task.js.map