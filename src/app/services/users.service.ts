import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  
  usersUrl = 'https://us-central1-chateau-uae.cloudfunctions.net/user';

  constructor(private http: HttpClient) {}

  addItem(item: any) {
    this.http.post(this.usersUrl, item)
  }

  getItems() {
    return this.http.get(this.usersUrl)
  }

  clearItems() {
  }
}
