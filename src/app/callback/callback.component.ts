import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CallbackService } from './callback.service';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss'],
})
export class CallbackComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private callbackService: CallbackService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const code: string = this.route.snapshot.queryParamMap.get('code') || '';
    this.login(code);
  }

  login(code: string) {
    this.callbackService
      .login(code)
      .subscribe((data) => this.router.navigate([`/home/${data.id}`]));
  }
}
