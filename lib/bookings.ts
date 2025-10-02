import { initDB, closeDB } from "./db";
import type { Booking } from "./types";

export async function getBookings(): Promise<Booking[]> {
  const db = await initDB();
  return db.getAll("bookings");
}

export async function addBooking(booking: Booking) {
  const db = await initDB();
  return db.add("bookings", booking);
}

export async function deleteBookingById(id: number) {
  const db = await initDB();
  return db.delete("bookings", id);
}

export async function updateBookingStatus(id: number, status: string) {
  const db = await initDB();
  const booking = await db.get("bookings", id);
  if (!booking) return;
  booking.status = status;
  return db.put("bookings", booking);
}

export function closeBookingsDB() {
  closeDB();
}
