import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }
  setUseconnected(user: any) {
    localStorage.setItem('userconnected', JSON.stringify(user.name,));
    localStorage.setItem('type', JSON.stringify(user.type));
    localStorage.setItem('email', JSON.stringify(user.email));
    localStorage.setItem('userid', JSON.stringify(user._id));
  }
  getUseconnected() {
    return JSON.parse(localStorage.getItem('userconnected') || 'null');
  }
}
