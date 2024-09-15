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
exports.Database = void 0;
const fs = __importStar(require("fs"));
const initializeData = () => ({
    data: {},
    ids: [],
});
class Database {
    filePath;
    data = initializeData();
    incrementalId = 1;
    constructor(options) {
        this.filePath = options.filePath;
        this.loadData();
    }
    loadData() {
        if (fs.existsSync(this.filePath)) {
            const rawData = JSON.parse(fs.readFileSync(this.filePath, 'utf-8'));
            this.data = rawData.reduce((result, entity) => ({
                ...result,
                data: {
                    ...result.data,
                    [entity.id]: entity
                },
                ids: [...result.ids, entity.id]
            }), initializeData());
            this.incrementalId = this.data.ids.length == 0 ? 1 : Math.max(...this.data.ids) + 1;
        }
    }
    saveData() {
        const rawData = Object.values(this.data.data);
        fs.writeFileSync(this.filePath, JSON.stringify(rawData, null, 2), 'utf-8');
    }
    getAll() {
        return this.data.ids.map((id) => this.data.data[id]) || [];
    }
    findById(id) {
        return this.data.data[id] || null;
    }
    insert(entity) {
        const id = this.incrementalId++;
        const newEntity = { ...entity, id: id };
        this.data.data[id] = newEntity;
        this.data.ids.push(id);
        this.saveData();
        return this.findById(id);
    }
    update(id, newRecord) {
        if (!this.findById(id))
            return null;
        this.data.data[id] = { ...this.data.data[id], ...newRecord };
        this.saveData();
        return this.findById(id);
    }
    delete(id) {
        if (!this.findById(id))
            return false;
        delete this.data.data[id];
        this.data.ids = this.data.ids.filter(i => i !== id);
        this.saveData();
        return true;
    }
    delleteAll() {
        this.data = initializeData();
        this.saveData();
    }
}
exports.Database = Database;
//# sourceMappingURL=database.js.map