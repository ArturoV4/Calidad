import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  

  constructor(
    private http: HttpClient
  ) { }

  urlBase="https://localhost:7235/api/Usuario/GetUsuarios/"
  headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

  // consultarCredenciales(post: any): Observable<any> {
  //   const url = `${environment.urlBAse}${environment.pathUrl.urlGetProductos}`;    
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',        
  //       'Access-Control-Allow-Origin': '*'
  //     })
  //   }
  //   return this.http.post(url, post, httpOptions);
  // }

  consultarCredencial(cedula: string, contra: string): Observable<any> {    
    const post = {
      cedula,
      contra
    };
    const url = `${environment.urlBAse}${environment.pathUrl.urlGetCredenciales}`;    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',        
        'Access-Control-Allow-Origin': '*'
      })
    }
    console.log(url, post);
    return this.http.post(url, post, httpOptions);
  }

  AddCliente(cedula: string, contra: string){
    const urlGetById="http://localhost:4200/login"
    let body = JSON.stringify({cedula: cedula,contra:contra});
    return this.http.post<any>(urlGetById,body, {headers: this.headers});
    // const httpOptions = {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ cedula: cedula, contra: contra }),
    //   };
    // // console.log(url, post);
    // return this.http.post(url, httpOptions);
  }

}
