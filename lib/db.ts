import { openDB, IDBPDatabase } from "idb";

let db: IDBPDatabase | null = null;

export async function initDB() {
  if (db) return db;
  db = await openDB("my-dashboard", 1, {
    upgrade(database) {
      if (!database.objectStoreNames.contains("contacts")) {
        database.createObjectStore("contacts", { keyPath: "id", autoIncrement: true });
      }
      if (!database.objectStoreNames.contains("bookings")) {
        database.createObjectStore("bookings", { keyPath: "id", autoIncrement: true });
      }
      if (!database.objectStoreNames.contains("invoices")) {
        database.createObjectStore("invoices", { keyPath: "id", autoIncrement: true });
      }
    },
  });
  return db;
}

export function closeDB() {
  if (db) {
    db.close();
    db = null;
  }
}
