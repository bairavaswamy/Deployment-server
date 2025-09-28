// /lib/invoices.ts
import { initDB } from "./db";

export interface Invoice {
  id?: number;
  number: string;
  date: string;
  bookingIndex: number | null;
  booking: any;
  items: any[];
  labor: number;
  misc: number;
  discount: number;
  taxRate: number;
  subtotal: number;
  discountAmount: number;
  taxAmount: number;
  total: number;
  notes: string;
}

export async function addInvoice(invoice: Invoice) {
  const db = await initDB();
  return db.add("invoices", invoice);
}

export async function getInvoices() {
  const db = await initDB();
  return db.getAll("invoices");
}

export async function updateInvoice(invoice: Invoice) {
  const db = await initDB();
  if (!invoice.id) throw new Error("Invoice needs an id to update");
  return db.put("invoices", invoice);
}

export async function deleteInvoice(id: number) {
  const db = await initDB();
  return db.delete("invoices", id);
}
