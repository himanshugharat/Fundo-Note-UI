import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  postService(data,url, need=false ,header=null){
    return this.http.post(url,data,need &&header);
  }
  getService(url,need=false ,header=null){
    return this.http.get(url,need &&header);
  }
  deleteService(url){
    return this.http.delete(url)
  }
}
