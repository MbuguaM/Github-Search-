import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../models/user';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
   
  
    @Input('user') user:User;
    @Input('repos') repos;

  
  constructor(private _githubService:GithubService) { }

  ngOnInit() {
  }

}
