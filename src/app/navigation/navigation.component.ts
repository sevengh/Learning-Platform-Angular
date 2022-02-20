import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardService } from '../_services/auth-guard.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  constructor(private auth: AuthGuardService, private router: Router) {}

  ngOnInit(): void {}

  onLogout(): void {
    this.auth.userLoggedIn = false;
    this.router.navigate(['/']);
  }
}
