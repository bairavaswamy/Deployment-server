import { openDB } from "idb";

export async function initDB() {
  return openDB("my-dashboard", 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains("contacts")) {
        db.createObjectStore("contacts", { keyPath: "id", autoIncrement: true });
      }
      if (!db.objectStoreNames.contains("bookings")) {
        db.createObjectStore("bookings", { keyPath: "id", autoIncrement: true });
      }
        if (!db.objectStoreNames.contains("invoices")) {
        db.createObjectStore("invoices", { keyPath: "id", autoIncrement: true });
      }
    },
  });
}
