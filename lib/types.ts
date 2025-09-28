export interface Contact {
  id?: number;
  name: string;
  email: string;
  message: string;
  status?: string;
}

export interface Booking {
  id?: number;
  name: string;
  phone: string;
  service: string;
  date: string;
  address: string;
  status?: string;
}
