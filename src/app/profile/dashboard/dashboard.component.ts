import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardService } from 'src/app/_services/auth-guard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router, private auth: AuthGuardService) {}

  ngOnInit(): void {}
  
  onExit(): void {
    this.auth.userLoggedIn = false;
    this.router.navigate(['/']);
  }
}
