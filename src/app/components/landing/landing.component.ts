import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  user:any=[];
  repos:any=[];
  username:string;
  constructor(private _githubService:GithubService) {
    this._githubService.getUser().subscribe(user => {
      console.log(user);
      this.user = user;
    })
    this._githubService.getRepos().subscribe(repos => {
      //console.log(user);
      this.repos = repos;
    })
  }
  ngOnInit() {
  }
   searchUser(){
     this._githubService.updateUser(this.username);
     this._githubService.getUser().subscribe(user => {
       this.user = user;
     })
     //console.log('It works');
     this._githubService.getRepos().subscribe(repos => {
       //console.log(user);
       this.repos = repos;
     })

   }

}
