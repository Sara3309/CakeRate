import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { identifierModuleUrl } from '@angular/compiler';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient, private router: Router){}



  addCake(cake){
    return this._http.post('/new', cake);
  }
  
  addComment(cakeId:string, comment) {
    console.log("this is the passed comment", comment);
    return this._http.post('/new/comment/'+ cakeId, comment);
  }

  updateCake(updateCake){
    console.log("see this",updateCake)
  return this._http.put("/update/" + updateCake['id'], updateCake);
  }

  getCakes(){
    return this._http.get("/tasks")
  }

  getSingleCake(cakeId:string){
    console.log("this is the id", cakeId);
    return this._http.get('/byID/'+ cakeId);
}

  deleteCake(cakeId:string){
    return this._http.delete('/remove/' + cakeId);
  }
}
