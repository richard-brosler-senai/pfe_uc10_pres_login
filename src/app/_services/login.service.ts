import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Login } from '../model/login.model';
import * as bcrypt from 'bcryptjs';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  baseUrl = "http://localhost:3001/login";

  constructor( private http: HttpClient ) { }

  createLogin(login: Login): Observable<Login> {
    let txtSenha = login.senha;
    login.senha = bcrypt.hashSync(txtSenha, 10);
    return this.http.post<Login>(this.baseUrl,login);
  }

  read(): Observable<Login[]> {
    return this.http.get<Login[]>(this.baseUrl);
  }

  readById(id : Number): Observable<Login> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Login>(url);
  }
}
