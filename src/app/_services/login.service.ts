import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../model/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl = "http://localhost:3001/login";

  constructor( private http: HttpClient ) { }

  createLogin(login: Login): Observable<Login> {
    return this.http.post<Login>(this.baseUrl,login);
  }
  read(): Observable<Login[]> {
    return this.http.get<Login[]>(this.baseUrl);
  }
  readById(id : Number): Observable<Login> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Login>(url);
  }
  /*  
  readByLogin(login: string): Observable<Login> {
    let apoio = this.read();
    apoio.forEach(it =>{
      if (it[0].login == login)
        return it[0];
    })
  }
  */
}
