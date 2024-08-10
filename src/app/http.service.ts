import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEmployee } from './interfaces/employee';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  apiUrl = "https://localhost:7231";
  http = inject(HttpClient);
  constructor() { }

  getAllEmployee(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this.apiUrl+"/api/Employee");
  }

  createEmployee(employee: IEmployee) {
    return this.http.post(this.apiUrl + '/api/Employee', employee);
  }
}
