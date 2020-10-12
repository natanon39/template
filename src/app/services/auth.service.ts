import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthConstants } from '../configs/auth-constans';
import { HttpService } from './http.service';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpService:HttpService,private storageService:StorageService,private router:Router) { }
  login(postData:any){
    return this.httpService.post('techmember.login',postData);
  }
  signup(postData:any){
    return this.httpService.post('techmember.register',postData);
  }
  logout()
  {
    this.storageService.removeValue(AuthConstants.AUTH).then(res=>{
      this.router.navigate(['login']);
    });
  }
}