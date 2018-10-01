import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Evenementdto} from '../Evenementdto';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type' : 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class EvenementserviceService {

  constructor(private http: HttpClient){} 

  findById(id: number): Observable<Evenementdto>{
  return this.http.get<Evenementdto>("http://localhost:8082/api/evenement/" + id);

  }

}
