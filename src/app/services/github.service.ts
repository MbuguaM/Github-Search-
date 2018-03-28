import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http';
import 'rxjs/add/operator/map';
import {User} from '../models/user';
import {Repository} from '../models/repository';
import {environment} from '../../environments/environment';

@Injectable()
export class GithubService {

   username:string;
   accesstoken= environment.apiUrl;
  constructor(private _http: HttpClient){
    console.log('Github Service Ready...');
    this.username="MbuguaM";

  }

  getUser(){
    return this._http.get("https://api.github.com/users/"+this.username+ "?access_token="+this.accesstoken)
    .map(result=>result)

  }
  getRepos(){
    return this._http.get("https://api.github.com/users/"+this.username+ "/repos?access_token="+ this.accesstoken)
    .map(result=>result)
   
}
updateUser(username:string){
  this.username = username;
}

}
