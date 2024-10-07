import SQLite from 'react-native-sqlite-storage';

SQLite.enablePromise(true);

class DatabaseService {
  private database: SQLite.SQLiteDatabase | null = null;

  async initDatabase() {
    try {
      this.database = await SQLite.openDatabase({ name: 'HouseCleaningApp.db', location: 'default' });
      await this.createTables();
    } catch (error) {
      console.error('Error initializing database:', error);
    }
  }

  private async createTables() {
    const queries = [
      `CREATE TABLE IF NOT EXISTS tasks (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        frequency TEXT,
        area TEXT,
        dueDate TEXT,
        timeSpent INTEGER,
        progress INTEGER
      )`,
      `CREATE TABLE IF NOT EXISTS supplies (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        quantity INTEGER,
        cost REAL
      )`
    ];

    for (const query of queries) {
      await this.database?.executeSql(query);
    }
  }

  async addTask(task: Omit<Task, 'id'>) {
    const { name, frequency, area, dueDate, timeSpent, progress } = task;
    const query = `INSERT INTO tasks (name, frequency, area, dueDate, timeSpent, progress) 
                   VALUES (?, ?, ?, ?, ?, ?)`;
    await this.database?.executeSql(query, [name, frequency, area, dueDate.toISOString(), timeSpent, progress]);
  }

  async getTasks(): Promise<Task[]> {
    const query = 'SELECT * FROM tasks';
    const [results] = await this.database?.executeSql(query) || [{ rows: { raw: () => [] } }];
    return results.rows.raw().map((row: any) => ({
      ...row,
      dueDate: new Date(row.dueDate)
    }));
  }

  async addSupply(supply: Omit<Supply, 'id'>) {
    const { name, quantity, cost } = supply;
    const query = `INSERT INTO supplies (name, quantity, cost) VALUES (?, ?, ?)`;
    await this.database?.executeSql(query, [name, quantity, cost]);
  }

  async getSupplies(): Promise<Supply[]> {
    const query = 'SELECT * FROM supplies';
    const [results] = await this.database?.executeSql(query) || [{ rows: { raw: () => [] } }];
    return results.rows.raw();
  }

  // Add more methods for updating and deleting tasks and supplies as needed
}

export const databaseService = new DatabaseService();