import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HTTP } from '@ionic-native/http/ngx';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClients:HTTP) {}

   post(service:String,data:any) {
    let postData={
      service_name:service,
      filter:data
    }
    let url = environment.apiURL;
    console.log(postData);
    return this.httpClients.post(url,postData,{'Content-Type':'application/json'});
  }
}

