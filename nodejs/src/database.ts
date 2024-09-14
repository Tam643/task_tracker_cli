import * as fs from 'fs';

interface DatabaseOptions {
  filePath: string;
}

type normalizeData<T> = {
  data: { [key: number]: T; },
  ids: number[],
};

interface Entity {
  id?: number;
}

const initializeData = <T>(): normalizeData<T> => ({
  data: {},
  ids: [],
});

export class Database<T extends Entity> {
  private readonly filePath: string;
  private data: normalizeData<T> = initializeData<T>();
  private incrementalId = 1;

  constructor(options: DatabaseOptions) {
    this.filePath = options.filePath;
    this.loadData();
  }

  private loadData(): void {
    if (fs.existsSync(this.filePath)) {
      const rawData: T[] = JSON.parse(fs.readFileSync(this.filePath, 'utf-8'));
      this.data = rawData.reduce<normalizeData<T>>(
        (result, entity) => ({
          ...result,
          data: {
            ...result.data,
            [entity.id as number]: entity
          },
          ids: [...result.ids, entity.id as number]
        }),
        initializeData()
      );
      this.incrementalId = this.data.ids.length == 0 ? 1 : Math.max(...this.data.ids) + 1;
    }
  }

  private saveData(): void {
    const rawData = Object.values(this.data.data) as T[];
    fs.writeFileSync(this.filePath, JSON.stringify(rawData, null, 2), 'utf-8');
  }

  public getAll(): T[] {
    return this.data.ids.map((id: number) => this.data.data[id as number]) as T[] || [];
  }

  public findById(id: number): T | null {
    return this.data.data[id as number] as T || null;
  }

  public insert(entity: Omit<T, 'id'>): T | null {
    const id = this.incrementalId++;
    const newEntity = { ...entity, id: id as T['id'] } as T;
    this.data.data[id as number] = newEntity;
    this.data.ids.push(id as number);
    this.saveData();
    return this.findById(id) as T;
  }

  public update(id: number, newRecord: Partial<Omit<T, 'id'>>): T | null {
    if (!this.findById(id)) return null;
    this.data.data[id as number] = { ...this.data.data[id as number], ...newRecord } as T;
    this.saveData();
    return this.findById(id) as T;
  }

  public delete(id: number): boolean {
    if (!this.findById(id)) return false
    delete this.data.data[id as number];
    this.data.ids = this.data.ids.filter(i => i !== id as number);
    this.saveData();
    return true;
  }

  public delleteAll(): void {
    this.data = initializeData();
    this.saveData();
  }
}

