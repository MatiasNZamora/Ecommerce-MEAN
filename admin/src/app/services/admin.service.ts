import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from './Global';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  public url; 
  constructor(
    private _http:HttpClient,
  ) {
    this.url = GLOBAL.url
  };

  login_admin(data:any):Observable<any>{
    let headers = new HttpHeaders().set('Content-type', 'application/json');
    return this._http.post(this.url+'/loginAdmin', data, {headers:headers});
  };

  getToken(){
    return localStorage.getItem('token');
  };

  public isAuthenticate(allowrRoles:string[]):boolean{
    //traigo el token del local storage
    const token:any = localStorage.getItem('token');

    // verifica la existencia de un token
    if(!token){
      return false;
    }

    try {
      // utilizando jwt lo envio a una varaible, luego lo decodifico y verifico si el token es valido
      const helper = new JwtHelperService();
      var decodeToken = helper.decodeToken(token);
      // console.log(decodeToken);
      if(!decodeToken){
        // console.log('no access');
        localStorage.removeItem('token');
        return false;
      };
    } catch (error) {
      localStorage.removeItem('token');
      return false;
    };



    return allowrRoles.includes(decodeToken['role']);
  };
};
