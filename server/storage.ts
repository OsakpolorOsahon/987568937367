import { type Contact, type InsertContact, type PrayerRequest, type InsertPrayerRequest, type Volunteer, type InsertVolunteer } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Contact methods
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
  
  // Prayer request methods
  createPrayerRequest(request: InsertPrayerRequest): Promise<PrayerRequest>;
  getPrayerRequests(): Promise<PrayerRequest[]>;
  
  // Volunteer methods
  createVolunteer(volunteer: InsertVolunteer): Promise<Volunteer>;
  getVolunteers(): Promise<Volunteer[]>;
}

export class MemStorage implements IStorage {
  private contacts: Map<string, Contact>;
  private prayerRequests: Map<string, PrayerRequest>;
  private volunteers: Map<string, Volunteer>;

  constructor() {
    this.contacts = new Map();
    this.prayerRequests = new Map();
    this.volunteers = new Map();
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = randomUUID();
    const contact: Contact = { 
      ...insertContact, 
      id, 
      createdAt: new Date() 
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values());
  }

  async createPrayerRequest(insertRequest: InsertPrayerRequest): Promise<PrayerRequest> {
    const id = randomUUID();
    const request: PrayerRequest = { 
      ...insertRequest, 
      id, 
      createdAt: new Date(),
      isUrgent: insertRequest.isUrgent ?? "false"
    };
    this.prayerRequests.set(id, request);
    return request;
  }

  async getPrayerRequests(): Promise<PrayerRequest[]> {
    return Array.from(this.prayerRequests.values());
  }

  async createVolunteer(insertVolunteer: InsertVolunteer): Promise<Volunteer> {
    const id = randomUUID();
    const volunteer: Volunteer = { 
      ...insertVolunteer, 
      id, 
      createdAt: new Date(),
      experience: insertVolunteer.experience ?? null
    };
    this.volunteers.set(id, volunteer);
    return volunteer;
  }

  async getVolunteers(): Promise<Volunteer[]> {
    return Array.from(this.volunteers.values());
  }
}

export const storage = new MemStorage();
