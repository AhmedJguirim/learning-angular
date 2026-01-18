import { TestBed } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { User } from '../models/User.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: User = {
    id: 'e7b8c9d0-1234-5678-90ab-cdef12345681',
    name: 'James Wilson',
    email: 'james.wilson@company.com',
    role: 'Admin'
  };

  getCurrentUser(): User {
    return this.currentUser;
  }
}