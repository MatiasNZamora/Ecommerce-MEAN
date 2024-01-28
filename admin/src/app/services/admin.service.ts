import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from './Global';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  public url; 
  constructor() {
    this.url = GLOBAL.url
  };
};
