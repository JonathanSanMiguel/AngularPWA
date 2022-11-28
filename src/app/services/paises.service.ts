import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  REST_API: String = 'https://restcountries.com/v3.1/lang/spa'

  constructor(private http: HttpClient) { }
  //Hacer una peticion GET al EndPoint

}//PaisesService
