import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/"
import { Observable } from 'rxjs/Observable';
import { User } from './user';

@Injectable()
export class RemotecallService {

  constructor(private remotehttp:HttpClient) { }

  callremote(){
    console.log("i am in service")
  }

  callRestData():Observable<User>
  {
    this.remotehttp.get("https://jsonplaceholder.typicode.com/users")
  }

  

}
