import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators/filter';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  
  
  public login(): void {
    console.log("LOGIN")
  }
}
