import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from './home.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user = {
    name: '',
    profileImage: ''
  }
  constructor(private route: ActivatedRoute, private router: Router, private homeService: HomeService) { }

  ngOnInit(): void {
    const id:string = this.route.snapshot.paramMap.get('id') || '';
    console.log("First param", id)
    this.getUserInfo(id)
  }

  getUserInfo(id: string) {
    this.homeService
    .getUserDetails(id)
    .subscribe((data) => this.user = data);
  }

}
