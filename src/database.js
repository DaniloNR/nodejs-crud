import fs from "node:fs/promises";

const DATABASE_PATH = new URL("../db.json", import.meta.url);

export class Database {
  #database = {};

  constructor() {
    fs.readFile(DATABASE_PATH, "utf8")
      .then(this.#loadDatabase.bind(this))
      .catch(this.#persist.bind(this));
  }

  select(table) {
    return this.#database[table] ?? [];
  }

  insert(table, data) {
    if (Array.isArray(this.#database[table])) {
      this.#database[table].push(data);
    } else {
      this.#database[table] = [data];
    }

    this.#persist();
    return data;
  }

  delete(table, id) {
    const rowIndex = this.#database[table].findIndex((row) => row.id === id);
    if (rowIndex > -1) {
      this.#database[table].splice(rowIndex, 1);
      this.#persist();
    }
  }

  #persist() {
    fs.writeFile(DATABASE_PATH, JSON.stringify(this.#database));
  }

  #loadDatabase(data) {
    this.#database = JSON.parse(data);
  }
}
