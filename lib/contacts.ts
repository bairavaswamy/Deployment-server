import { initDB, closeDB } from "./db";
import type { Contact } from "./types";

export async function getContacts(): Promise<Contact[]> {
  const db = await initDB();
  return db.getAll("contacts");
}

export async function addContact(contact: Contact) {
  const db = await initDB();
  return db.add("contacts", contact);
}

export async function deleteContactById(id: number) {
  const db = await initDB();
  return db.delete("contacts", id);
}

export async function updateContactStatus(id: number, status: string) {
  const db = await initDB();
  const contact = await db.get("contacts", id);
  if (!contact) return;
  contact.status = status;
  return db.put("contacts", contact);
}

export function closeContactsDB() {
  closeDB();
}
